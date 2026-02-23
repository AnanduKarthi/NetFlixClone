import MovieCard from "@/features/movies/components/MovieCard";
import { useSearch } from "@tanstack/react-router";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { useDebounce } from "@/lib/useDebounce";

export default function SearchComponent() {
  const { movie } = useSearch({ from: "/search" }) as Record<
    string,
    string | undefined
  >;

  const debouncedSearch = useDebounce(movie || "", 500);
  const { data: results = [], isLoading } = useSearchMovies(debouncedSearch);

  if (isLoading) {
    return <p className="p-4 md:p-6">Loading...</p>;
  }

  return (
    <div>
      {results.length > 0 ? (
        <div className="p-4 md:p-6 flex flex-wrap gap-5 justify-start items-start">
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {movie
              ? `${results.length} results for ${movie}`
              : `${results.length} results}`}
          </div>
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="p-4 md:p-6">No results</p>
      )}
    </div>
  );
}
