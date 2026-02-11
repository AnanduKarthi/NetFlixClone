import Hero from "./components/Hero";
import TrendingNow from "./components/TrendingNow";
import "./App.css";
import useSearchStore from "./stores/searchStore";
import MovieCard from "./components/MovieCard";

function App() {
  const results = useSearchStore((state) => state.results);
  console.log("Search results in App component:", results);
  return (
    <main>
      <div className="min-h-screen bg-background text-foreground translation-colors duration-300">
        {results.length > 0 ? (
          <div className="p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {results.map((movie, ind) => (
              <MovieCard key={movie.id} movie={movie} ind={ind} />
            ))}
          </div>
        ) : (
          <>
            <Hero />
            <TrendingNow />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
