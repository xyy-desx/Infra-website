import { FaCloud, FaShieldAlt, FaRocket } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaCloud className="text-purple-300 text-4xl mb-3" />,
      title: "Cloud Powered",
      desc: "Scale easily with robust cloud infrastructure.",
    },
    {
      icon: <FaShieldAlt className="text-cyan-300 text-4xl mb-3" />,
      title: "Secure & Reliable",
      desc: "Security and resilience built into every layer.",
    },
    {
      icon: <FaRocket className="text-emerald-300 text-4xl mb-3" />,
      title: "Innovative Growth",
      desc: "Accelerate your journey with cutting-edge tools.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-emerald-300 drop-shadow">
          Why Choose InfraVerse?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-black/50 rounded-2xl shadow-lg p-10 flex flex-col items-center hover:shadow-2xl transition border border-gray-700"
            >
              {f.icon}
              <h3 className="text-xl font-bold mb-3 text-white drop-shadow">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
