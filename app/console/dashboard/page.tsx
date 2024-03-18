import ActionCards from "@/library/components/organisms/ActionCards";
import NodeAnalytics from "@/library/components/organisms/NodeAnalytics";

const page = () => {
  return (
    <div className="flex justify-center flex-1 overflow-scroll w-full">
      <div className="flex h-full">
        <NodeAnalytics />
      </div>
      <ActionCards />
    </div>
  );
};

export default page;
