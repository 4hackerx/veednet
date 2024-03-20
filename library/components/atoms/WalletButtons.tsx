"use client";

import {
    useWallet,
    WalletReadyState,
    Wallet,
    isRedirectable,
    WalletName,
} from "@aptos-labs/wallet-adapter-react";


export const WalletButtons = () => {
    const { wallets, connected, disconnect, isLoading } = useWallet();

    if (connected) {
        //return <Button onClick={disconnect}>Disconnect</Button>;

        return (
            <button
                onClick={disconnect}
                className=" font-outfit font-[16px] bg-black text-[white] px-6 rounded-[32px] py-3.5"
            >
                Disconnect
            </button>
        );
    }

    if (isLoading || !wallets[0]) {
       // return <Text>Loading...</Text>;
       return <p>Loading...</p>
    }

    return <WalletView wallet={wallets[0]} />;
};

const WalletView = ({ wallet }: { wallet: Wallet }) => {
    const { connect } = useWallet();
    const isWalletReady =
        wallet.readyState === WalletReadyState.Installed ||
        wallet.readyState === WalletReadyState.Loadable;
    const mobileSupport = wallet.deeplinkProvider;

    const onWalletConnectRequest = async (walletName: WalletName) => {
        try {
            connect(walletName);
        } catch (error) {
            console.warn(error);
            window.alert("Failed to connect wallet");
        }
    };

    /**
     * If we are on a mobile browser, adapter checks whether a wallet has a `deeplinkProvider` property
     * a. If it does, on connect it should redirect the user to the app by using the wallet's deeplink url
     * b. If it does not, up to the dapp to choose on the UI, but can simply disable the button
     * c. If we are already in a in-app browser, we don't want to redirect anywhere, so connect should work as expected in the mobile app.
     *
     * !isWalletReady - ignore installed/sdk wallets that don't rely on window injection
     * isRedirectable() - are we on mobile AND not in an in-app browser
     * mobileSupport - does wallet have deeplinkProvider property? i.e does it support a mobile app
     */
    if (!isWalletReady && isRedirectable()) {
        // wallet has mobile app
        if (mobileSupport) {
            return (
                // <button
                //   className={cn(buttonStyles, "hover:bg-blue-700")}
                //   disabled={false}
                //   key={wallet.name}
                //   onClick={() => onWalletConnectRequest(wallet.name)}
                //   style={{ maxWidth: "300px" }}
                // >
                //   Connect Wallet
                // </button>

                // <Button
                //     colorScheme="blackAlpha"
                //     onClick={() => onWalletConnectRequest(wallet.name)}
                // >
                //     Connect Wallet
                // </Button>

                <button
                    onClick={() => onWalletConnectRequest(wallet.name)}
                    className=" font-outfit font-[16px] bg-black text-[white] px-6 rounded-[32px] py-3.5"
                >
                    Connect Wallet
                </button>
            );
        }
        // wallet does not have mobile app
        return (
            // <button
            //   className={cn(buttonStyles, "opacity-50 cursor-not-allowed")}
            //   disabled={true}
            //   key={wallet.name}
            //   style={{ maxWidth: "300px" }}
            // >
            //   Connect Wallet - Desktop Only
            // </button>

            // <Button colorScheme="blackAlpha" isDisabled={true}>
            //     Connect Wallet - Desktop Only
            // </Button>

            <button
                disabled={true}
                className=" font-outfit font-[16px] bg-black text-[white] px-6 rounded-[32px] py-3.5"
            >
                Connect Wallet
            </button>
        );
    } else {
        // desktop
        return (
            // <button
            //   className={cn(
            //     buttonStyles,
            //     isWalletReady ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"
            //   )}
            //   disabled={!isWalletReady}
            //   key={wallet.name}
            //   onClick={() => onWalletConnectRequest(wallet.name)}
            //   style={{ maxWidth: "300px" }}
            // >
            //   Connect Wallet
            // </button>

                // <Button
            //     colorScheme="facebook"
            //     isDisabled={!isWalletReady}
            //     onClick={() => onWalletConnectRequest(wallet.name)}
            // >
            //     Connect Wallet
            // </Button>

            <button
                disabled={!isWalletReady}
                onClick={() => onWalletConnectRequest(wallet.name)}
                className=" font-outfit font-[16px] bg-black text-[white] px-6 rounded-[32px] py-3.5"
            >
                Connect Wallet
            </button>

        
        );
    }
};
