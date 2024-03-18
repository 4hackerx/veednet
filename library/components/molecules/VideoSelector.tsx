"use client";
import { MagicWandIcon,VideoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import QualitySelect from "./QualitySelect";
import { ChangeEvent } from "react";

const VideoSelector = () => {
  return (
    <div className="">
      <div className="lg:px-[14%] md:px-[8%] px-[4%] p-7">
        <div className="bg-[#FFFFFF] rounded-[15px] shadow-2xl w-[100%] lg:h-[30vh] md:h-[40vh] p-5 mb-16">
          <div className="flex justify-center relative items-center lg:px-[7%] p-5 px-2">
            <div className="h-12 w-12 rounded-full bg-[#138FA8] text-white flex justify-center items-center">
              1
            </div>
            <div className="h-2 border-gray-300 bg-gray-300 flex-grow" />
            <div className="h-12 w-12 rounded-full bg-[#138FA8] text-white flex justify-center items-center">
              2
            </div>
            <div className="h-2 border-gray-300 bg-gray-300 flex-grow" />
            <div className="h-12 w-12 rounded-full bg-[#138FA8] text-white flex justify-center items-center">
              3
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-between px-4">
            <div className="flex text-[#FFFFFF] items-center text-center gap-[7px] justify-center bg-[#138FA8] w-[180px] h-[44px] rounded-[32px]">
              <VideoIcon />
              <button className="text-[16px] font-semibold">
                Choose Video
              </button>
            </div>
            <div className="items-center flex justify-center">
            <QualitySelect
              input={false}
              value={""}
              onChange={function (
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
            </div>
            <div className="flex items-center gap-[7px] justify-center bg-[#138FA8] w-[180px] h-[44px] text-[#FFFFFF] rounded-[32px]">
              <MagicWandIcon />
              <button className="text-[#FFFFFF] text-[16px] font-semibold">
                Compress Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSelector;
