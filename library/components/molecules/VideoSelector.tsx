import Image from "next/image"

export default function VideoSelector() {
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
        <div className="flex flex-wrap justify-between px-4">
          <div className="flex items-center gap-[7px] justify-center bg-[#138FA8] w-[158px] h-[44px] rounded-[10px]">
            <Image
              src="/png/icon2.png"
              alt={"icon"}
              width={"15"}
              height={"15"}
            />
            <button className="text-[#FFFFFF] text-[16px] font-semibold">
              Choose Video
            </button>
          </div>
          <button className="w-[158px] h-[44px] rounded-[10px] border border-[#138FA8] text-[#484E62] text-[16px]">
            Select Quality
          </button>
          <div className="flex items-center gap-[7px] justify-center bg-[#138FA8] w-[158px] h-[44px] rounded-[10px]">
            <Image
              src="/png/icon3.png"
              alt={"icon"}
              width={"15"}
              height={"15"}
            />
            <button className="text-[#FFFFFF] text-[16px] font-semibold">
              Compress Video
            </button>
          </div>
        </div>
      </div>
        </div>
        </div>
    )
}
