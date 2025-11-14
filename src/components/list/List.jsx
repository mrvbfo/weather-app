import "./list.css"
import ListItem from "./ListItem";

export default function List({ cities }) {
  if (!cities.length) return null;

  return (
    <section className="city-list">
      <h3 className="list-title">Favorite Cities</h3>
      <ul className="list-items">
        {cities.map((city) => (
          <ListItem key={city.id} city={city} />
        ))}
      </ul>
    </section>
  );
}
