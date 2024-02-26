"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { useMemo } from "react";
import { cn } from "@/library/utils";

const MainNav = () => {
  const segments = useSelectedLayoutSegments();

  const navItems = useMemo(
    () => [
      {
        name: "Home",
        href: "/",
        isActive: segments.length === 0,
      },
      {
        name: "Bounties",
        href: "/#bounties",
        isActive: segments.includes("blocs"),
      },
      {
        name: "FAQ",
        href: "/#faq",
        isActive: segments.includes("sgov"),
      },
    ],
    [segments]
  );

  return (
    <div className="flex sticky top-0 w-full justify-between items-center bg-white px-6 py-3 border-b">
      <div className="flex items-center gap-8">
        <Link className="rounded-full" href={"/"}>
          <img
            width={50}
            height={50}
            src="/veednet.svg"
            alt="veednet logo"
          />
        </Link>
        {/* <div className="flex gap-4">
          {navItems.map(({ name, href, isActive }) => (
            <Link
              key={name}
              href={href}
              className={cn(
                "flex items-center",
                { "bg-stone-200": isActive },
                "rounded-lg px-2 py-1.5 text-[#4E81FF] transition-all duration-150 ease-in-out hover:bg-stone-200 active:bg-stone-300"
              )}
            >
              {name}
            </Link>
          ))}
          <Link
            href={"/#create"}
            className={cn(
              "flex items-center rounded-lg bg-[#4E81FF] px-2 py-1.5 text-white transition-all duration-150 ease-in-out hover:bg-[#4E81FF] active:bg-[#4E81FF]"
            )}
          >
            Create
          </Link>
        </div> */}
      </div>
      <div className="flex gap-4 h-fit">
        <div className="bg-[#4E81FF] rounded-full p-[5px]">
          <img width={25} height={25} src="/discord.svg" alt="discord logo" />
        </div>
        <div className="bg-[#4E81FF] rounded-full p-[5px]">
          <img width={25} height={25} src="/twitter.svg" alt="twitter logo" />
        </div>
        <div className="bg-[#4E81FF] rounded-full p-[5px]">
          <img width={25} height={25} src="/github.svg" alt="github logo" />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
