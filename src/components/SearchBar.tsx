import { Search } from "lucide-react";
import { useState } from "react";

import { useNavigate } from "@tanstack/react-router";
import performSearch from "@/lib/perfromSearch";
import useSearchStore from "@/stores/searchStore";
import useBaseMovieStore from "@/stores/moviesStore";

const SearchBar = () => {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

  const baseMovies = useBaseMovieStore((state) => state.baseMovies);
  const setResults = useSearchStore((state) => state.setResults);

  const searchQuery = (query: string) => {
    const matchingTitles = performSearch(query, baseMovies);
    setResults(matchingTitles.data);
    navigate({ to: "/search", search: { movie: query } });
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
