"use client";
import { useRouter } from "next/navigation";

const StandbyButton = ({ link }: { link: string }) => {
  const router = useRouter();

  return (
    <button
      className="w-[136px] min-h-[136px] flex bg-transparent items-center justify-center rounded-full border-[6px] border-solid border-[#138FA8]"
      onClick={() => router.push(link)}
    >
      <img src="/Standby.svg" alt="standby image" />
    </button>
  );
};

export default StandbyButton;
