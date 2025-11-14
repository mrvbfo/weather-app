export default function CardMain({ data }) {
  return (
    <section className="card-main">
      <span className="card-temp">
        {data.temp !== undefined ? Math.round(data.temp) + "°C" : "-"}
      </span>
      <p className="card-weather">{data.weather_main ?? "-"}</p>
    </section>
  );
}
