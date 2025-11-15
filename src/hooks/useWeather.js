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
        setError(null)
      } catch (error) {
        setError(error.message)
        setData(null);
      }
    };
    
  return {
    data,
    error,
    fetchWeatherByCity,
  }
}
