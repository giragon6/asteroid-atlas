import "../styles/App.css";
import { useState } from "react";
import useData from "../utils/hooks/useData";
import Asteroid from "./Asteroid";
import AsteroidList from "./AsteroidList";
import Button from "./utils/Button";

type AsteroidTrackerParams = {
  featuredIndex?: number;
  date?: Date;
  startDate?: Date;
  endDate?: Date;
};

const AsteroidTracker = ({
  featuredIndex = 0,
  startDate = new Date(),
  endDate = startDate,
}: AsteroidTrackerParams) => {
  const [data, error] = useData(startDate, endDate);
  const [showAsteroidList, setShowAsteroidList] = useState(false);

  if (error) {
    return <div>An error occurred while loading asteroid data: {error}</div>;
  }

  if (data == null || data == undefined) {
    return <div>Loading...</div>;
  }

  const NEO = data.near_earth_objects;
  const dateNEO =
    data.near_earth_objects[
      startDate.toLocaleDateString("fr-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    ];
  const featured = dateNEO[featuredIndex];

  return (
    <>
      <h1>Featured Asteroid</h1>
      <Asteroid asteroidData={featured} />
      <Button
        onClick={() => setShowAsteroidList(!showAsteroidList)}
        children={`Show ${showAsteroidList ? "less" : "more"}`}
      />
      {showAsteroidList ? <AsteroidList NEO={NEO} /> : null}
    </>
  );
};

export default AsteroidTracker;
