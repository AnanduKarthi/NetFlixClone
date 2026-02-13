import type { Movie } from "@/type";
import { create } from "zustand";

type BaseMovieState = {
  baseMovies: Movie[];
  setBaseMovies: (m: Movie[]) => void;
};

export const useBaseMovieStore = create<BaseMovieState>((set) => ({
  baseMovies: [] as Movie[],
  setBaseMovies: (m: Movie[]) => set({ baseMovies: m }),
}));

export default useBaseMovieStore;
