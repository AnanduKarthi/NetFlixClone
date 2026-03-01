const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden w-full bg-gradient-to-br from-black via-gray-900 to-black">
      {/* <img
        src={
          "https://res.cloudinary.com/anandu/image/upload/q_auto:good/hero-background_1_j0pifz.avif"
        }
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      /> */}
      /
      <picture>
        <source
          srcSet={
            "https://res.cloudinary.com/anandu/image/upload/q_auto:low,w_640/hero-background_1_j0pifz.avif"
          }
          type="image/avif"
          media="(max-width: 640px)"
        />
        <source
          srcSet={
            "https://res.cloudinary.com/anandu/image/upload/q_auto:good,w_1024/hero-background_1_j0pifz.avif"
          }
          type="image/avif"
          media="(max-width: 1024px)"
        />
        <source
          srcSet={
            "https://res.cloudinary.com/anandu/image/upload/q_auto:best/hero-background_1_j0pifz.avif"
          }
          type="image/avif"
          media="(min-width: 1025px)"
        />
        <img
          src={
            "https://res.cloudinary.com/anandu/image/upload/q_auto:good/hero-background_1_j0pifz.avif"
          }
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
      </picture>
      <div className="absolute inset-0 bg-linear-to-br from-black/95 via-black/70 to-black/95 pointer-events-none" />
      <div className="relative z-10 text-center max-w-150 sm:px-3 md:px-6 flex flex-col items-center w-full">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="sm:text-sm md:text-xl font-normal mt-8 mb-8 opacity-90 drop-shadow-md">
            Starts at $7.99. Cancel anytime.
          </p>
          <button className="bg-red-600 hover:bg-red-700 border-0 rounded-md text-white px-8 py-4 text-lg font-semibold cursor-pointer inline-flex items-center gap-2 transition-all duration-300 ease-out shadow-lg shadow-red-600/30 min-w-50 justify-center hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-600/50 focus-visible:outline-2 focus-visible:outline-white/80 focus-visible:outline-offset-2 active:translate-y-0 group">
            Restart Your Membership
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
