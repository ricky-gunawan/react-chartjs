import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { filterDateRange } from "../models/censusSlice";

const Filter = () => {
  const dispatch = useAppDispatch();
  const [filterDate, setFilterDate] = useState({
    date_start: "2013",
    date_end: "2020",
  });
  const [formChanges, setFormChanges] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormChanges(true);
    const elemName = e.target.name;
    const value = e.target.value;
    setFilterDate((prev) => ({ ...prev, [elemName]: value }));
  };

  useEffect(() => {
    formChanges && dispatch(filterDateRange(filterDate));
  }, [filterDate]);

  return (
    <div className="w-56 mx-auto">
      <div className="text-center border-b-2 border-slate-400 pb-1 mb-2">Filter</div>
      <div className="flex gap-2 justify-center">
        <div>
          <label className="ml-1 block">From</label>
          <select value={filterDate.date_start} onChange={handleFormChange} name="date_start" id="date_start" className="mb-4 w-full rounded-md border border-slate-300 cursor-pointer focus:border-green-700 focus:ring-green-700">
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div>
          <label className="ml-1 block">To</label>
          <select value={filterDate.date_end} onChange={handleFormChange} name="date_end" id="date_end" className="mb-4 w-full rounded-md border border-slate-300 cursor-pointer focus:border-green-700 focus:ring-green-700">
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
