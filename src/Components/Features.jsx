import { FaBolt, FaMobileAlt, FaUsers } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaBolt className="text-emerald-400 text-4xl mb-4" />,
      title: "Blazing Fast",
      desc: "Experience rapid performance powered by Vite & React.",
      color: "emerald",
    },
    {
      icon: <FaMobileAlt className="text-cyan-400 text-4xl mb-4" />,
      title: "Responsive",
      desc: "Crafted with Tailwind CSS for sleek mobile-first experiences.",
      color: "cyan",
    },
    {
      icon: <FaUsers className="text-purple-400 text-4xl mb-4" />,
      title: "Collaborative",
      desc: "Share and innovate with your team using GitHub, seamlessly.",
      color: "purple",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-emerald-50 to-purple-100">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 drop-shadow">
          Why Choose InfraVerse?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className={`bg-white/80 rounded-3xl shadow-lg p-10 flex flex-col items-center hover:shadow-2xl transition-all duration-200 border-b-4 border-${f.color}-200`}
            >
              {f.icon}
              <h3 className={`text-xl font-bold mb-3 text-${f.color}-500`}>{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
