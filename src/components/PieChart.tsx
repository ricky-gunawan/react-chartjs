import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data: ChartData<"pie", number[], string> = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2021"],
    datasets: [
      {
        label: "Population",
        data: [100, 200, 400, 300, 700, 600],
        backgroundColor: ["red", "blue", "green", "yellow", "purple", "orange"],
        hoverOffset: 10,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
