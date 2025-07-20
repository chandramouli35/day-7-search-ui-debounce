import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import useSearch from "./hooks/useSearch";
import { mockProducts } from "./data/mockProducts";

function App() {
  const { query, setQuery, filteredData } = useSearch(mockProducts, "name");
  const [resetFlag, setResetFlag] = useState(false);

  const resetQuery = () => {
    setResetFlag(true);
    setTimeout(() => setResetFlag(false), 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Product Search
      </h1>
      <SearchBar query={query} setQuery={setQuery} resetQuery={resetQuery} />
      <ProductList products={filteredData} query={query} />
    </div>
  );
}

export default App;
