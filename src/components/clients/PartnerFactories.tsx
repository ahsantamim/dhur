import React from "react";
import { motion } from "framer-motion";
import { FiCheckSquare } from "react-icons/fi";

// Factory component
const FactoryItem: React.FC<{
  name: string;
  index: number;
}> = ({ name, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col p-6 bg-white shadow-md border border-gray-100 hover:border-red-100 transition-all duration-300 rounded-lg"
    >
      <div className="flex items-center">
        <div className="text-red-600 mr-3">
          <FiCheckSquare className="text-xl" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      </div>
    </motion.div>
  );
};

const PartnerFactories: React.FC = () => {
  const factories = [
    { name: "Mohammadi Group" },
    { name: "Fashion Power" },
    { name: "Renaissance Group" },
    { name: "Civic" },
    { name: "Impressive" },
    { name: "Natural Group" },
    { name: "AJ Group" },
    { name: "Matrix Apparel" },
    { name: "Pretty Group" },
    { name: "Ha-meem Group" },
    { name: "Network Group" },
    { name: "Standard Group" },
    { name: "Akh" },
    { name: "Dekko Babylon" },
    { name: "Starling" },
    { name: "Nipa Group" },
    { name: "Park Jone" },
    { name: "Park Star" },
    { name: "Free Star" },
    { name: "Beximco" },
    { name: "FCI Ltd." },
    { name: "East West" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-red-600/10 text-red-600 rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
            Manufacturing Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Partner <span className="text-red-600">Factories</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We work with leading factories across Bangladesh that specialize in
            various textile and garment manufacturing processes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {factories.map((factory, index) => (
            <FactoryItem key={index} name={factory.name} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerFactories;
