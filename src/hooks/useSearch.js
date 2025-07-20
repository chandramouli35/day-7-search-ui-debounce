import { useState, useMemo } from "react";
import useDebounce from "./useDebounce";

function useSearch(data, searchKey) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  const filteredData = useMemo(() => {
    if (!debouncedQuery) return data;
    return data.filter((item) =>
      item[searchKey].toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [data, debouncedQuery, searchKey]);

  return { query, setQuery, filteredData };
}

export default useSearch;
