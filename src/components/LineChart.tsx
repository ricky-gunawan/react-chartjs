import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data: ChartData<"line", number[], string> = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2021"],
    datasets: [
      {
        label: "Population",
        backgroundColor: "white",
        borderColor: "blue",
        data: [100, 200, 400, 300, 700, 600],
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
