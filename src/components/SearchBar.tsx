import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="flex items-center gap-2">
      {show && (
        <input
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
