"use client";
import Image from "next/image";
import { StickyScroll } from "./StickyScrollReveal";
// import { StickyScroll } from "./stickyScrollReveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))] flex items-center justify-center text-white">
      A Picture can be here
    </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
function StickyScrollPage() {
  return (
    <div className=" flex flex-col gap-[100px] bg-[#000011]">
      <div className=" flex flex-col gap-6 mx-[120px] w-[506px] text-white">
        <p className=" font-atyp text-[46px] leading-[60px]">
          A run down on how Veednet works
        </p>
        <p className=" text-sm">
          Transform your videos into GIFs with our fast, easy, and free GIF
          maker. Convert to GIFs in just a few taps.
        </p>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
export default StickyScrollPage;
