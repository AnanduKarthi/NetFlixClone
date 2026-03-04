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
    return (
      <section className="px-4 py-6 md:px-8 md:py-10">
        <div className="mx-auto max-w-6xl">
          <header className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Search
            </h1>
            <p className="mt-1 text-sm md:text-base text-neutral-400">
              Searching for{" "}
              {movie ? (
                <span className="font-medium text-white">&quot;{movie}&quot;</span>
              ) : (
                "movies"
              )}
              ...
            </p>
          </header>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_, idx) => (
              <div
                key={idx}
                className="h-64 rounded-xl bg-neutral-900/60 border border-neutral-800/80 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 md:mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Search
            </h1>
            <p className="mt-1 text-sm md:text-base text-neutral-400">
              {movie ? (
                <>
                  Showing results for{" "}
                  <span className="font-medium text-white">&quot;{movie}&quot;</span>
                </>
              ) : (
                "Discover movies and find something to watch."
              )}
            </p>
          </div>

          {results.length > 0 && (
            <span className="text-xs md:text-sm text-neutral-400">
              {results.length} {results.length === 1 ? "result" : "results"}
            </span>
          )}
        </header>

      {results.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {movie
              ? `${results.length} results for ${movie}`
              : `${results.length} results`}
          </div>
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900/70 border border-neutral-800/80">
            <span className="text-2xl" aria-hidden="true">
              🔍
            </span>
          </div>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            No results found
          </h2>
          <p className="mt-2 max-w-md text-sm md:text-base text-neutral-400">
            {movie
              ? `We couldn’t find anything matching “${movie}”. Try a different title, genre, or keyword.`
              : "Try searching for a movie title, genre, or actor to get started."}
          </p>
        </div>
      )}
      </div>
    </section>
  );
}
