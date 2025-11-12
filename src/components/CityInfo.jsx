export default function CityInfo({ data, onAddCity }) {
  return (
    <>
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? (
            <h1>{parseInt(((data.main.temp.toFixed() - 32) * 5) / 9)}°C</h1>
          ) : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>

      {data.name !== undefined && (
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">
                {parseInt(((data.main.feels_like.toFixed() - 32) * 5) / 9)}°C
              </p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? (
              <p className="bold">{data.wind.speed.toFixed()} MPH</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
          <button className="add-to-list-btn" onClick={onAddCity}>
            +
          </button>
        </div>
      )}
</>
  );
}
