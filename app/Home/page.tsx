`useClient`
// import Dropdown from '../Dropdown/page'
// import { Slider } from "@/components/ui/slider"



export default function Homee () {
  return (
    <div className="px-[15%] p-9">
      <div className="bg-[#FFFFFF] rounded-[15px] shadow-2xl w-[100%] h-[20vh] p-5">
        <div className="flex justify-center relative items-center px-9">
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
        <div className="flex justify-between ">
            <button className="bg-[#138FA8] w-[158px] h-[44px]">Choose Video</button>
            <button>Choose Video</button>
            <button className="bg-[#138FA8] w-[158px] h-[44px]">Compress Video</button>
        </div>
      </div>
    </div>
  )
};