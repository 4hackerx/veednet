module veednet::veednet_staking {
    use std::signer;
    use veednet::veednet_coin;

    friend veednet::veednet_protocol;

    /// Error codes
    const EInsufficientStake: u64 = 0;
    const ENeverStaked: u64 = 1;
    const EInvalidUnstakeAmount: u64 = 2;
    const EInvalidRewardAmount: u64 = 3;
    const EInvalidApy: u64 = 4;

    /// The reward multiplier is op_proof / denominator.
    const OPERATION_PROOFS_DENOMINATOR:u64 = 10;

    /// The minimum amount a node can stake, in VEED ~ 1.
    const MIN_STAKE: u64 = 100_000_000;

    struct StakedBalance has key {
        staked_balance: u64,
    }

    public(friend) fun stake(staker_account: &signer, amount: u64) {
        let staker_address = signer::address_of(staker_account);
        assert!(amount >= MIN_STAKE, EInsufficientStake);
        if (!exists<StakedBalance>(staker_address)){
            move_to(
                staker_account, 
                StakedBalance {
                    staked_balance: amount,
                }
            );
        } else {
            let staked_amount = borrow_global_mut<StakedBalance>(staker_address).staked_balance;
            staked_amount = staked_amount + amount;
        };
        veednet_coin::burn(staker_account, amount);
    }

    public(friend) fun unstake(staker_account: &signer, amount: u64) acquires StakedBalance {
        let staker_address = signer::address_of(staker_account);
        let staked_amount = borrow_global_mut<StakedBalance>(staker_address).staked_balance;
        assert!(staked_amount >= amount, EInvalidUnstakeAmount);
        staked_amount = staked_amount - amount;
        veednet_coin::mint(staker_address, amount);
    }

    public(friend) fun claim_rewards(staker_account: &signer, reward_numerator: u64) acquires StakedBalance {
        let staker_address = signer::address_of(staker_account);
        assert!(exists<StakedBalance>(staker_address), ENeverStaked);
        let staked_amount = borrow_global<StakedBalance>(staker_address).staked_balance;
        assert!(staked_amount > 0, EInsufficientStake);
        let opd = OPERATION_PROOFS_DENOMINATOR;
        let reward_amount = (staked_amount * reward_numerator) / (opd);
        veednet_coin::mint(staker_address, reward_amount);
    }

    public(friend) fun valid_staker(staker_address: address): bool acquires StakedBalance {
        assert!(exists<StakedBalance>(staker_address), ENeverStaked);
        let staked_amount = borrow_global<StakedBalance>(staker_address).staked_balance;
        staked_amount >= MIN_STAKE
    }

    public(friend) fun staked_amount(staker_address: address): u64 acquires StakedBalance {
        assert!(exists<StakedBalance>(staker_address), ENeverStaked);
        let staked_amount = borrow_global<StakedBalance>(staker_address).staked_balance;
        staked_amount
    }

    // #[test_only]
    // use aptos_framework::account;

    // #[test(alice=@0x11,bob=@0x2)]
    // public entry fun test_staking(alice : signer, bob : signer)  acquires StakedBalance{

    //     account::create_account_for_test(signer::address_of(&alice));
    //     account::create_account_for_test(signer::address_of(&bob));

    //     // Publish balance for Alice and Bob
    //     // veednet::veednet_coin::publish_balance(&alice);
    //     // veednet::veednet_coin::publish_balance(&bob);

    //     // Mint some tokens to Alice
    //     // veednet::veednet_coin::mint<veednet::veednet_coin::Coin>(signer::address_of(&bob), 1000);
    //     // veednet::veednet_coin::mint<veednet::veednet_coin::Coin>(signer::address_of(&alice), 1000);

    //     // Alice stakes some tokens
    //     stake(&alice, 500);
        

    //     // Check that Alice's staked balance is correct
    //     let alice_resource = borrow_global<StakedBalance>(signer::address_of(&alice));
    //     assert!(alice_resource.staked_balance == 500, 100);

    //     // // Alice tries to stake again (should fail)
    //     // stake(&alice, 500);

    //     // // Bob tries to unstake from Alice's account (should fail)
    //     // unstake(&bob, 200);
        
    //     // // Alice unstakes some tokens
    //     unstake(&alice, 200);

    //     // Check that Alice's staked balance is correct
    //     let alice_resource = borrow_global<StakedBalance>(signer::address_of(&alice));
    //     assert!(alice_resource.staked_balance == 300, 100);

    //     // // Alice claims rewards
    //     // claim_rewards(&alice);
    // }
}