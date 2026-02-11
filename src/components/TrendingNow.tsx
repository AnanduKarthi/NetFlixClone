import MovieList from "./MovieList";

import MOVIE_DATA from "../data/mockData.json";

const TrendingNow = () => {
  return (
    <div className="mt-6 px-6">
      <h3>Trending Now</h3>
      {MOVIE_DATA?.results?.length > 0 ? (
        <MovieList movies={MOVIE_DATA.results} />
      ) : (
        <div>No Movies where found</div>
      )}
    </div>
  );
};

export default TrendingNow;
