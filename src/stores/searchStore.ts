import { create } from "zustand";

import MOVIE_DATA from "../data/mockData.json";
import type { Movie } from "@/type";

type SearchState = {
  query: string;
  results: Movie[];
  setQuery: (q: string) => void;
  setResults: (r: Movie[]) => void;
  performSearch: (q: string) => void;
};

let debounceTimer: ReturnType<typeof setTimeout> | null = null;
const DEBAUNCE_DELAY = 500; // milliseconds

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  results: [] as Movie[],
  setQuery: (q: string) => set({ query: q }),
  setResults: (r: Movie[]) => set({ results: r }),
  performSearch: (q: string) => {
    // update query immediately so UI can reflect the current text
    set({ query: q });

    const qTrim = q.trim();

    if (debounceTimer) {
      clearTimeout(debounceTimer);
      debounceTimer = null;
    }

    if (qTrim === "") {
      set({ results: [] });
      return;
    }

    debounceTimer = setTimeout(() => {
      const results = (MOVIE_DATA.results as Movie[]).filter((movie: Movie) =>
        movie.title.toLowerCase().includes(qTrim.toLowerCase()),
      ) as Movie[];
      set({ results });
      debounceTimer = null;
    }, DEBAUNCE_DELAY);
  },
}));

export default useSearchStore;
