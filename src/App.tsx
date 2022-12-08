import CensusOrganizer from "./components/CensusOrganizer";
import Filter from "./components/Filter";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

function App() {
  return (
    <div className="mx-auto max-w-screen-2xl py-8 px-2 xs:px-4">
      <CensusOrganizer />
      <div className="mt-10 mb-6">
        <Filter />
      </div>
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="grow">
          <LineChart />
        </div>
        <div className="grow">
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default App;
