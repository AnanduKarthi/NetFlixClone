import MovieDetail from "@/features/movies/pages/MovieDetails";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/movie/$id")({
  component: MovieDetail,
});
