export default function Hero() {
    return (
      <section className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-gray-500">GdgMovie</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Dive into the world of your favorite movies. Explore, rate, and enjoy a personalized cinematic experience.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="#explore"
              className="bg-black hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Explore Now
            </a>
            <a
              href="#top-rated"
              className="bg-black hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Top Rated
            </a>
          </div>
        </div>
      </section>
    );
  }
  