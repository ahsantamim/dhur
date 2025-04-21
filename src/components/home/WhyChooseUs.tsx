import React from "react";
import { FiClock, FiAward, FiSun, FiGlobe, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

interface StrengthCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const StrengthCard = ({
  icon,
  title,
  description,
  index,
}: StrengthCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col items-start p-8 bg-white hover:bg-neutral-50 transition-colors border border-gray-100 shadow-lg"
    >
      <div
        className={`mb-6 inline-flex items-center justify-center rounded-full p-4 bg-black/5`}
      >
        <div className="text-3xl sm:text-4xl text-black">{icon}</div>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">{title}</h3>
      <p className="text-base text-neutral-600 mb-6">{description}</p>
      <div className="absolute top-4 right-4 h-10 w-10 border-t-2 border-r-2 border-black opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const strengths = [
    {
      icon: <FiClock />,
      title: "20+ Years Experience",
      description:
        "Decades of expertise in delivering industry-leading solutions to businesses worldwide, with a proven track record of excellence.",
    },
    {
      icon: <FiAward />,
      title: "Certified Quality Standards",
      description:
        "Meeting and exceeding international quality benchmarks through rigorous testing and continuous improvement processes.",
    },
    {
      icon: <FiSun />,
      title: "Eco-Friendly Materials",
      description:
        "Committed to sustainable practices and materials that minimize environmental impact while maximizing performance.",
    },
    {
      icon: <FiGlobe />,
      title: "Fast Global Shipping",
      description:
        "Efficient worldwide delivery network and logistics that ensure your equipment arrives promptly and in perfect condition.",
    },
  ];

  return (
    <section className="relative bg-neutral-50 py-20 sm:py-28 overflow-hidden">
      {/* Subtle SVG background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg
          className="absolute -left-20 -top-20 h-80 w-80 rotate-12"
          viewBox="0 0 100 100"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="black"
            strokeWidth="10"
            fill="none"
          />
        </svg>
        <svg
          className="absolute right-0 bottom-0 h-96 w-96 -translate-y-1/4 translate-x-1/4"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            strokeWidth="10"
            fill="none"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="mb-2 inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Our Strengths
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2] mb-4">
            Why Choose Us
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Experience excellence through our commitment to quality,
            sustainability, and customer satisfaction across all our services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {strengths.map((strength, index) => (
            <StrengthCard key={index} {...strength} index={index} />
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/about"
            className="group inline-flex items-center bg-black px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Learn More About Us
            <FiArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
