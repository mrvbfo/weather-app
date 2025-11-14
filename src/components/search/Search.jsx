import { useCallback, useState } from "react";
import "./search.css"

export default function Search({ initial = "", onSearch }) {
  const [query, setQuery] = useState(initial);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!query.trim()){
        alert("Please text a city name.");
        return ;
      }
      onSearch(query.trim());
      setQuery("");
    },
    [query, onSearch]
  );

  return (
    <section className="search-container"> 
      <form className="search-form" onSubmit={handleSubmit} role="search" aria-label="Weather search">
        <input
          className="search-input"
          type="text"
          placeholder="Enter Location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search Location"
        />
      </form>
    </section>
  );
}
