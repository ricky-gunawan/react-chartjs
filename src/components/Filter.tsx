const Filter = () => {
  return (
    <div className="w-56 mx-auto">
      <div className="text-center border-b-2 border-slate-400 pb-1 mb-2">Filter</div>
      <div className="flex gap-2 justify-center">
        <div>
          <label className="ml-1 block">From</label>
          <select
            // value={productData.brand} onChange={handleFormChange}
            name="filter_date_start"
            id="filter_date_start"
            className="mb-4 w-full rounded-md border border-slate-300 focus:border-green-700 focus:ring-green-700"
          >
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
          <select
            // value={productData.brand} onChange={handleFormChange}
            name="filter_date_end"
            id="filter_date_end"
            className="mb-4 w-full rounded-md border border-slate-300 focus:border-green-700 focus:ring-green-700"
          >
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
