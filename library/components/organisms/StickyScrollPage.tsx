"use client";
import Image from "next/image";
import { StickyScroll } from "./StickyScrollReveal";
// import { StickyScroll } from "./stickyScrollReveal";

const content = [
  {
    title: "Compression Flow",
    description:
      "Nodes download videos for compression based on their position in an index of compressors. They calculate split points for compression and upload compressed files to IPFS, storing the hash as Compression Proof (CP) in the module.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Compression Flow
      </div>
    ),
  },
  {
    title: "User Flow",
    description:
      "Users upload videos to IPFS and invoke the compression function. Video hash, user address, and service configuration are stored in a struct. Additional fields accommodate necessary data.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))] flex items-center justify-center text-white">
        User Flow{" "}
      </div>
    ),
  },
  {
    title: "Node Flow",
    description:
      "Nodes register by staking Veedcoins, ensuring network security. A minimum stake requirement promotes inclusivity. Randomness from the Aptos blockchain facilitates equitable task assignment using a Weighted Random Algorithm (WRA) based on stake weight.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Node Flow
      </div>
    ),
  },
  {
    title: "Low-Level Protocol Flow",
    description:
      "Users provide video IPFS hash locations. WRA selects nodes from the dormant pool. Selected nodes move to the active pool, compress videos, and upload to IPFS. Module updates the phantom config with CP. Nodes get rewards and return to the dormant pool for future tasks.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Low-Level Protocol Flow
      </div>
    ),
  },
  {
    title: "Cycle Continuation",
    description:
      "The process ensures a continuous cycle of video compression tasks. Users, nodes, and the module collaborate seamlessly to handle compression requests efficiently, maintaining network integrity and performance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Cycle Continuation
      </div>
    ),
  },
];
function StickyScrollPage() {
  return (
    <>
      <div className="flex justify-center w-full bg-[#000011] -mb-40">
        <div className="flex flex-col gap-4 w-full max-w-screen-xl text-white px-8">
          <p className=" w-[15ch] font-atyp text-5xl leading-[60px]">
            A run down on how VeedNet works
          </p>
          <p className="w-[50ch] text-sm">
            Transform your videos into GIFs with our fast, easy, and free GIF
            maker. Convert to GIFs in just a few taps.
          </p>
        </div>
      </div>
      <StickyScroll content={content} />
    </>
  );
}
export default StickyScrollPage;
