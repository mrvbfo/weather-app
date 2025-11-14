import { useState } from "react";
import { getCurrentWeather } from "../services/weatherAPI";

export const useWeather = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeatherByCity = async (city) => {
      setError("");
      setData(null);

      try{
        const weatherData = await getCurrentWeather(city);
        setData(weatherData)
      } catch (error) {
        setError(error.message)
      }
    };
    
  return {
    data,
    error,
    fetchWeatherByCity,
  }
}
