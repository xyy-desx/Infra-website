export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 text-white min-h-screen flex items-center justify-center px-6 pt-32 overflow-hidden">
      {/* Dynamic background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 blur-3xl opacity-40 w-96 h-96 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 blur-3xl opacity-30 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="text-center max-w-4xl z-10 bg-white/10 backdrop-blur-lg rounded-2xl mx-auto shadow-2xl px-12 py-16 border border-white/20">
        <h1 className="text-6xl sm:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200 drop-shadow-lg leading-tight">
          Build the Future
          <br />
          <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            with InfraVerse
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-10 text-gray-100 font-medium drop-shadow max-w-2xl mx-auto leading-relaxed">
          A modern platform for innovation, collaboration, and exponential growth in the digital age.
        </p>
        
        <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 text-lg">
          Get Started Now
        </button>
      </div>
    </section>
  );
}
