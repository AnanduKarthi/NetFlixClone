import { render, screen } from "@testing-library/react";
import SearchComponent from "@/features/movies/pages/SearchPage";

vi.mock("@tanstack/react-router", () => ({
  useSearch: () => ({ movie: "Avatar" }),
}));

vi.mock("@/lib/useDebounce", () => ({
  useDebounce: (value: string) => value,
}));

vi.mock("../features/movies/hooks/useSearchMovies", () => ({
  useSearchMovies: vi.fn(),
}));

vi.mock("@/features/movies/components/MovieCard", () => ({
  default: ({ movie }: { movie: { title: string } }) => (
    <div data-testid="movie-card">{movie.title}</div>
  ),
}));

import { useSearchMovies } from "../features/movies/hooks/useSearchMovies";

describe("SearchComponent", () => {
  test("renders the Search heading", () => {
    vi.mocked(useSearchMovies).mockReturnValue({
      data: [],
      isLoading: false,
    } as unknown as ReturnType<typeof useSearchMovies>);

    render(<SearchComponent />);

    expect(screen.getByRole("heading", { name: /Search/i })).toBeInTheDocument();
  });

  test("shows loading skeletons while fetching", () => {
    vi.mocked(useSearchMovies).mockReturnValue({
      data: [],
      isLoading: true,
    } as unknown as ReturnType<typeof useSearchMovies>);

    render(<SearchComponent />);

    expect(screen.getByText(/Searching for/i)).toBeInTheDocument();
  });

  test("renders a MovieCard for each result", () => {
    const mockMovies = [
      { id: 1, title: "Avatar", poster_path: "path1.jpg" },
      { id: 2, title: "Titanic", poster_path: "path2.jpg" },
    ];

    vi.mocked(useSearchMovies).mockReturnValue({
      data: mockMovies,
      isLoading: false,
    } as unknown as ReturnType<typeof useSearchMovies>);

    render(<SearchComponent />);

    const cards = screen.getAllByTestId("movie-card");
    expect(cards).toHaveLength(2);
    expect(cards[0]).toHaveTextContent("Avatar");
    expect(cards[1]).toHaveTextContent("Titanic");
  });

  test("shows no results message when results are empty", () => {
    vi.mocked(useSearchMovies).mockReturnValue({
      data: [],
      isLoading: false,
    } as unknown as ReturnType<typeof useSearchMovies>);

    render(<SearchComponent />);

    expect(screen.getByText(/No results found/i)).toBeInTheDocument();
  });

  test("shows result count when results exist", () => {
    const mockMovies = [
      { id: 1, title: "Avatar", poster_path: "path1.jpg" },
    ];

    vi.mocked(useSearchMovies).mockReturnValue({
      data: mockMovies,
      isLoading: false,
    } as unknown as ReturnType<typeof useSearchMovies>);

    render(<SearchComponent />);

    expect(screen.getByText("1 result")).toBeInTheDocument();
  });
});
