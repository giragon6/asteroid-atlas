import "../styles/Asteroid.css";
import Counter from "./Counter";
import AsteroidValue from "../utils/types/AsteroidValue";
import AsteroidImage from "./AsteroidImage";

type AsteroidParams = {
  asteroidData: AsteroidValue;
};

const Asteroid = ({ asteroidData }: AsteroidParams) => {
  const featDate: Date = new Date(
    asteroidData.close_approach_data[0].close_approach_date_full
  );

  return (
    <div className="asteroid-card">
      <h3 className="asteroid-title">{asteroidData.name}</h3>
      <AsteroidImage
        minDiameter={asteroidData.estimated_diameter.feet.estimated_diameter_min}
        maxDiameter={asteroidData.estimated_diameter.feet.estimated_diameter_max}
        id={parseInt(asteroidData.id)}
      />
      <div className="asteroid-info">
        <p><b>ID:</b> {asteroidData.id}</p>
        <p><b>Potentially Hazardous?:</b>{` ${asteroidData.is_potentially_hazardous_asteroid ? "Yes" : "No"}`}</p>
        <p><b>Close Approach Date:</b> {featDate.toString()}</p>
      </div>
      <Counter date={featDate}></Counter>
    </div>
  );
};

export default Asteroid;
