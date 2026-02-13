import Hero from "./components/Hero";
import TrendingNow from "./components/TrendingNow";
import { usePopularMovies } from "./lib/usePopulerMoview";
import "./App.css";

function App() {
  const { movies, error, loading } = usePopularMovies();

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
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
