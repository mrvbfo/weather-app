export default function ListItem({ city }) {
  if (!city) return null;

  return (
    <li className="list-item">
      <div className="list-info">
        <span className="list-name">{city.name}</span>
        <span className="list-temp">{Math.floor(city.temp)}°C</span>
        <span className="list-weather">{city.weather_main}</span>
      </div>
    </li>
  );
}