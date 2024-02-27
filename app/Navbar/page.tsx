import "../../library/styles/globals.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between p-5 px-4 bg-[#F7F7F8] z-[99999]">
        <span className="text-[24px] cursor-pointer font-audiowide">VidNet</span>
        <div className="flex items-center gap-[7px] justify-center bg-black text-[white] px-4 rounded-[15px] h-[50px]">
          {/* <span className=""> */}
            <Image
              src="/png/icon1.png"
              alt={"star"}
              width={"15"}
              height={"40"}
              className="text-[black]"
            />
          {/* </span> */}
          <button className="font-audiowide font-[16px]">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
