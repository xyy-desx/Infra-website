export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 pt-28">
      <h1 className="font-extrabold text-3xl md:text-6xl text-center text-white drop-shadow mb-10">
        Explore infrastructure<br />that fits your dreams
      </h1>
      <div className="flex gap-7 mt-2">
        <button className="px-8 py-3 border-2 border-gray-400 text-white rounded-lg font-bold bg-black/40 hover:bg-white/10 transition shadow">
          Projects
        </button>
        <button className="px-8 py-3 rounded-lg text-white font-bold bg-blue-600 hover:bg-blue-700 shadow transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}
