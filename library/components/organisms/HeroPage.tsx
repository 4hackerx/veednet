"use client";
import Globe from "react-globe.gl";
import { useRef } from "react";

const HeroPage = () => {
  const globeEl = useRef();

  const N = 250;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  }));

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
        <Globe
          width={600}
          height={586}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundColor="rgba(0,0,0,0)"
          pointsData={gData}
          arcsData={gData}
          pointAltitude="size"
          pointColor="color"
          pointLabel="color"
        />
      </div>
    </div>
  );
};

export default HeroPage;
