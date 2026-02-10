import Header from "./components/Header";
import Hero from "./components/Hero";
import TrendingNow from "./components/TrendingNow";
import "./App.css";

function App() {
  return (
    <main>
      <div className="min-h-screen bg-background text-foreground translation-colors duration-300">
        <Header />
        <Hero />
        <TrendingNow />
      </div>
    </main>
  );
}

export default App;
