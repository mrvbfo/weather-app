import { useState } from "react";
import Search from "./components/search/Search";
import Card from "./components/card/Card";
import List from "./components/list/List";
import "./style/app.css";
import { useWeather } from "./hooks/useWeather";

export default function App() {
  const {data,error,fetchWeatherByCity} = useWeather();
  const [cities, setCities] = useState([]);

  function toggleFavorite(city) {
    setCities((prev) => {
      if (prev.some((c) => c.id === city.id)) {
        // If the city is already in the list, remove it
        return prev.filter((c) => c.id !== city.id);
      }
      return [...prev, city]; // If the city is not in the list, add it
    });
  }

  return (
    <main className="weather-app-container">
      <header className="weather-app-header">
        <h1>TODAY'S WEATHER</h1>
        <p>Search for weather information.</p>
      </header>

      <Search onSearch={fetchWeatherByCity} />

      {error && <p className="error-message">{error}</p>}

      <div className="weather-app-content">
        {data && (
          <Card
            data={data}
            onToggleFavorite={toggleFavorite}
            isFavorite={cities.some((c) => c.id === data.id)}
          />
        )}
        <List cities={cities} />
      </div>
    </main>
  );
}
