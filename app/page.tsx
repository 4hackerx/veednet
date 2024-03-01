"use client";
import { ContainerScroll } from "@/library/components/molecules/scroll-animation";
import React from "react";

function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll users={[]} titleComponent={undefined} />
    </div>
  );
}

export default HeroScrollDemo;
