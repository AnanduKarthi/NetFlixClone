import Hero from "./components/Hero";
import TrendingNow from "./features/movies/components/TrendingNow";

import "./App.css";
import { usePopularMovies } from "./features/movies/hooks/usePopularMovie";

function App() {
  const { data: movies, isError, isLoading } = usePopularMovies();

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }
  if (isError) {
    return <div className="text-red-500">Error: {isError}</div>;
  }
  if (!movies) {
    return <div className="text-red-500">No movies found.</div>;
  }
  return (
    <main>
      <div className="min-h-screen bg-background text-foreground translation-colors duration-300">
        <Hero />
        <TrendingNow movies={movies} />
      </div>
    </main>
  );
}

export default App;
