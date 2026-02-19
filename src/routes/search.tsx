import { createFileRoute } from "@tanstack/react-router";
import MovieCard from "@/components/MovieCard";

import type { TMDBResponse } from "@/type";
import performSearch from "@/lib/perfromSearch";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjFiNjdjMTgwMzUxMWQxNTVmNDZhM2ZhZTA2ODYyYyIsIm5iZiI6MTc0ODYyOTkwNi4yNjcsInN1YiI6IjY4MzlmOTkyZGU4ZWNlOWQwZTNkMjIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yKPIERgR6XXWDJvgWJIqIoGDVRL1HDZIJCNyZdY6uWs";
export const Route = createFileRoute("/search")({
  component: SearchComponent,
  loader: async () => {
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
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No results</p>
      )}
    </div>
  );
}
