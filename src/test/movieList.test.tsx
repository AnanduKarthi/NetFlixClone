import MovieList from "@/features/movies/components/MovieList";
import { render, screen } from "@testing-library/react";

vi.mock("@tanstack/react-router", () => ({
  useNavigate: () => vi.fn(),
}));

vi.mock("@/features/movies/components/MovieCard", () => ({
  default: ({ movie }: { movie: { title: string } }) => (
    <div data-testid="movie-card">{movie.title}</div>
  ),
}));

describe("MovieList", () => {
  const mockMovies = [
    { id: 1, title: "Movie 1", poster_path: "path1.jpg" },
    { id: 2, title: "Movie 2", poster_path: "path2.jpg" },
  ];

  test("renders a list of MovieCard components", () => {
    render(<MovieList movies={mockMovies} />);
    const movieCards = screen.getAllByTestId("movie-card");
    expect(movieCards).toHaveLength(mockMovies.length);
    expect(movieCards[0]).toHaveTextContent("Movie 1");
    expect(movieCards[1]).toHaveTextContent("Movie 2");
  });

  test("renders empty list when no movies are provided", () => {
    render(<MovieList movies={[]} />);
    const movieCards = screen.queryAllByTestId("movie-card");
    expect(movieCards).toHaveLength(0);
  });
});
