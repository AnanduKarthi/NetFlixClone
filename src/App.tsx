import Hero from "./components/Hero";
import TrendingNow from "./features/movies/components/TrendingNow";

import "./App.css";
import { usePopularMovies } from "./features/movies/hooks/usePopularMovie";

function App() {
  const { data: movies, isError, isLoading } = usePopularMovies();

  const hasMovies = !!movies && movies.length > 0;

  return (
    <main>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {isLoading && (
          <section className="px-4 py-10 md:px-8 md:py-16">
            <div className="mx-auto max-w-6xl space-y-8">
              <div className="space-y-3">
                <div className="h-7 w-40 rounded-lg bg-neutral-900/80 animate-pulse" />
                <div className="h-4 w-64 rounded-lg bg-neutral-900/80 animate-pulse" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {Array.from({ length: 10 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-64 rounded-xl bg-neutral-900/70 border border-neutral-800/80 animate-pulse"
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {!isLoading && isError && (
          <section className="px-4 py-10 md:px-8 md:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-red-500">
                Something went wrong
              </h2>
              <p className="mt-2 text-sm md:text-base text-neutral-300">
                We couldn&apos;t load the popular movies right now. Please try
                again in a moment.
              </p>
            </div>
          </section>
        )}

        {!isLoading && !isError && !hasMovies && (
          <section className="px-4 py-10 md:px-8 md:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                No movies found
              </h2>
              <p className="mt-2 text-sm md:text-base text-neutral-300">
                There are no popular movies to show right now. Please check back
                later.
              </p>
            </div>
          </section>
        )}

        {!isLoading && !isError && hasMovies && (
          <>
            <Hero />
            <TrendingNow movies={movies} />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
