import { render, screen } from "@testing-library/react";
import MoviePlayer from "@/features/movies/components/MoviePlayer";
import type { Movie } from "@/features/movies/type";

const mockMovie: Movie = {
  id: 42,
  title: "Inception",
  poster_path: "/inception.jpg",
};

describe("MoviePlayer", () => {
  test("renders a video element", () => {
    render(<MoviePlayer movie={mockMovie} />);

    const video = screen.getByLabelText(/Play movie/i);
    expect(video).toBeInTheDocument();
  });

  test("uses the movie poster as the video poster attribute", () => {
    render(<MoviePlayer movie={mockMovie} />);

    const video = screen.getByLabelText(/Play movie/i);
    expect(video).toHaveAttribute(
      "poster",
      `https://image.tmdb.org/t/p/original${mockMovie.poster_path}`,
    );
  });

  test("video has controls", () => {
    render(<MoviePlayer movie={mockMovie} />);

    const video = screen.getByLabelText(/Play movie/i);
    expect(video).toHaveProperty("controls", true);
  });
});
