import AsteroidValue from "../utils/types/AsteroidValue";
import Asteroid from "./Asteroid";

type AsteroidListParams = {
  NEO: {
    [key: string]: AsteroidValue[];
  }
}

const AsteroidList = ({NEO}: AsteroidListParams) => {
  return (
    <>
        {Object.keys(NEO).map((date) => (
          <>
            <h2>{date}</h2>
            <div className="asteroid-list-container">
              {NEO[date].map((asteroidData) => (
                  <Asteroid asteroidData={asteroidData}></Asteroid>
              ))}
            </div>
          </>
        ))}
      </>
  );
};

export default AsteroidList;
