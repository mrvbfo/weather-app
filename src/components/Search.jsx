export default function Search({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter Location"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}
