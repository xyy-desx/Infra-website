import { FaBolt, FaHome, FaInfoCircle, FaRocket, FaEllipsisH } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="flex items-center justify-between px-8 py-4">
    
        <div className="flex items-center gap-2">
          <FaBolt className="text-cyan-400 text-2xl" />
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
            Infra<span className="text-purple-300">Verse</span>
          </span>
        </div>
       
        <ul className="hidden md:flex gap-8 items-center font-semibold text-white/90">
          <li>
            <Link to="/" className="flex items-center gap-2 hover:text-cyan-300 transition">
              <FaHome className="text-cyan-300" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-2 hover:text-purple-300 transition">
              <FaInfoCircle className="text-purple-300" /> About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="flex items-center gap-2 hover:text-emerald-300 transition">
              <FaRocket className="text-emerald-300" /> Projects
            </Link>
          </li>
          <li>
            <Link to="/others" className="flex items-center gap-2 hover:text-blue-300 transition">
              <FaEllipsisH className="text-blue-300" /> Others
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
