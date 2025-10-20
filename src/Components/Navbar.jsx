import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 border-b border-cyan-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 tracking-wide drop-shadow">
            InfraVerse
          </h1>
        </div>
        <ul className="flex space-x-6 text-[1.07rem] font-semibold">
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              <FaHome className="text-cyan-400 text-xl" />
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <FaInfoCircle className="text-purple-400 text-xl" />
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              <FaEnvelope className="text-emerald-400 text-xl" />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
