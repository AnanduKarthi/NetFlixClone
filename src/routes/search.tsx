import { createFileRoute } from "@tanstack/react-router";
import MovieCard from "@/components/MovieCard";

import useSearchStore from "@/stores/searchStore";

export const Route = createFileRoute("/search")({
  component: SearchComponent,
});

function SearchComponent() {
  const { movie } = Route.useSearch();
  const results = useSearchStore((state) => state.results);
  console.log("search", movie);
  return (
    <div>
      {results.length > 0 ? (
        <div className="p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {results.map((movie, ind) => (
            <MovieCard key={movie.id} movie={movie} ind={ind} />
          ))}
        </div>
      ) : (
        <p>No results</p>
      )}
    </div>
  );
}
