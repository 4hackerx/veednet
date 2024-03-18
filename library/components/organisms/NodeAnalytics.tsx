import Card from "../molecules/Card";

const analytics = [
  {
    resource: "Splits Processed",
    value: "2.2k",
    action: { value: "View ↗", call: () => {} },
  },
  {
    resource: "Session Rewards",
    value: "2.2k",
    action: { value: "Collect ↗", call: () => {} },
  },
  {
    resource: "Total Staked",
    value: "2.2k",
    action: { value: "Stake More ↗", call: () => {} },
  },
];

const NodeAnalytics = () => {
  return (
    <div className="flex flex-col h-full p-4 min-w-fit gap-4 flex-1">
      <p className=" font-outfit font-semibold w-full gap-4">Total Cycles</p>
      <div className="grid grid-cols-2 gap-4">
        <Card className="min-w-80 w-fit flex-row justify-between">
          <div className="flex flex-col gap-6">
            <p className=" font-outfit font-semibold text-[#484E62]">
              Tickets Sold
            </p>
            <p className="text-4xl font-outfit font-bold text-[#02071E]">
              2.2k
            </p>
          </div>
        </Card>

        {analytics.map((items) => {
          return (
            <Card className="min-w-80 w-fit flex-row justify-between cursor-pointer">
              <div className="flex flex-col gap-6">
                <p className=" font-outfit font-semibold text-[#484E62]">
                  {items.resource}
                </p>
                <p className="text-4xl font-outfit font-bold text-[#02071E]">
                  {items.value}
                </p>
              </div>
              <p className="font-atyp text-sm text-[#34C759] font-bold">
                {items.action.value}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default NodeAnalytics;
