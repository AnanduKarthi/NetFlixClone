import { Search } from "lucide-react";
import { useState } from "react";

import { useNavigate } from "@tanstack/react-router";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const searchQuery = (query: string) => {
    navigate({ to: "/search", search: { movie: query } });
  };
  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const query = event.target.value;
    setSearchValue(query);
    searchQuery(query);
  };
  return (
    <div className="flex items-center gap-2">
      <input
        value={searchValue}
        onChange={handleSearchQueryChange}
        type="text"
        placeholder="Search for movies, TV shows, and more..."
        className="w-full md:w-96 px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
      />

      <button>
        <Search className="w-6 h-6 " />
      </button>
    </div>
  );
};

export default SearchBar;
