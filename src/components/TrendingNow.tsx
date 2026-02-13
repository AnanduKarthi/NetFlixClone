import MovieList from "./MovieList";
import type { Movie } from "@/type";

const TrendingNow = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="mt-6 px-6">
      <h3>Trending Now</h3>

      <div className="container max-auto my-4">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default TrendingNow;
