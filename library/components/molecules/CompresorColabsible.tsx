"use client";
import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";

const CollapsibleDemo = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="flex justify-center">
      <Collapsible.Root className="w-[72%]" open={open} onOpenChange={setOpen}>
        <div
          className="mb-5  border-none"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            className="text-violet11 font-outfit text-[16px] leading-[25px] mb-5"
            style={{ color: "#484E62" }}
          >
            Your video is being compressed by 2 nodes
          </span>
          <Collapsible.Trigger asChild>
            <div className="">
              <button
                className="rounded-[50%] h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 bg-[black] text-[#FFFFFF] outline-none data-[state=closed]:bg-white data-[state=open]:bg-violet3 hover:bg-violet3"
                onClick={() => {
                  setOpen;
                }}
              >
                {open ? <Cross2Icon /> : <RowSpacingIcon />}
              </button>
            </div>
          </Collapsible.Trigger>
        </div>

        <div className="flex justify-center">
          <div className="bg-[#FFFFFF] md:w-[100%] w-[55vh] rounded-[15px] shadow-2xl mb-5 lg:h-[15vh] md:h-[18vh] p-5">
            <div className="px-4">
              <div className="flex justify-between mb-4 ">
                <h1 className="text-[#000000] text-[16px] font-outfit font-bold">
                  Node 1
                </h1>
                <div className="flex items-center gap-2">
                  <Image
                    src="/png/icon4.png"
                    alt={"icon"}
                    width={"10"}
                    height={"12"}
                    className="text-[#000000] w-4 h-4"
                  />
                  <h1 className="font-outfit">
                    80 <span>MB</span>
                  </h1>
                </div>
              </div>
              <div className="w-full  h-[8px] bg-gray-200 rounded-md overflow-hidden">
                <div className="h-full bg-[#138FA8] transition-width w-[400px]"></div>
              </div>
            </div>
          </div>
        </div>

        <Collapsible.Content>
        {["", ""].map((_, index) => (
            <div className="flex justify-center">
              <div className="bg-[#FFFFFF] md:w-[100%] w-[55vh] rounded-[15px] shadow-2xl mb-5 lg:h-[15vh] md:h-[18vh] p-5">
                <div className="px-4">
                  <div className="flex justify-between mb-4 ">
                    <h1 className="text-[#000000] font-outfit text-[16px] font-bold">
                      Node 2
                    </h1>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/png/icon4.png"
                        alt={"icon"}
                        width={"10"}
                        height={"12"}
                        className="text-[#000000] w-4 h-4"
                      />
                      <h1 className="font-outfit">
                        80 <span>MB</span>
                      </h1>
                    </div>
                  </div>
                  <div className="w-full  h-[8px] bg-gray-200 rounded-md overflow-hidden">
                    <div className="h-full bg-[#138FA8] transition-width w-[400px]"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
};

export default CollapsibleDemo;
