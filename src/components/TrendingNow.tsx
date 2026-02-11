import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import useSearchStore from "@/stores/searchStore";

const Token = import.meta.env.TMDB_vite_TOKEN;
const baseURL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const TrendingNow = () => {
  const setResults = useSearchStore((state) => state.setResults);
  const [MOVIE_DATA, setMOVIE_DATA] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(baseURL, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${Token}`,
          },
        });
        const data = await response.json();
        console.log("Trending Movies:", data);
        setMOVIE_DATA(data.results);
        setResults(data.results);
        setError(null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, [setResults]);
  return (
    <div className="mt-6 px-6">
      <h3>Trending Now</h3>
      {error && <div className="text-red-500">Error: {error}</div>}
      {loading && <div className="text-white">Loading...</div>}
      <div className="container max-auto my-4">
        <MovieList movies={MOVIE_DATA} />
      </div>
    </div>
  );
};

export default TrendingNow;
