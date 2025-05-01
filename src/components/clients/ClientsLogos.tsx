import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiZara,
  SiNike,
  SiTarget,
  SiUniqlo,
  SiPuma,
  SiAdidas,
  SiFila,
} from "react-icons/si";

// Custom logo component
const Logo: React.FC<{
  icon: React.ReactNode;
  name: string;
  delay: number;
}> = ({ icon, name, delay }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex flex-col items-center justify-center"
    >
      <div className="w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-100 transition-all duration-300 p-6">
        <div className="text-5xl sm:text-6xl text-gray-800 hover:text-red-600 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <span className="mt-3 text-sm text-gray-600">{name}</span>
    </motion.div>
  );
};

const ClientsLogos: React.FC = () => {
  const logos = [
    { icon: <SiZara />, name: "Zara" },
    { icon: <SiNike />, name: "Nike" },
    { icon: <SiAdidas />, name: "Adidas" },

    { icon: <SiUniqlo />, name: "Uniqlo" },
    { icon: <SiTarget />, name: "Target" },

    { icon: <SiPuma />, name: "Puma" },

    { icon: <SiFila />, name: "FILA" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 sm:mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2] mb-4">
            Trusted by <span className="text-red-600">Global Brands</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            We're proud to partner with industry-leading brands worldwide,
            providing exceptional textile products and innovative solutions for
            diverse market needs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {logos.map((logo, index) => (
            <Logo key={index} icon={logo.icon} name={logo.name} delay={index} />
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>* Representative brands shown for illustrative purposes</p>
        </div>
      </div>
    </section>
  );
};

export default ClientsLogos;
