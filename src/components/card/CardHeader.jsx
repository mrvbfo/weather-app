import { Heart } from "lucide-react";

export default function CardHeader({ data, onToggleFavorite, isFavorite }) {
    
  return (
    <header className="card-header">
      <div className="card-title">
        <h2 className="city-name" id={`city-${data.id}`}>
          {data.name ?? "-"}
        </h2>
        <p className="city-country">{data.country ?? "-"}</p>
      </div>

      <button
        type="button"
        onClick={() => onToggleFavorite(data)}
        aria-label={`${data.name} named city add to favorities`}
        className="card-fav-btn"
      >
        <Heart
          aria-hidden="true"
          fill={isFavorite ? "red" : "none"}
          stroke={isFavorite ? "red" : "currentColor"}
        />
      </button>
    </header>
  );
}
