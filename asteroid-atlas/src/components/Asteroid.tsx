import Counter from "./Counter";
import AsteroidValue from "../utils/types/AsteroidValue";

type AsteroidParams = {
  asteroidData: AsteroidValue
}

const Asteroid = ({asteroidData}: AsteroidParams) => {

  const featDate: Date = new Date(
    asteroidData.close_approach_data[0].close_approach_date_full
  );

  return (
    <>
      <h2>Name: {asteroidData.name}</h2>
      <h2>ID: {asteroidData.id}</h2>
      <h2>Arrival Date: {featDate.toString()}</h2>
      <Counter date={featDate}></Counter>
    </>
  );
};

export default Asteroid;
