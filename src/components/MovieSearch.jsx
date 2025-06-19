import { useState } from "react";

const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
      onSearch(query);
  };

  return (
    <div className="flex items-center justify-center mt-6 mb-6">
      <div className="flex w-full max-w-md bg-gray-200 shadow-lg rounded-lg overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 transition-colors duration-200 cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default MovieSearch;
