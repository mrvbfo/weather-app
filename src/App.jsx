import { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import CityInfo from "./components/CityInfo";
import CityList from "./components/CityList";
import "./App.scss";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [cities, setCities] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6a2b5cfa92391797b41b27efb3bd37c5`;

  const searchLocation = (e) => {
    e.preventDefault();
    setError("");
    if (location.trim() === "") return;

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setError(`"${location}" adında bir şehir bulunamadı.`);
        } else {
          setError("Hava durumu bilgisi alınırken bir sorun oluştu.");
        }
        setData({});
      })
      .finally(() => {
        setLocation("");
      });
  };

  const addCityToList = () => {
    if (data.name) {
      const isDuplicate = cities.some((city) => city.id === data.id);

      if (!isDuplicate) {
        const newCity = {
          id: data.id,
          name: data.name,
          temp: data.main.temp,
          weather: data.weather[0].main,
        };
        setCities((prevCities) => [...prevCities, newCity]);
      } else {
        alert(`${data.name} zaten listede var.`);
      }
    }
  };

  return (
    <div className="app">
      <Search
        searchQuery={location}
        setSearchQuery={setLocation}
        handleSearch={searchLocation}
      />
      {error && <p className="error-message">{error}</p>}
      <div className="container"> 
        <CityInfo data={data} onAddCity={addCityToList} />
        <CityList cities={cities} />
      </div>
    </div>
  );
}
