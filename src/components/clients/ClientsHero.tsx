import React from "react";
import { motion } from "framer-motion";

const ClientsHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-32">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-800/80 shadow-xl shadow-red-600/10 ring-1 ring-white/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-red-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-red-500">
            Our Global Network
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Trusted Worldwide by <span className="text-red-500">Leading Brands</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            JSTEX has a long-standing reputation for supplying high-quality woven and knitted fabrics to customers across the globe. We take pride in our partnerships with retailers, wholesalers, and garment factories in various regions, including Southeast Asia, South America, Africa, and the Middle East.
          </p>
        </div>
      </div>

      {/* SVG decorations */}
      <div className="absolute top-1/4 right-0 -z-10 transform translate-x-1/2">
        <svg
          className="h-64 w-64 opacity-20 text-red-600"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 -z-10 transform -translate-x-1/4 translate-y-1/4">
        <svg
          className="h-64 w-64 opacity-20 text-red-800"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="8" />
        </svg>
      </div>
    </section>
  );
};

export default ClientsHero;