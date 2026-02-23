import { useQuery } from "@tanstack/react-query";
import { getPopularMoviesApi } from "../api/moviesApi";
import { movieKeys } from "../api/querryKeys";

export const usePopularMovies = () =>
  useQuery({
    queryKey: movieKeys.popular,
    queryFn: () => getPopularMoviesApi(),
  });
