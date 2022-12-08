import { useEffect } from "react";
import CensusOrganizer from "./components/CensusOrganizer";
import ErrorMessage from "./components/ErrorMessage";
import Filter from "./components/Filter";
import LineChart from "./components/LineChart";
import Loader from "./components/Loader";
import PieChart from "./components/PieChart";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getCensus } from "./models/censusSlice";

function App() {
  const dispatch = useAppDispatch();
  const { isLoading, isFailed } = useAppSelector((store) => store.census);

  useEffect(() => {
    dispatch(getCensus());
  }, []);

  if (isLoading) return <Loader />;
  if (isFailed) return <ErrorMessage />;

  return (
    <div className="mx-auto max-w-screen-2xl py-8 px-2 xs:px-4">
      <CensusOrganizer />
      <div className="mt-10 mb-6">
        <Filter />
      </div>
      <div className="flex flex-col lg:flex-row gap-20">
        <LineChart />
        <PieChart />
      </div>
    </div>
  );
}

export default App;
