import { useEffect, useState } from "react";
import AsteroidValue from "../types/AsteroidValue";

type AsteroidResponse = {
  links: {
    next: string;
    previous: string;
    self: string;
  };
  element_count: number;
  near_earth_objects: {
    [key: string]: AsteroidValue[];
  };
};

async function fetchAsteroidData(
  startDate: Date,
  endDate: Date | null
): Promise<AsteroidResponse | null> {
  const API_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate.toLocaleDateString(
    "fr-CA",
    { year: "numeric", month: "2-digit", day: "2-digit" }
  )}${
    endDate &&
    `&end_date=${endDate.toLocaleDateString("fr-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })}`
  }&api_key=${import.meta.env.VITE_NASA_API_KEY}`;

  try {
    // Make the fetch request
    return fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        if (response == null) {
          throw new Error("Error parsing request");
        }
        return response;
      })
      .then((response) => {
        return (response as AsteroidResponse) || null;
      });
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

function useData(
  startDate: Date,
  endDate: Date | null
): [AsteroidResponse | null, string | null] {
  const [data, setData] = useState<AsteroidResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  try {
    useEffect(() => {
      fetchAsteroidData(startDate, endDate).then((response) => {
        if (response) {
          setData(response as AsteroidResponse);
        } else {
          setError("No data found or an error occurred");
          console.log(`Error fetching data: ${error}`);
        }
      });
    }, []);
  } catch (e) {
    setError(`Error fetching data: ${e}`);
  }

  return [data, error];
}

export default useData;
