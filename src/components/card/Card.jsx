import "./card.css";
import CardHeader from "./CardHeader";
import CardMain from "./CardMain";
import CardFooter from "./CardFooter";

export default function Card({ data, onToggleFavorite, isFavorite }) {
  if (!data) return null;

  return (
    <article aria-labelledby={`city-${data.id}`} className="city-card">
      <div className="city-card-container">
        <CardHeader
          data={data}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />

        <CardMain data={data} />
        <CardFooter data={data} />
      </div>
    </article>
  );
}
