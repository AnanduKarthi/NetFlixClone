import Hero from "./components/Hero";
import TrendingNow from "./components/TrendingNow";
import "./App.css";
import useSearchStore from "./stores/searchStore";

function App() {
  const results = useSearchStore((state) => state.results);
  console.log("Search results in App component:", results);
  return (
    <main>
      <div className="min-h-screen bg-background text-foreground translation-colors duration-300">
        <Hero />
        <TrendingNow />
      </div>
    </main>
  );
}

export default App;
