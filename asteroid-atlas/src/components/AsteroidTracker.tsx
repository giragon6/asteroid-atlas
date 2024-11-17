import useData from "../utils/hooks/useData";
import Asteroid from "./Asteroid";

type AsteroidTrackerParams = {
  featuredID?: string;
  date?: Date;
  startDate?: Date;
  endDate?: Date | null;
};

const AsteroidTracker = ({
  featuredID,
  startDate = new Date(),
  endDate = null,
}: AsteroidTrackerParams) => {
  const [data, error] = useData(startDate, endDate);

  if (error) {
    return <div>An error occurred while loading asteroid data: {error}</div>;
  }

  if (data == null || data == undefined) {
    return <div>Loading...</div>;
  }

  const NEO = data.near_earth_objects;
  const dateNEO = data.near_earth_objects[startDate.toString().slice(10)];
  const featured =
    featuredID == undefined
      ? dateNEO.filter((NEO) => NEO.id == featuredID)[0]
      : dateNEO[0]; // default: 1st asteroid in list

  return (
    <>
      <h1>Featured Asteroid</h1>
      <Asteroid asteroidData={featured}></Asteroid>
      <ul>
        {Object.keys(NEO).map((date) => (
          <li>
            {date}
            <ul>
              {NEO[date].map((asteroidData) => (
                <li>
                  <Asteroid asteroidData={asteroidData}></Asteroid>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AsteroidTracker;
