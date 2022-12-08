import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData } from "chart.js";
import { useAppSelector } from "../hooks";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const censusData = useAppSelector((store) => store.census.filteredData);

  const data: ChartData<"line", number[], string> = {
    labels: censusData.map((data) => data.Year),
    datasets: [
      {
        label: "Population",
        backgroundColor: "white",
        borderColor: "blue",
        data: censusData.map((data) => data.Population),
      },
    ],
  };

  return (
    <div className="grow bg-white rounded-lg p-2">
      <div className="text-center my-2">{`Line Chart (Population/Year)`}</div>
      <Line data={data} />;
    </div>
  );
};

export default LineChart;
