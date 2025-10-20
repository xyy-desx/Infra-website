import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative">
      {/* Home button top left */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-black/60 text-white rounded-full shadow hover:bg-cyan-700 transition"
        >
          <FaHome className="text-cyan-300" /> Home
        </Link>
      </div>
      <h1 className="text-5xl font-extrabold text-white mb-8">About InfraVerse</h1>
      <p className="max-w-2xl text-gray-300 text-lg text-center leading-relaxed">
        InfraVerse is a modern platform for infrastructure, collaboration, and innovation.
        Our goal is to empower teams to build, scale, and launch their projects with robust cloud solutions, great security, and futuristic tools.
        <br /><br />
        Whether you're a developer, entrepreneur, or an enterprise—InfraVerse is your gateway to growth.
      </p>
    </section>
  );
}

export default About;
