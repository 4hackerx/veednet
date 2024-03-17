const Footer = () => {
  return (
    <div className=" bg-[#052437] py-20 flex flex-col items-center gap-[80px]">
      <div className=" flex flex-col items-center gap-9">
        <p className=" font-atyp text-[64px] leading-[80px] text-white w-[646px] text-center">
          Become a node and earn rewards!
        </p>
        <button className=" flex gap-2 bg-[#138FA8] text-white py-3 px-6 rounded-[32px] items-center font-outfit font-medium">
          <p>Get started right now!</p> <img src="/sort.svg" alt="" />
        </button>
      </div>
      <p className=" font-outfit text-white">© VeedNet 2024</p>
    </div>
  );
};

export default Footer;
