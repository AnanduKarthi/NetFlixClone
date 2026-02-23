import { createFileRoute } from "@tanstack/react-router";

import SearchComponent from "@/features/movies/pages/SearchPage";

export const Route = createFileRoute("/search")({
  component: SearchComponent,
  // loader: async () => {
  //   const response = await fetch(API_URL, {
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   if (!response.ok) {
  //     throw new Error(`Failed to fetch movies: ${response.statusText}`);
  //   }
  //   const data = (await response.json()) as TMDBResponse;
  //   const movies = data.results;
  //   return {
  //     baseMovies: movies,
  //   };
  // },
});
