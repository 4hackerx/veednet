import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 h-[80px] z-[99999]">
      <Image src={"/logo.svg"} alt={"logo"} width={"150"} height={"31"} />
      <button className=" font-outfit font-[16px] bg-black text-[white] px-6 rounded-[32px] py-3.5">
        Connect Wallet
      </button>
    </div>
  );
};

export default Navbar;
