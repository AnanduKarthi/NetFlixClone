import { useQuery } from "@tanstack/react-query";
import { getMovieDetailsApi } from "../api/moviesApi";
import { movieKeys } from "../api/querryKeys";

export const useMovieDetail = (id: string) =>
  useQuery({
    queryKey: movieKeys.detail(id),
    queryFn: () => getMovieDetailsApi(id),
  });
