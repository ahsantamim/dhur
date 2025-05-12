import React from "react";
import { motion } from "framer-motion";

const LocalBuyingHouses = () => {
  // Array of background colors for cards
  const bgColors = [
    "bg-blue-600",
    "bg-indigo-600",
    "bg-purple-600",
    "bg-cyan-600",
    "bg-teal-600",
  ];

  // SVG patterns for the background of cards
  const svgPatterns = [
    // Circles pattern
    <svg
      key="circles"
      className="absolute inset-0 w-full h-full text-white opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10%" cy="20%" r="8" fill="currentColor" />
      <circle cx="90%" cy="80%" r="8" fill="currentColor" />
      <circle
        cx="50%"
        cy="50%"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="80%" cy="10%" r="12" fill="currentColor" opacity="0.5" />
    </svg>,

    // Lines pattern
    <svg
      key="lines"
      className="absolute inset-0 w-full h-full text-white opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0"
        y1="0"
        x2="100%"
        y2="100%"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="100%"
        y1="0"
        x2="0"
        y2="100%"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="50%"
        y1="0"
        x2="50%"
        y2="100%"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>,

    // Dots pattern
    <svg
      key="dots"
      className="absolute inset-0 w-full h-full text-white opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern
        id="dots-pattern"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="5" cy="5" r="1.5" fill="currentColor" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#dots-pattern)" />
    </svg>,

    // Waves pattern
    <svg
      key="waves"
      className="absolute inset-0 w-full h-full text-white opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,50 C20,40 40,60 60,50 C80,40 100,60 120,50 C140,40 160,60 180,50 C200,40 220,60 240,50 C260,40 280,60 300,50 C320,40 340,60 360,50"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        transform="scale(1.2)"
      />
    </svg>,

    // Triangles pattern
    <svg
      key="triangles"
      className="absolute inset-0 w-full h-full text-white opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern
        id="triangles-pattern"
        x="0"
        y="0"
        width="30"
        height="30"
        patternUnits="userSpaceOnUse"
      >
        <path d="M15,5 L25,25 L5,25 Z" fill="currentColor" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#triangles-pattern)" />
    </svg>,
  ];

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Local Buying Houses
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We collaborate with these esteemed local buying houses to deliver
            premium fabrics to global markets
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {buyingHouses.map((house, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className={`${
                  bgColors[index % bgColors.length]
                } rounded-xl shadow-lg flex items-center justify-center h-32 p-4 relative overflow-hidden`}
              >
                {/* SVG Pattern Background */}
                {svgPatterns[index % svgPatterns.length]}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20"></div>

                {/* Company name */}
                <span className="text-center font-bold text-white text-lg md:text-xl z-10 tracking-wide">
                  {house}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="font-light text-gray-400 italic">
            Our network extends to global brands through our trusted buying
            house partnerships
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalBuyingHouses;
