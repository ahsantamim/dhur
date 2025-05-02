import React from "react";
import { motion } from "framer-motion";

const ContactHero: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-neutral-50 overflow-hidden">
      {/* SVG Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg
          className="absolute top-1/4 left-1/4 h-64 w-64 text-red-600"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
          />
        </svg>

        <svg
          className="absolute bottom-1/3 right-0 h-96 w-96 text-red-500"
          viewBox="0 0 100 100"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="currentColor"
            strokeWidth="10"
            fill="none"
          />
        </svg>

        <svg
          className="absolute bottom-0 left-1/3 h-48 w-48 text-red-700 rotate-45"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,10 90,50 50,90 10,50"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-1 bg-red-600 mb-6 mx-auto"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
            Get In <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            We're here to answer your questions about our products, services,
            and sustainable fabric solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
