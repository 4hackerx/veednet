"use client";
import { useRouter } from "next/navigation";

const StandbyButton = ({ link }: { link: string }) => {
  const router = useRouter();

  return (
    <button
      className="w-[136px] min-h-[136px] flex items-center justify-center rounded-full border-[6px] border-solid border-[#138FA8] hover:bg-[#F1FDFF] border-[none] shadow-[0_0px_10px_#AEF2FF,0_1px_5px_#AEF2FF] hover:shadow-[0_0px_10px_#AEF2FF,0_1px_20px_#AEF2FF] active:shadow-[0_0px_1px_#AEF2FF] active:translate-y-[1px] active:bg-[#DDEBED] animate-shimmer bg-[linear-gradient(110deg,#fafeff,30%,#ddf9ff,50%,#fafeff)] bg-[length:200%_100%] transition-colors"
      onClick={() => router.push(link)}
    >
      <img src="/Standby.svg" alt="standby image" />
    </button>
  );
};

export default StandbyButton;
