import { render, screen } from "@testing-library/react";
import TrendingNow from "../features/movies/components/TrendingNow";
import type { Movie } from "@/features/movies/type";

// Mock MovieList
vi.mock("@/features/movies/components/MovieList", () => ({
  default: ({ movies }: { movies: Movie[] }) => (
    <div data-testid="movie-list">
      MovieList rendered with {movies.length} movies
    </div>
  ),
}));

describe("TrendingNow", () => {
  const mockMovies: Movie[] = [
    { id: 1, title: "Movie 1", poster_path: "path1.jpg" },
    { id: 2, title: "Movie 2", poster_path: "path2.jpg" },
  ];

  test("renders Trending Now heading and MovieList", () => {
    render(<TrendingNow movies={mockMovies} />);

    const heading = screen.getByText(/Trending Now/i);
    expect(heading).toBeInTheDocument();

    const movieList = screen.getByTestId("movie-list");
    expect(movieList).toBeInTheDocument();
    expect(movieList).toHaveTextContent("MovieList rendered with 2 movies");
  });
});
