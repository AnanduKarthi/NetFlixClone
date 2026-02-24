import { api } from "@/config/axiosConfig";
import type { TMDBResponse } from "@/features/movies/type";

export const searchMoviesApi = async (query: string) => {
  const response = await api.get(
    `/search/movie?query=${query}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch movies");
  }
  return response.data.results as TMDBResponse[];
};

export const getPopularMoviesApi = async () => {
  const response = await api.get(
    `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch movies");
  }
  return response.data.results as TMDBResponse[];
};

export const getMovieDetailsApi = async (movieId: string) => {
  const response = await api.get(`/movie/${movieId}?language=en-US`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch movie details");
  }
  return response.data as TMDBResponse;
};
