import Image from "next/image";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between p-5 px-4 bg-[#F7F7F8] z-[99999]">
        <div className="flex items-center gap-[5px] justify-center">
          <Image
            src="/png/icon5.png"
            alt={"icon5"}
            width={"15"}
            height={"40"}
            className="text-[black] w-[27.37px] h-[27.37px]"
          />
          <span className="text-[24px] cursor-pointer font-audiowide">
            VeedNet
          </span>
        </div>
        <div className="flex items-center gap-[7px] justify-center bg-black text-[white] px-4 rounded-[32px] w-[159px] h-[48px]">
          <button className="font-[16px] font-outfit text-[16px] font-bold">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
