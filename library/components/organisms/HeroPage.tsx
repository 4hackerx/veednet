const HeroPage = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-600 to-gray-950 h-[calc(100vh-80px)] text-white flex justify-center w-full">
      <div className="flex gap-7 items-center justify-between w-full max-w-screen-xl px-8">
        {/* text */}
        <div className=" flex flex-col gap-8 w-[506px]">
          {/* text */}
          <div className=" flex flex-col gap-6 justify-start">
            <p className=" font-atyp text-[64px] leading-[80px]">
              Compress your video Save more space
            </p>
            <p className=" text-sm">
              Transform your videos into GIFs with our fast, easy, and free GIF
              maker. Convert to GIFs in just a few taps.
            </p>
          </div>
          {/* buttons */}
          <div className=" flex gap-6">
            <button className=" bg-[#138FA8] py-3 px-6 rounded-[32px] font-outfit font-medium">
              Compress a Video
            </button>
            <button className=" border-white border flex gap-2 py-3 px-6 rounded-[32px] items-center font-outfit font-medium">
              <p>Become a Node</p>
              <img src="/sort.svg" alt="sort" />
            </button>
          </div>
        </div>
        {/* hero picture */}
        <img src="ball.png" alt="" />
      </div>
    </div>
  );
};

export default HeroPage;
