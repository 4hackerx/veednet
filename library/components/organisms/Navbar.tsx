import Image from "next/image";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { Layout, Row, Col } from "antd";
import { WalletButtons } from "../atoms/WalletButtons";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-6 h-[80px] z-[99999]">
            <Image src={"/logo.svg"} alt={"logo"} width={"150"} height={"31"} />
            <WalletButtons />
        </div>
    );
};

export default Navbar;
