import axios from "axios";
import { GetCensusApiResponse } from "./types";

const url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

const getCensusApi = async () => {
  const resp = await axios.get<GetCensusApiResponse>(url);
  return resp.data;
};

export default getCensusApi;
