import WeatherContainer from "./components/weather/WeatherContainer";
import { useWeather } from "./hooks/useWeather";

export default function App() {
  const { data, error, fetchWeatherByCity } = useWeather();
  return (
    <WeatherContainer
      data={data}
      error={error}
      fetchWeatherByCity={fetchWeatherByCity}
    />
  );
}
