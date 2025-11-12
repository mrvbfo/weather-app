export default function CityList({ cities }) {
  return (
    cities.length > 0 && (
      <div className="city-list-container">
        <h3>Kaydedilen Şehirler</h3>
        <ul className="city-list">
          {cities.map((city) => (
            <li key={city.id} className="city-item">
              <div className="city-name-temp">
                <span className="name">{city.name}</span>
                <span className="temp-info">
                  {parseInt(((city.temp - 32) * 5) / 9)}°C 
                </span>
              </div>
              <span className="weather-desc">{city.weather}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
