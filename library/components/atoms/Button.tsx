import { cn } from "@/library/utils";
import Link from "next/link";

interface buttonProps {
  text: string;
  handleClick?: any;
  buttonImg?: string;
  link?: boolean;
  href?: string;
  className?: string;
}

const Button = (button: buttonProps) => {
  return (
    <>
      {button.link ? (
        <Link
          className={cn(
            "flex items-center justify-center font-bold text-white text-base leading-normal m-0 py-3 px-3 bg-black rounded-2xl border-[none] shadow-[0_0px_1px_hsla(0,0%,0%,0.2),0_1px_2px_hsla(0,0%,0%,0.2)] hover:shadow-[0_0px_1px_hsla(0,0%,0%,0.6),0_1px_8px_hsla(0,0%,0%,0.2)] active:shadow-[0_0px_1px_hsla(0,0%,0%,0.4)] active:translate-y-[1px] active:bg-black",
            button.className
          )}
          href={button.href || ""}
        >
          {button.text}
          {button.buttonImg && <img src={`/${button.buttonImg}`} alt={""} />}
        </Link>
      ) : (
        <button
          onClick={button.handleClick}
          className={cn(
            "flex items-center justify-center font-bold text-white text-base leading-normal m-0 py-3 px-3 bg-black rounded-2xl border-[none] shadow-[0_0px_1px_hsla(0,0%,0%,0.2),0_1px_2px_hsla(0,0%,0%,0.2)] hover:shadow-[0_0px_1px_hsla(0,0%,0%,0.6),0_1px_8px_hsla(0,0%,0%,0.2)] active:shadow-[0_0px_1px_hsla(0,0%,0%,0.4)] active:translate-y-[1px] active:bg-black",
            button.className
          )}
        >
          {button.text}
          {button.buttonImg && <img src={`/${button.buttonImg}`} alt={""} />}
        </button>
      )}
    </>
  );
};

export default Button;
