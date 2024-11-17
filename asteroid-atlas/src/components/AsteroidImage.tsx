import "../styles/Asteroid.css";

type AsteroidImageParams = {
  minDiameter: number;
  maxDiameter: number;
  id: number;
};

const Asteroid = ({ minDiameter, maxDiameter, id }: AsteroidImageParams) => {
  // Determine width and height from min/max diameters
  const width = id % 2 == 0 ? minDiameter : maxDiameter;
  const height = id % 2 == 0 ? maxDiameter : minDiameter;

  const widthPercent = Math.min(Math.floor(width) / 10, 100);
  const heightPercent = Math.min(Math.floor(height) / 10, 100);

  return (
    <div className="asteroid-frame">
      <div className="asteroid-image-container">
        <img
          className="asteroid-image"
          style={{
            maxWidth: `${widthPercent}%`,
            maxHeight: `${heightPercent}%`,
          }}
          src="/asteroid.png"
          alt="Asteroid"
        />
      </div>
      <div className="asteroid-diameters">
        <div>Minimum Diameter: {minDiameter} feet</div>
        <div>Maximum Diameter: {maxDiameter} feet</div>
      </div>
    </div>
  );
};

export default Asteroid;
