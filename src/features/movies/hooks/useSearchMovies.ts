import { useQuery } from "@tanstack/react-query";
import { searchMoviesApi } from "../api/moviesApi";
import { movieKeys } from "../api/querryKeys";

export const useSearchMovies = (query: string) =>
  useQuery({
    queryKey: movieKeys.search(query),
    queryFn: () => searchMoviesApi(query),
    enabled: !!query,
  });
