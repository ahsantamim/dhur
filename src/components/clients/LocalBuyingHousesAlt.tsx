import React from "react";
import { motion } from "framer-motion";

const LocalBuyingHousesAlt = () => {
  // Color gradient pairs for cards (start color, end color)
  const gradients = [
    ["from-blue-600 to-blue-800", "bg-blue-700"],
    ["from-purple-600 to-indigo-800", "bg-indigo-700"],
    ["from-pink-600 to-rose-800", "bg-rose-700"],
    ["from-teal-500 to-emerald-700", "bg-emerald-600"],
    ["from-amber-500 to-orange-700", "bg-orange-600"],
    ["from-cyan-500 to-sky-700", "bg-sky-600"],
  ];

  // Dynamic SVG elements
  const svgIcons = {
    dots: (
      <svg
        className="absolute bottom-0 right-0 w-12 h-12 text-white opacity-20"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <circle cx="40" cy="20" r="3" fill="currentColor" />
        <circle cx="60" cy="20" r="3" fill="currentColor" />
        <circle cx="80" cy="20" r="3" fill="currentColor" />
        <circle cx="20" cy="40" r="3" fill="currentColor" />
        <circle cx="40" cy="40" r="3" fill="currentColor" />
        <circle cx="60" cy="40" r="3" fill="currentColor" />
        <circle cx="80" cy="40" r="3" fill="currentColor" />
        <circle cx="20" cy="60" r="3" fill="currentColor" />
        <circle cx="40" cy="60" r="3" fill="currentColor" />
        <circle cx="60" cy="60" r="3" fill="currentColor" />
        <circle cx="80" cy="60" r="3" fill="currentColor" />
        <circle cx="20" cy="80" r="3" fill="currentColor" />
        <circle cx="40" cy="80" r="3" fill="currentColor" />
        <circle cx="60" cy="80" r="3" fill="currentColor" />
        <circle cx="80" cy="80" r="3" fill="currentColor" />
      </svg>
    ),
    lines: (
      <svg
        className="absolute top-0 left-0 w-full h-full text-white opacity-10"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,20 L100,20" stroke="currentColor" strokeWidth="0.5" />
        <path d="M0,40 L100,40" stroke="currentColor" strokeWidth="0.5" />
        <path d="M0,60 L100,60" stroke="currentColor" strokeWidth="0.5" />
        <path d="M0,80 L100,80" stroke="currentColor" strokeWidth="0.5" />
        <path d="M20,0 L20,100" stroke="currentColor" strokeWidth="0.5" />
        <path d="M40,0 L40,100" stroke="currentColor" strokeWidth="0.5" />
        <path d="M60,0 L60,100" stroke="currentColor" strokeWidth="0.5" />
        <path d="M80,0 L80,100" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
    wave: (
      <svg
        className="absolute bottom-0 left-0 w-full h-12 text-white opacity-20"
        viewBox="0 0 100 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,10 Q15,20 30,10 T60,10 T90,10 T120,10 T150,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    ),
    cross: (
      <svg
        className="absolute top-0 right-0 w-24 h-24 text-white opacity-10"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20,20 L80,80" stroke="currentColor" strokeWidth="2" />
        <path d="M80,20 L20,80" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    circle: (
      <svg
        className="absolute bottom-0 left-0 w-32 h-32 text-white opacity-10"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    hex: (
      <svg
        className="absolute top-0 right-0 w-24 h-24 text-white opacity-15"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    ),
  };
  const svgKeys = Object.keys(svgIcons) as Array<keyof typeof svgIcons>;

  const buyingHouses = [
    "Li & Fung",
    "Tex-Ebo",
    "Freestar",
    "Opex Group",
    "Standard Group",
    "Utah Group",
    "Newage Group",
    "Aba Group",
    "Misami Garments",
    "Viyellatex",
    "Amtranet Group",
    "BHIS Apparels",
    "FCI (Bd.) Ltd",
    "Dekko Group",
    "Majumder Group",
    "Azmat Group",
    "Azim Group",
    "Epcot Group",
    "Voyager Group",
    "Beximco",
    "Alana Group",
    "Studiotex",
    "Ken Park",
    "Family Tex",
    "Winners Creation Ltd",
    "The Finery Ltd",
    "World Gold Trading Bd",
    "Liz Fashion",
    "Armana Fashion Ltd",
    "Zisa's Garments Ltd",
    "Mark 2000 Ltd",
    "Gemini Garments Ltd",
    "East West Services Ltd",
    "Doreen Garments Ltd",
    "Uttara Apparels Ltd",
    "Niponika Garments Ltd",
    "Apparel Export Ltd",
    "Chittagong Fashion Ltd",
    "Zimtex International",
    "Jib-tex Bd. Ltd",
    "Natural Group",
    "Rising Group",
    "Florence Fabrics Ltd",
    "Intramex Group",
    "Panwin Group",
    "Southern Millennium",
    "Sultana Garments",
    "Virtex Group",
    "Wonder Apparel",
    "Rio Fashion",
    "Impressive Group",
    "Progressive Apparel",
    "Teba",
    "Shinest Group",
    "Murcury",
    "Top grade International",
    "Jo.y.jo",
    "Mr Sourcing",
    "Mapp Associate",
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
            Our Network
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Local Buying Houses
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partnerships with leading local buying houses that connect global
            brands with our premium fabrics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {buyingHouses.map((house, index) => {
            const gradientClass = gradients[index % gradients.length][0];
            const bgClass = gradients[index % gradients.length][1];
            const svgKey = svgKeys[index % svgKeys.length];
            return (
              <motion.div
                key={index}
                className="p-0.5 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div
                  className={`h-28 rounded-lg bg-gradient-to-br ${gradientClass} shadow-lg relative overflow-hidden flex items-center justify-center p-4`}
                >
                  {/* SVG Background Decoration */}
                  {svgIcons[svgKey]}

                  {/* Subtle decorative border */}
                  <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none"></div>

                  {/* Company Name */}
                  <h3 className="text-lg md:text-xl font-bold text-white text-center z-10">
                    {house}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocalBuyingHousesAlt;
