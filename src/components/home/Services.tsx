"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
  FiLink,
  FiTarget,
  FiTool,
  FiUpload,
  FiSettings,
  FiPackage,
} from "react-icons/fi";
import { IconType } from "react-icons";

// Define interface for service items
interface ServiceItem {
  title: string;
  description: string;
  Icon: IconType;
}

// Define interface for ServiceCard props
interface ServiceCardProps extends ServiceItem {
  position: number;
  index: number;
}

const Services = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < services.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="relative py-16 sm:py-24 w-full">
      {/* Top Gray Background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-100" />

      {/* Bottom White Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white" />

      {/* Heading at the top portion */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2]">
            Our Services <span className="text-neutral-500">Made for You</span>
          </h2>
          <div className="flex gap-2 self-end">
            <button
              className="h-12 w-12 sm:h-fit bg-black p-3 sm:p-4 text-xl sm:text-2xl text-white transition-colors hover:bg-neutral-700 rounded-full sm:rounded-none touch-manipulation"
              onClick={shiftLeft}
              aria-label="Previous service"
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-12 w-12 sm:h-fit bg-black p-3 sm:p-4 text-xl sm:text-2xl text-white transition-colors hover:bg-neutral-700 rounded-full sm:rounded-none touch-manipulation"
              onClick={shiftRight}
              aria-label="Next service"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Cards centered vertically */}
        <div className="flex gap-4 overflow-hidden">
          {services.map((service, index) => (
            <ServiceCard
              {...service}
              key={index}
              position={position}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  position,
  index,
  title,
  description,
  Icon,
}: ServiceCardProps) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[280px] w-[85vw] sm:w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-6 sm:p-8 shadow-lg md:w-3/5 ${
        index % 2 ? "bg-black text-white" : " bg-white text-black"
      }`}
    >
      <Icon className="absolute right-2 top-2 text-5xl sm:text-7xl opacity-30" />
      <h3 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold">{title}</h3>
      <p className="text-sm sm:text-base">{description}</p>
    </motion.div>
  );
};

const services: ServiceItem[] = [
  {
    title: "Industrial Equipment",
    Icon: FiTool,
    description:
      "High-performance industrial equipment designed for durability and efficiency. Our machinery is built to enhance productivity across various manufacturing processes.",
  },
  {
    title: "Maintenance Services",
    Icon: FiSettings,
    description:
      "Expert maintenance and repair services to keep your equipment running at optimal performance. Regular servicing reduces downtime and extends the lifespan of your machinery.",
  },
  {
    title: "Custom Solutions",
    Icon: FiTarget,
    description:
      "Tailored engineering solutions to meet your specific industrial requirements. We work closely with your team to develop custom machinery for specialized applications.",
  },
  {
    title: "Parts & Components",
    Icon: FiPackage,
    description:
      "Quality replacement parts and components for all your industrial equipment. Fast delivery to minimize downtime and maximize operational efficiency.",
  },
  {
    title: "System Integration",
    Icon: FiLink,
    description:
      "Seamless integration of new equipment with your existing systems. Our experts ensure compatibility and optimal performance across your entire production line.",
  },
];

export default Services;
