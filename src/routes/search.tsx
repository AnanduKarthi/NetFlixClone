import { createFileRoute } from "@tanstack/react-router";
import MovieCard from "@/components/MovieCard";

import type { TMDBResponse } from "@/type";
import performSearch from "@/lib/perfromSearch";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

export const Route = createFileRoute("/search")({
  component: SearchComponent,
  loader: async () => {
    const token = import.meta.env.VITE_TMDB_AUTH_TOKEN;
    const response = await fetch(API_URL, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }
    const data = (await response.json()) as TMDBResponse;
    const movies = data.results;
    return {
      baseMovies: movies,
    };
  },
});

function SearchComponent() {
  const search = Route.useSearch() as Record<string, string | undefined>;
  const { baseMovies } = Route.useLoaderData();

  const movie = search.movie ?? "";
  const results = performSearch(movie ?? "", baseMovies).data;
  console.log("search", movie);
  return (
    <div>
      {results.length > 0 ? (
        <div className="p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {movie
              ? `${results.length} results for ${movie}`
              : `${results.length} results}`}
          </div>
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
