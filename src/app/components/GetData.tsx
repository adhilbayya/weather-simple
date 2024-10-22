import Image from "next/image";
import React, { useEffect, useState } from "react";

interface WeatherData {
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  location: {
    localtime: string;
  };
}

interface GetdataProps {
  city: string;
}

function GetData({ city }: GetdataProps) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const getData = async () => {
      const api = `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&aqi=no`;

      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error(`Response error: ${response.status}`);
        }

        const data: WeatherData = await response.json();

        if (data.current.condition.icon.startsWith("//")) {
          data.current.condition.icon = "http:" + data.current.condition.icon;
        }

        setWeatherData(data);
      } catch (e) {
        setError((e as Error).message);
      }
    };

    getData();
    const interval = setInterval(getData, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [city]);
  return (
    <div>
      {error && <p>{error}</p>}
      {weatherData ? (
        <div>
          <h2>Current weather: </h2>
          <p>{weatherData.current.temp_c}°C</p>
          <p>{weatherData.current.condition.text}</p>
          <Image
            src={weatherData.current.condition.icon}
            alt="weather iocn"
            width={64}
            height={64}
          />
          <p>{weatherData.location.localtime}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GetData;
