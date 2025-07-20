import { useState } from "react";

function SearchBar({ query, setQuery, resetQuery }) {
  const [tempQuery, setTempQuery] = useState(query);

  const handleChange = (e) => {
    setTempQuery(e.target.value);
    setQuery(e.target.value);
  };

  const handleReset = () => {
    setTempQuery("");
    setQuery("");
    resetQuery();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto">
      <input
        type="text"
        value={tempQuery}
        onChange={handleChange}
        placeholder="Search products..."
        className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleReset}
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
      >
        Reset
      </button>
    </div>
  );
}

export default SearchBar;
