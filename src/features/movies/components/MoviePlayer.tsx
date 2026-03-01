import type { Movie } from "@/features/movies/type";

interface MoviePlayerProps {
  movie: Movie;
}

const MoviePlayer = ({ movie }: MoviePlayerProps) => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <video
        aria-label="Play movie"
        poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        preload="metadata"
        className="w-full h-screen object-cover"
        controls
      >
        <source
          src={
            "https://res.cloudinary.com/anandu/video/upload/wait-a-minute-who-are-you-video-meme-download_dixvqv.mov"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default MoviePlayer;
