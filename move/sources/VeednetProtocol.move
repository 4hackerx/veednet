module veednet::veednet_protocol {
    use std::signer;
    use std::string;
    use std::option::{Self, Option};
    use aptos_std::smart_vector::{Self, SmartVector};
    use aptos_framework::randomness;
    use veednet::veednet_coin;
    use veednet::veednet_staking;

    /// Error codes
    const ENODE_NOT_REGISTERED: u64 = 0;
    const EINVALID_VIDEO_HASH: u64 = 1;
    const ENeverStaked: u64 = 2;
    const ENODE_NOT_ACTIVE: u64 = 3;
    const ENODE_ALREADY_ACTIVE: u64 = 4;
    const ENodeUnavailable: u64 = 5;

    /// The video operation amount, in VEED ~ 1.
    const VIDEO_OP_PRICE: u64 = 100_000_000;

    struct ProtocolPool has key {
        active: SmartVector<address>,
    }

    struct User has key, store {
        videos: SmartVector<Video>,
    }

    struct Video has store {
        ipfs_hash: string::String,
        user_address: address,
        node_proofs: SmartVector<NodeProof>,
    }

    struct NodeProof has copy, drop, store {
        node_address: address,
        proof: Option<string::String>,
    }

    struct Node has key {
        operation_proofs: u64,
        pending_task: bool,
        task_address: Option<address>,
        task_index: Option<u64>,
    }

    public fun initialize(deployer: &signer) {
        move_to(
            deployer, 
            ProtocolPool {
                active: smart_vector::empty(),
            }
        );
    }

    /// Stake

    public fun stake(staker_account: &signer, amount: u64) {
        veednet_staking::stake(staker_account, amount)
    }

    public fun unstake(staker_account: &signer, amount: u64) {
        veednet_staking::unstake(staker_account, amount)
    }

    public fun claim_rewards(staker_account: &signer) {
        let staker_address = signer::address_of(staker_account);
        let reward_numerator = stake_multiplier_reset(staker_address);
        veednet_staking::claim_rewards(staker_account, reward_numerator)
    }

    public fun valid_staker(staker_address: address): bool {
        veednet_staking::valid_staker(staker_address)
    }

    public fun staked_amount(staker_address: address): u64 {
        veednet_staking::staked_amount(staker_address)
    }

    public fun stake_multiplier_reset(node_address: address): u64 acquires Node {
        let node_state = borrow_global_mut<Node>(node_address);
        let original_op_proofs = node_state.operation_proofs;

        // Reset op proofs count
        node_state.operation_proofs = 0;

        // Return the original value as reward multiplier numerator
        original_op_proofs
    }

    public entry fun join_pool(node_account: &signer) acquires Node {
        let node_address = signer::address_of(node_account);

        if (!exists<Node>(node_address)) {
            move_to(
                node_account,
                Node {
                    operation_proofs: 0,
                    pending_task: false,
                    task_address: option::none(),
                    task_index: option::none(),
                }
            )
        };

        let node_state = borrow_global<Node>(node_address);
        assert!(!node_state.pending_task, ENODE_ALREADY_ACTIVE);
        join_pool_internal(node_address);
    }

    public entry fun compress_video(user_account: &signer, video_splits: u64, ipfs_hash: string::String) acquires User, Node {
        assert!(!string::is_empty(&ipfs_hash), EINVALID_VIDEO_HASH);
        let user_address = signer::address_of(user_account);
        veednet_coin::burn(user_account, VIDEO_OP_PRICE);

        if (!exists<User>(user_address)) {
            move_to(
                user_account,
                User {
                    videos: smart_vector::empty()
                }
            )
        };

        let select_compressors = randomly_pick_addresses_internal(video_splits);
        let node_proofs = smart_vector::new<NodeProof>();

        let i = 0;
        while (i < smart_vector::length(&select_compressors)) {
            let node_address = *smart_vector::borrow(&select_compressors, i);

            // Update the Node with the details of their current task.
            let user_videos = &borrow_global<User>(user_address).videos;
            let node_state = borrow_global_mut<Node>(node_address);
            node_state.pending_task = true;
            node_state.task_address = option::some(user_address);
            node_state.task_index = option::some(smart_vector::length(user_videos));


            // Instantiate the proof.
            let proof =  NodeProof {
                node_address,
                proof: option::none(),
            };

            smart_vector::push_back(&mut node_proofs, proof);
            i = i + 1
        };


        let user_videos = &mut borrow_global_mut<User>(user_address).videos;
        let video = Video {
            ipfs_hash,
            user_address,
            node_proofs,
        };
        smart_vector::push_back(user_videos, video);
    }

    public entry fun complete_compress_video(node_account: &signer, proof: string::String) acquires Node {
        let node_address = signer::address_of(node_account);
        assert!(exists<Node>(node_address), ENODE_NOT_REGISTERED);
        let node_state = borrow_global_mut<Node>(node_address);
        assert!(node_state.pending_task, ENODE_NOT_ACTIVE);
        // Collect IPFS hash of completed task as proof of work
        node_state.operation_proofs = node_state.operation_proofs + 1;
        node_state.pending_task = false;
        // Call join_pool_internal to make the node available for new tasks
        join_pool_internal(node_address);
    }

    fun join_pool_internal(node_address: address) acquires ProtocolPool {
        let pool = borrow_global_mut<ProtocolPool>(@veednet);
        assert!(valid_staker(node_address), ENeverStaked);
        smart_vector::push_back(&mut pool.active, node_address);
    }

    fun randomly_pick_addresses_internal(num_addresses: u64): SmartVector<address> acquires ProtocolPool {
        let pool = borrow_global_mut<ProtocolPool>(@veednet);
        let selected_addresses = smart_vector::empty();
        let available_addresses = &mut pool.active;
        let total_stake = 0u64;

        // Calculate the total stake
        let i = 0;
        while (i < smart_vector::length(available_addresses)) {
            let address = *smart_vector::borrow(available_addresses, i);
            total_stake = total_stake + staked_amount(address);
            i = i + 1;
        };

        // Random selection with stake
        let j = 0;
        while (j < num_addresses) {
            // Generate a random number between [1, total_stake]
            let random_stake = randomness::u64_range(1, total_stake);
            let cursor = 0;
            let k = 0;
            while (k < smart_vector::length(available_addresses)) {
                let address = *smart_vector::borrow(available_addresses, k);
                let stake_amount = staked_amount(address);
                cursor = cursor + stake_amount;
                if (cursor >= random_stake) {
                    smart_vector::push_back(&mut selected_addresses, address);
                    smart_vector::remove(available_addresses, k);
                    total_stake = total_stake - stake_amount;
                    break
                };
                k = k + 1;
            };
            j = j + 1;
        };

        // TODO: Fix potential race conditions from join_pool_internal 
        // Remove the selected addresses from the active pool
        let l = 0;
        while (l < smart_vector::length(&pool.active)) {
            let address = *smart_vector::borrow(&pool.active, l);
            if (smart_vector::contains(&selected_addresses, &address)) {
                smart_vector::remove(&mut pool.active, l);
            } else {
                l = l + 1;
            }
        };

        selected_addresses
    }
}