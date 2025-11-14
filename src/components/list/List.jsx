import "./list.css"

export default function List({ cities }) {
  if (!cities.length) return null;

  return (
    <section className="city-list">
      <h3 className="list-title">Favorite Cities</h3>
      <ul className="list-items">
        {cities.map((city) => (
          <li key={city.id} className="list-item">
            <div className="list-info">
              <span className="list-name">{city.name}</span>
              <span className="list-temp">{Math.floor(city.temp)}°C</span>
              <span className="list-weather">{city.weather_main}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
