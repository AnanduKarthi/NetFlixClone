import { screen, render } from "@testing-library/react";
import MovieCard from "@/features/movies/components/MovieCard";
import type { Movie } from "@/type";

const mockMovie: Movie = {
  id: 1,
  title: "Avatar",
  poster_path: "https://example.com/poster.jpg",
};

describe("MovieCard", () => {
  vi.mock("@/components/ui/card", () => ({
    Card: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  }));

  test("renders movie title and poster", () => {
    render(<MovieCard movie={mockMovie} ind={0} />);

    const posterElement = screen.getByAltText(/Avatar/i);
    expect(posterElement).toBeInTheDocument();
    expect(posterElement).toHaveAttribute(
      "src",
      expect.stringContaining(mockMovie.poster_path),
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute(
      "aria-label",
      `open details for ${mockMovie.title}`,
    );
  });

  test("renders placeholder image when poster_path is missing", () => {
    render(<MovieCard movie={{ ...mockMovie, poster_path: "" }} ind={0} />);

    const posterElement = screen.getByAltText(/Avatar/i);
    expect(posterElement).toBeInTheDocument();
    expect(posterElement).toHaveAttribute(
      "src",
      "https://via.placeholder.com/500x750?text=No+Image",
    );
  });
});
