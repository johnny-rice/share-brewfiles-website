import type { DeveloperType } from "@/types/personality";
import { PieChart } from "react-minimal-pie-chart";

const CustomPieChart = ({ data }: { data: DeveloperType }) => {
const colors = [
	      "#8A2BE2", // Blue Violet
	        "#9370DB", // Medium Purple
		  "#BA55D3", // Medium Orchid
		    "#DA70D6", // Orchid
		      "#9932CC", // Dark Orchid
		        "#6A0DAD"  // Purple
    ];

  const pieData = Object.entries(data).map(([title, value], index) => ({
    title,
    value: parseFloat(value),
    color: colors[index],
  }));
  return (
    <div
      className="flex p-3 sm:p-6 rounded-xl bg-bkg/70 text-center justify-center"
      data-gridname="pie"
    >
      <div className="grid gap-4">
        <p className="text-lg sm:text-xl uppercase text-balance leading-heading tracking-widest font-mono">
          Dev Breakdown
        </p>
        {data && (
          <PieChart
            data={pieData}
            className="max-w-[100px] place-self-center sm:max-w-full"
          />
        )}
        <div className="flex gap-2 flex-wrap justify-center justify-self-center max-w-2xs sm:max-w-xs">
          {pieData
            .filter(({ value }) => value > 0)
            .map(({ title, color }) => (
              <div className="flex gap-0.5 items-center" key={title}>
                <div
                  className="size-3 rounded-full"
                  style={{
                    backgroundColor: color,
                  }}
                ></div>
                <p className="text-xs sm:text-sm">{title.substring(8)}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default CustomPieChart;
