import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getCensusApi from "./getCensusApi";
import getRangeNumberUtil from "./getRangeNumberUtil";
import { CensusData, CensusSource } from "./types";

const initialState: { isLoading: boolean; isFailed: boolean; originalData: Array<CensusData>; filteredData: Array<CensusData>; source: Array<CensusSource> } = {
  isLoading: true,
  isFailed: false,
  originalData: [
    {
      "ID Nation": "",
      Nation: "",
      "ID Year": NaN,
      Year: "",
      Population: NaN,
      "Slug Nation": "",
    },
  ],
  filteredData: [
    {
      "ID Nation": "",
      Nation: "",
      "ID Year": NaN,
      Year: "",
      Population: NaN,
      "Slug Nation": "",
    },
  ],
  source: [
    {
      measures: [""],
      annotations: {
        source_name: "",
        source_description: "",
        dataset_name: "",
        dataset_link: "",
        table_id: "",
        topic: "",
        subtopic: "",
      },
      name: "",
      substitutions: [],
    },
  ],
};

export const getCensus = createAsyncThunk("census/getCensus", getCensusApi);

const censusSlice = createSlice({
  name: "census",
  initialState,
  reducers: {
    filterDateRange: (state, action: { payload: { date_start: string; date_end: string } }) => {
      const yearStart: number = parseInt(action.payload.date_start);
      const yearEnd: number = parseInt(action.payload.date_end);
      const dateRange = getRangeNumberUtil(yearStart, yearEnd);
      state.filteredData = state.originalData.filter((data) => dateRange.includes(parseInt(data.Year)));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCensus.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getCensus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.originalData = action.payload.data.reverse();
        state.filteredData = action.payload.data;
        state.source = action.payload.source;
      })
      .addCase(getCensus.rejected, (state, _) => {
        state.isLoading = false;
        state.isFailed = true;
      });
  },
});

export const { filterDateRange } = censusSlice.actions;

const censusReducer = censusSlice.reducer;
export default censusReducer;
