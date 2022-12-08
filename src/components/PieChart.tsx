import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useAppSelector } from "../hooks";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const censusData = useAppSelector((store) => store.census.filteredData);

  const data: ChartData<"pie", number[], string> = {
    labels: censusData.map((data) => data.Year),
    datasets: [
      {
        label: "Population",
        data: censusData.map((data) => data.Population),
        backgroundColor: ["maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow"],
        hoverOffset: 10,
      },
    ],
  };

  return (
    <div className="grow bg-white rounded-lg p-2">
      <div className="text-center my-2">{`Pie Chart (Population/Year)`}</div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
