import { Card } from "@/components/ui/card";
import type { Movie } from "@/features/movies/type";
import { useNavigate } from "@tanstack/react-router";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate();
  return (
    <button
      aria-label={`open details for ${movie.title}`}
      onClick={() => navigate({ to: `/movie/${movie.id}` })}
    >
      <Card className="group w-36 cursor-pointer overflow-hidden rounded-md border-0 bg-transparent p-0 outline-blue-200 lg:w-48">
        <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-neutral-900/80 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.03]">
          <img
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-80" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 px-2 pb-2">
            <span className="line-clamp-2 text-left text-xs font-medium text-white drop-shadow">
              {movie.title}
            </span>
          </div>
        </div>
      </Card>
    </button>
  );
};

export default MovieCard;
