import { render, screen, act } from "@testing-library/react";
import { Suspense } from "react";
import MovieDetail from "@/features/movies/pages/MovieDetails";

vi.mock("@tanstack/react-router", () => ({
  useParams: () => ({ id: "550" }),
  Link: ({
    children,
    to,
  }: {
    children: React.ReactNode;
    to: string;
  }) => <a href={to}>{children}</a>,
}));

vi.mock("@/components/ui/badge", () => ({
  Badge: ({ children }: { children: React.ReactNode }) => (
    <span>{children}</span>
  ),
}));

vi.mock("../features/movies/hooks/useMovieDetails", () => ({
  useMovieDetail: vi.fn(),
}));

vi.mock("@/features/movies/components/MoviePlayer", () => ({
  default: () => <div data-testid="movie-player" />,
}));

import { useMovieDetail } from "../features/movies/hooks/useMovieDetails";

const mockMovie = {
  id: 550,
  title: "Fight Club",
  poster_path: "/fight_club.jpg",
  backdrop_path: "/fight_club_backdrop.jpg",
  overview: "An insomniac office worker forms a fight club.",
  vote_average: 8.4,
  release_date: "1999-10-15",
  runtime: 139,
  genres: [{ id: 18, name: "Drama" }],
  spoken_languages: [{ iso_639_1: "en", name: "English" }],
  production_companies: [{ id: 1, name: "Art Linson Productions" }],
};

describe("MovieDetail", () => {
  test("renders loading state", () => {
    vi.mocked(useMovieDetail).mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    } as ReturnType<typeof useMovieDetail>);

    render(<MovieDetail />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  test("renders error message when fetch fails", () => {
    vi.mocked(useMovieDetail).mockReturnValue({
      data: undefined,
      isLoading: false,
      error: new Error("Failed to fetch movie details"),
    } as ReturnType<typeof useMovieDetail>);

    render(<MovieDetail />);

    expect(
      screen.getByText(/Failed to fetch movie details/i),
    ).toBeInTheDocument();
  });

  test("renders 'Movie not found' when data is absent", () => {
    vi.mocked(useMovieDetail).mockReturnValue({
      data: undefined,
      isLoading: false,
      error: null,
    } as ReturnType<typeof useMovieDetail>);

    render(<MovieDetail />);

    expect(screen.getByText(/Movie not found/i)).toBeInTheDocument();
  });

  test("renders movie title when data is available", async () => {
    vi.mocked(useMovieDetail).mockReturnValue({
      data: mockMovie,
      isLoading: false,
      error: null,
    } as ReturnType<typeof useMovieDetail>);

    render(
      <Suspense fallback={<div>Loading player...</div>}>
        <MovieDetail />
      </Suspense>,
    );

    const heading = await screen.findByRole("heading", { name: /Fight Club/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders movie overview", async () => {
    vi.mocked(useMovieDetail).mockReturnValue({
      data: mockMovie,
      isLoading: false,
      error: null,
    } as ReturnType<typeof useMovieDetail>);

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading player...</div>}>
          <MovieDetail />
        </Suspense>,
      );
    });

    expect(
      screen.getByText(/An insomniac office worker forms a fight club/i),
    ).toBeInTheDocument();
  });

  test("renders genres", async () => {
    vi.mocked(useMovieDetail).mockReturnValue({
      data: mockMovie,
      isLoading: false,
      error: null,
    } as ReturnType<typeof useMovieDetail>);

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading player...</div>}>
          <MovieDetail />
        </Suspense>,
      );
    });

    expect(screen.getByText("Drama")).toBeInTheDocument();
  });

  test("renders a back to movies link", async () => {
    vi.mocked(useMovieDetail).mockReturnValue({
      data: mockMovie,
      isLoading: false,
      error: null,
    } as ReturnType<typeof useMovieDetail>);

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading player...</div>}>
          <MovieDetail />
        </Suspense>,
      );
    });

    const link = screen.getByRole("link", { name: /Back to Movies/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
