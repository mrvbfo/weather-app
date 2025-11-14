import { useCallback, useState } from "react";
import "./search.css"

export default function Search({ initial = "", onSearch }) {
  const [value, setValue] = useState(initial);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!value.trim()){
        alert("Please text a city name.");
        return ;
      }
      onSearch(value.trim());
    },
    [value, onSearch]
  );

  return (
    <section className="search-container"> 
      <form className="search-form" onSubmit={handleSubmit} role="search" aria-label="Weather search">
        <input
          className="search-input"
          type="text"
          placeholder="Enter Location"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="Search Location"
        />
      </form>
    </section>
  );
}
