"use client";
import dynamic from "next/dynamic";
import { useLayoutEffect, useRef, useState } from "react";
import { GlobeMethods } from "react-globe.gl";

const Globe = dynamic(() => import("./WrappedGlobe"), {
  ssr: false,
  // loading: () => <div>Loading...</div>,
});

const HeroPage = () => {
  const globeRef = useRef<GlobeMethods>();
  const [loaded, setLoaded] = useState(false);

  const N = 250;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  }));

  useLayoutEffect(() => {
    if (globeRef.current && typeof window !== "undefined") {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 2.0;
      globeRef.current.controls().maxDistance = 310;
      globeRef.current.controls().minDistance = 310;
      globeRef.current.controls().enableZoom = false;
    }
  }, [loaded]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="bg-gradient-to-b from-cyan-600 to-[#000011] h-[calc(100vh-80px)] text-white flex justify-center w-full"
      onWheel={handleWheel}
    >
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
        {/* hero globe */}
        <Globe
          onGlobeReady={() => setLoaded(true)}
          globeRef={globeRef}
          width={600}
          height={586}
          globeImageUrl="/earth-night.jpg"
          backgroundColor="rgba(0, 0, 0, 0)"
          atmosphereColor="rgba(0, 234, 255, 0.665)"
          atmosphereAltitude={0.3}
          // pointsData={gData}
          // arcsData={gData}
          // pointAltitude="size"
          // pointColor="color"
          // pointLabel="color"
        />
      </div>
    </div>
  );
};

export default HeroPage;
