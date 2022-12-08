export type GetCensusApiResponse = {
  data: Array<CensusData>;
  source: Array<CensusSource>;
};

export type CensusData = {
  "ID Nation": string;
  Nation: string;
  "ID Year": number;
  Year: string;
  Population: number;
  "Slug Nation": string;
};

export type CensusSource = {
  measures: [string];
  annotations: {
    source_name: string;
    source_description: string;
    dataset_name: string;
    dataset_link: string;
    table_id: string;
    topic: string;
    subtopic: string;
  };
  name: string;
  substitutions: [];
};
