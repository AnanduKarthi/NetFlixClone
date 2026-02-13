import { create } from "zustand";

import type { Movie } from "@/type";

type SearchState = {
  query: string;
  results: Movie[];
  setQuery: (q: string) => void;
  setResults: (r: Movie[]) => void;
  baseMovies: Movie[];
  setBaseMovies: (m: Movie[]) => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  results: [] as Movie[],
  setQuery: (q: string) => set({ query: q }),
  setResults: (r: Movie[]) => set({ results: r }),
  baseMovies: [] as Movie[],
  setBaseMovies: (m: Movie[]) => set({ baseMovies: m }),
}));

export default useSearchStore;
