"use client";
import { cn } from "@/library/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef } from "react";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    // offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    console.log(closestBreakpointIndex);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#000011",
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="flex justify-center w-full"
      ref={ref}
    >
      <div className="relative flex justify-start w-full max-w-screen-xl px-8 gap-64">
        <div className="flex items-start py-80">
          <div className="flex flex-col gap-24 max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="flex flex-col gap-6">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-4xl font-bold text-slate-100 font-outfit"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-slate-300 max-w-sm"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center h-screen sticky top-0">
          <motion.div
            animate={{
              background: linearGradients[activeCard % linearGradients.length],
            }}
            className={cn(
              "hidden lg:block h-[357px] w-[485px] rounded-md bg-white overflow-hidden",
              contentClassName
            )}
          >
            {content[activeCard].content ?? null}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
