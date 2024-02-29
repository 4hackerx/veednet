import Navbar from "@/library/components/organisms/Navbar";
import VideoSelector from "@/library/components/molecules/VideoSelector";
import CollapsibleDemo from "@/library/components/molecules/CompresorColabsible";





export default function Home() {
  return (
    <div>
      <Navbar />
      <VideoSelector/>
      <CollapsibleDemo/>
    </div>
    
  );
}
