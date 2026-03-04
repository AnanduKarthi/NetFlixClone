import MovieList from "./MovieList";
import type { Movie } from "@/features/movies/type";

const TrendingNow = ({ movies }: { movies: Movie[] }) => {
  return (
    <section className="mt-10 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-red-500">
              Today on Reactflix
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Trending now
            </h2>
          </div>

          <span className="hidden text-xs text-neutral-400 md:inline">
            {movies.length} {movies.length === 1 ? "title" : "titles"}
          </span>
        </div>

        <div className="relative rounded-2xl bg-gradient-to-r from-neutral-900/80 via-neutral-900/40 to-transparent px-2 py-4 md:px-4 md:py-5">
          <MovieList movies={movies} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
