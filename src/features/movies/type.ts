export type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export type MovieListProps = {
  movies: Movie[];
};

export interface TMDBResponse {
  id: number;
  title: string;
  poster_path: string;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
  release_date?: string;
  overview?: string;
  vote_average?: number;
  backdrop_path?: string;
  genres?: { id: number; name: string }[];
  runtime?: number;
  spoken_languages?: { iso_639_1: string; name: string }[];
  production_companies?: { id: number; name: string }[];
}
