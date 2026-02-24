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
      <Card className="group overflow-hidden cursor-pointer w-36 lg:w-48 hover:shadow-xl outline-blue-200 p-0 border-0 rounded-sm  ">
        <div className="hover:scale-105 transition-all duration-300">
          <img
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </Card>
    </button>
  );
};

export default MovieCard;
