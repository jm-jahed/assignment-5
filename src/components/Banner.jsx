export default function Banner() {
  return (
    <section id="home" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Banner */}
          <div className="space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits your
              next project.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#technologies"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Explore Technologies
              </a>
              <a
                href="#about"
                className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full hover:border-purple-500 hover:text-purple-600 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Banner */}
          <div className="flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}assets/banner-stack.png`}
              alt="DevStack illustration"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
