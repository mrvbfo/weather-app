import { Heart } from "lucide-react";

export default function CityInfo({ data, onAddCity }) {
  if (!data) return null;

  return (
    <article aria-labelledby={`city-${data.id}`} className="city-card">
      <div className="city-card-container">
        <header className="card-header">
          <div className="card-title">
            <h2 className="city-name" id={`city-${data.id}`}>
              {data.name ?? "-"}
            </h2>
            <p className="city-country">{data.country ?? "-"}</p>
          </div>

          <button
            type="button"
            onClick={() => onAddCity(data)}
            aria-label={`${data.name} named city add to favorities`}
            className="card-fav-btn"
          >
            <Heart aria-hidden="true" />
          </button>
        </header>

        <section className="card-main">
          <span className="card-temp">
            {data.temp !== undefined ? Math.round(data.temp) + "°C" : "-"}
          </span>
          <p className="card-weather">{data.weather_main ?? "-"}</p>
        </section>

        <footer className="card-footer">
          <div className="card-footer-item">
            <span className="card-footer-label">Humidity</span>
            <span className="card-footer-value">{data.humidity ?? "-"}</span>
          </div>
          <div className="card-footer-item">
            <span className="card-footer-label">Feels Like</span>
            <span className="card-footer-value">
              {data.feels_like !== undefined
                ? Math.round(data.feels_like) + "°C"
                : "-"}
            </span>
          </div>
          <div className="card-footer-item">
            <span className="card-footer-label">Wind Speed</span>
            <span className="card-footer-value">
              {data.wind_speed !== undefined
                ? data.wind_speed.toFixed() + " MPH"
                : "-"}
            </span>
          </div>
        </footer>
      </div>
    </article>
  );
}
