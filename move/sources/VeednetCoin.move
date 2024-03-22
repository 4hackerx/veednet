module veednet::veednet_coin{
    use std::string;
    use aptos_framework::coin::{Self, BurnCapability, FreezeCapability, MintCapability};

    friend veednet::veednet_staking;
    friend veednet::veednet_protocol;

    struct VeednetCoin {}

    struct Capabilities<phantom CoinType> has key {
        burn_cap: BurnCapability<CoinType>,
        freeze_cap: FreezeCapability<CoinType>,
        mint_cap: MintCapability<CoinType>,
    }

    fun init_module(deployer: &signer) {
        let (burn_cap, freeze_cap, mint_cap) = coin::initialize<VeednetCoin>(
            deployer,
            string::utf8(b"Veednet Coin"),
            string::utf8(b"VEED"),
            8,
            false,
        );

        move_to(deployer, Capabilities<VeednetCoin> {
            burn_cap,
            freeze_cap,
            mint_cap,
        });
    }

    public(friend) fun burn(account: &signer, amount: u64) acquires Capabilities {
        let capabilities = borrow_global<Capabilities<VeednetCoin>>(@veednet);
        let coins_to_burn = coin::withdraw<VeednetCoin>(account, amount);
        coin::burn(coins_to_burn, &capabilities.burn_cap);    
    }

    public entry fun mint(account_address: address, amount: u64) acquires Capabilities {
        let capabilities = borrow_global<Capabilities<VeednetCoin>>(@veednet);
        let coins_minted = coin::mint(amount, &capabilities.mint_cap);
        coin::deposit(account_address, coins_minted);
    }

    public entry fun register(account: &signer) {
        coin::register<VeednetCoin>(account);
    }

    // #[test_only]
    // use std::signer;


    // #[test(alice = @0x11, bob = @0x22)]
    // #[expected_failure(abort_code = 0, location = Self)]
    // fun test_init_module(alice: &signer, bob: &signer) acquires Capabilities {
    //     // Initialize the module with alice as the deployer
    //     init_module(alice);

    //     // Check that the capabilities resource was created
    //     assert!(exists<Capabilities<VeednetCoin>>(@veednet), 0);

    //     // Try to initialize the module again with bob, should fail
    //     let wrong_deployer = bob;
    //     init_module(wrong_deployer);
    // }

    // #[test(alice = @0x11, bob = @0x22)]
    // fun test_register(alice: &signer, bob: &signer) acquires Capabilities {
    //     // Initialize the module with alice as the deployer
    //     init_module(alice);

    //     // Register alice and bob
    //     register(alice);
    //     register(bob);

    //     // Check that both alice and bob have VeednetCoin resources
    //     assert!(coin::balance<VeednetCoin>(signer::address_of(alice)) == 0, 0);
    //     assert!(coin::balance<VeednetCoin>(signer::address_of(bob)) == 0, 1);
    // }

    // #[test(alice = @0x11, bob = @0x22)]
    // fun test_mint(alice: &signer, bob: &signer) acquires Capabilities {
    //     // Initialize the module with alice as the deployer
    //     init_module(alice);

    //     // Mint coins to alice and bob
    //     mint(signer::address_of(alice), 100);
    //     mint(signer::address_of(bob), 200);

    //     // Check balances
    //     assert!(coin::balance<VeednetCoin>(signer::address_of(alice)) == 100, 0);
    //     assert!(coin::balance<VeednetCoin>(signer::address_of(bob)) == 200, 1);
    // }

    // #[test(alice = @0x11, bob = @0x22)]
    // fun test_burn(alice: &signer, bob: &signer) acquires Capabilities {
    //     // Initialize the module with alice as the deployer
    //     init_module(alice);

    //     // Register alice and bob
    //     register(alice);
    //     register(bob);

    //     // Mint coins to alice and bob
    //     mint(signer::address_of(alice), 100);
    //     mint(signer::address_of(bob), 200);

    //     // Burn coins from alice and bob
    //     burn(alice, 50);
    //     burn(bob, 100);

    //     // Check balances
    //     assert!(coin::balance<VeednetCoin>(signer::address_of(alice)) == 50, 0);
    //     assert!(coin::balance<VeednetCoin>(signer::address_of(bob)) == 100, 1);
    // }

}
