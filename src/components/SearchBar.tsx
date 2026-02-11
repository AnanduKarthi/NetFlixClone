import { Search } from "lucide-react";
import { useState } from "react";

import { useSearchStore } from "../stores/searchStore";

const SearchBar = () => {
  const [show, setShow] = useState<boolean>(false);

  const performSearch = useSearchStore((state) => state.performSearch);

  const searchQuery = (query: string) => {
    performSearch(query);
  };
  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const query = event.target.value;
    searchQuery(query);
  };
  return (
    <div className="flex items-center gap-2">
      {show && (
        <input
          onChange={handleSearchQueryChange}
          type="text"
          placeholder="Search for movies, TV shows, and more..."
          className="w-full md:w-96 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
        />
      )}

      <button onClick={() => setShow(!show)}>
        <Search className="w-6 h-6 " />
      </button>
    </div>
  );
};

export default SearchBar;
