import { useState } from "react";
import Search from "../search/Search";
import Card from "../card/Card";
import List from "../list/List";
import "./weather.css";

export default function WeatherContainer({ data, error, fetchWeatherByCity }) {
  const [cities, setCities] = useState([]);

  const handleToggleFavorite = (city) => {
    setCities((prev) => {
      if (prev.some((c) => c.id === city.id)) {
        // If the city is already in the list, remove it
        return prev.filter((c) => c.id !== city.id);
      }
      return [...prev, city]; // If the city is not in the list, add it
    });
  };

  const isFavorite = data ? cities.some((c) => c.id === data.id) : false;
  return (
    <main className="weather-app-container">
      <header className="weather-app-header">
        <h1 className="weather-app-title">TODAY'S WEATHER</h1>
        <p className="weather-app-desc">Search for weather information.</p>
      </header>

      <Search onSearch={fetchWeatherByCity} />

      {error && <p className="error-message">{error}</p>}

      <div className="weather-app-content">
        {data && (
          <Card
            data={data}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={isFavorite}
          />
        )}
        <List cities={cities} />
      </div>
    </main>
  );
}
