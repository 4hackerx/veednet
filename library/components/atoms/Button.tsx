import { cn } from "@/library/utils";
import Link from "next/link";
import Image from "next/image";

interface buttonProps {
  text: string;
  handleClick: any;
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
            "py-4 rounded-[5px] text-sm text-[#767b82] flex items-center justify-center",
            button.className
          )}
          href={button.href || ""}
        >
          {button.text}
          {button.buttonImg && (
            <Image src={`/${button.buttonImg}`} className=" pl-4" alt={""} />
          )}
        </Link>
      ) : (
        <button
          onClick={button.handleClick}
          className={cn(
            "flex items-center justify-center font-bold text-white text-base leading-normal m-0 py-3 px-4 bg-[#4E81FF] rounded-lg border-[none] shadow-[0_0px_1px_hsla(0,0%,0%,0.2),0_1px_2px_hsla(0,0%,0%,0.2)] hover:shadow-[0_0px_1px_hsla(0,0%,0%,0.6),0_1px_8px_hsla(0,0%,0%,0.2)] active:shadow-[0_0px_1px_hsla(0,0%,0%,0.4)] active:translate-y-[1px] active:bg-[#4E81FF]",
            button.className
          )}
        >
          {button.text}
          {button.buttonImg && (
            <Image src={`/${button.buttonImg}`} className="pl-4" alt={""} />
          )}
        </button>
      )}
    </>
  );
};

export default Button;
