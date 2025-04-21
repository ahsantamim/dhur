import React from "react";
import { FiClock, FiAward, FiSun, FiGlobe, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

interface StrengthCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StrengthCard = ({ icon, title, description }: StrengthCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col items-start p-5 sm:p-6 bg-white hover:bg-neutral-50 transition-colors rounded-lg"
    >
      <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-black">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-neutral-600 mb-4">
        {description}
      </p>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const strengths = [
    {
      icon: <FiClock />,
      title: "20+ Years Experience",
      description:
        "Decades of expertise in delivering industry-leading solutions",
    },
    {
      icon: <FiAward />,
      title: "Certified Quality Standards",
      description: "Meeting and exceeding international quality benchmarks",
    },
    {
      icon: <FiSun />,
      title: "Eco-Friendly Materials",
      description: "Committed to sustainable practices and materials",
    },
    {
      icon: <FiGlobe />,
      title: "Fast Global Shipping",
      description: "Efficient worldwide delivery network and logistics",
    },
  ];

  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2] mb-3 sm:mb-4">
            Why Choose Us
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-base sm:text-lg">
            Experience excellence through our commitment to quality,
            sustainability, and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {strengths.map((strength, index) => (
            <StrengthCard key={index} {...strength} />
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="/about"
            className="inline-flex items-center text-black hover:text-neutral-700 font-medium text-sm sm:text-base touch-manipulation"
          >
            Learn more about our commitment
            <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
