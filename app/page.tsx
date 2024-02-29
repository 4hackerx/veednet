// import Image from "next/image";
import Navbar from "@/library/components/organisms/Navbar";
import VideoSelector from "@/library/components/molecules/VideoSelector";
import CollapsibleDemo from "@/library/components/molecules/CompresorColabsible";
import { VideoCompressor } from "@/library/components/services/video-compressor/page";





export default function Home() {
  return (
    <div>
      <Navbar />
      <VideoSelector/>
      <CollapsibleDemo/>
      <VideoCompressor />
    </div>
    
  );
}
