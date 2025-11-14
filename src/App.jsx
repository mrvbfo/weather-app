import { useState } from "react";
import Search from "./components/search/Search";
import CityInfo from "./components/card/Card";
import CityList from "./components/list/List";
import "./style/app.css";

const BASE = "https://api.openweathermap.org/data/2.5/weather";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [cities, setCities] = useState([]);

  async function handleSearch(query) {
    try {
      setError("");
      setData(null);

      const url = `${BASE}?q=${encodeURIComponent(query)}&appid=${import.meta.env.VITE_APP_ID}&units=metric`;

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("City not found or information not retrieved");
      }

      const json = await res.json();

      const cityData = {
        id: json.id,
        name: json.name,
        country: json.sys?.country,
        temp: json.main?.temp,
        feels_like: json.main?.feels_like,
        humidity: json.main?.humidity,
        wind_speed: json.wind?.speed,
        weather_main: json.weather?.[0]?.main,
      };

      setData(cityData);
    } catch (err) {
      setError(err.message);
    }
  }

  function addCity(city) {
    if (!city?.id) return;
    setCities((prev) => {
      if (prev.some((c) => c.id === city.id)) {
        setError(`${city.name} is added`);
        return prev;
      }
      return [...prev, city];
    });
  }

  return (
    <main className="weather-app-container">
      <header className="weather-app-header">
        <h1>TODAY'S WEATHER</h1>
        <p>Search for weather information.</p>
      </header>

      <Search onSearch={handleSearch} />

      {error && <p className="error-message">{error}</p>}

      <div className="weather-app-content">
        {data && <CityInfo data={data} onAddCity={addCity} />}
        <CityList cities={cities} />
      </div>
    </main>
  );
}
