import { useRef } from "react";
import type { Movie, MovieListProps } from "../type";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }: MovieListProps) => {
  const listRef = useRef<HTMLUListElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!listRef.current) return;
    const container = listRef.current;
    const amount = container.clientWidth * 0.9;
    const delta = direction === "left" ? -amount : amount;

    container.scrollBy({
      left: delta,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <ul
        ref={listRef}
        className="flex overflow-x-auto overflow-y-visible no-scrollbars gap-4 px-6 py-2 md:px-2 md:py-1"
      >
        {movies?.map((movie: Movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>

      {/* Left control */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1 md:pl-2">
        <button
          type="button"
          aria-label="Scroll trending left"
          onClick={() => handleScroll("left")}
          className="pointer-events-auto hidden h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 md:flex"
        >
          <span className="sr-only">Scroll left</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            focusable="false"
          >
            <path
              d="M15.5 5 9 11.5 15.5 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Right control */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 md:pr-2">
        <button
          type="button"
          aria-label="Scroll trending right"
          onClick={() => handleScroll("right")}
          className="pointer-events-auto hidden h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 md:flex"
        >
          <span className="sr-only">Scroll right</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            focusable="false"
          >
            <path
              d="M9 5.00003L15.5 11.5L9 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieList;
