import { cn } from "@/library/utils";

const AvatarButton = ({
  src,
  handleClick,
}: {
  src: string;
  handleClick: any;
}) => {
  return (
    <button
      onClick={handleClick}
      className={cn(
        "h-[100px] w-[100px] rounded-full flex items-center justify-center animate-shimmer border bg-[linear-gradient(110deg,#D9D9D9,30%,#c9c8c8,50%,#D9D9D9)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      )}
    >
      <img src={src} alt="" />
    </button>
  );
};

export default AvatarButton;
