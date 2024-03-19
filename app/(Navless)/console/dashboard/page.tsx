"use client";
import ActionCards from "@/library/components/organisms/ActionCards";
import NodeAnalytics from "@/library/components/organisms/NodeAnalytics";
import dynamic from "next/dynamic";
import { useLayoutEffect, useRef, useState } from "react";
import { GlobeMethods } from "react-globe.gl";

const Globe = dynamic(
  () => import("@/library/components/organisms/WrappedGlobe"),
  {
    ssr: false,
    // loading: () => <div>Loading...</div>,
  }
);

const Page = () => {
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
      globeRef.current.controls().maxDistance = 320;
      globeRef.current.controls().minDistance = 320;
      globeRef.current.controls().enableZoom = false;
    }
  }, [loaded]);

  return (
    <div className="flex justify-center flex-1 overflow-scroll w-full">
      <div className="flex flex-col h-full">
        <NodeAnalytics />
        <div className="flex justify-center flex-1 overflow-hidden mb-4">
          <div className="-mt-4">
            <Globe
              onGlobeReady={() => setLoaded(true)}
              globeRef={globeRef}
              width={600}
              height={500}
              globeImageUrl="/earth-day.jpeg"
              backgroundColor="rgba(0, 0, 0, 0)"
              atmosphereColor="rgba(0, 234, 255, 0.665)"
              atmosphereAltitude={0.3}
              pointsData={gData}
              arcsData={gData}
              pointAltitude="size"
              pointColor="color"
              pointLabel="color"
            />
          </div>
        </div>
      </div>
      <ActionCards />
    </div>
  );
};

export default Page;
