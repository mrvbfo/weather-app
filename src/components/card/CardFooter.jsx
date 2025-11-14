export default function CardFooter({ data }) {
  const items = [
    {
      label: "Humidity",
      value: data.humidity ?? "-",
    },
    {
      label: "Feels Like",
      value:
        data.feels_like !== undefined
          ? Math.round(data.feels_like) + "°C"
          : "-",
    },
    {
      label: "Wind Speed",
      value:
        data.wind_speed !== undefined
          ? data.wind_speed.toFixed() + " MPH"
          : "-",
    },
  ];

  return (
    <footer className="card-footer">
      {items.map((item) => (
        <div className="card-footer-item" key={item.label}>
          <span className="card-footer-label">{item.label}</span>
          <span className="card-footer-value">{item.value}</span>
        </div>
      ))}
    </footer>
  );
}
