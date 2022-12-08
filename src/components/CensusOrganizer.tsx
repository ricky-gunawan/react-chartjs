import { useAppSelector } from "../hooks";

const CensusOrganizer = () => {
  const {
    annotations: { source_name, source_description },
  } = useAppSelector((store) => store.census.source[0]);

  return (
    <>
      <h1 className="text-2xl font-semibold">{source_name}</h1>
      <p className="md:w-3/4">{source_description}</p>
    </>
  );
};

export default CensusOrganizer;
