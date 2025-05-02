import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMapPin, FiUsers, FiGlobe } from "react-icons/fi";

interface RegionCardProps {
  title: string;
  countries: string[];
  icon: React.ReactNode;
  color: string;
  delay: number;
}

const RegionCard: React.FC<RegionCardProps> = ({
  title,
  countries,
  icon,
  color,
  delay,
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className={`relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-lg group hover:shadow-xl transition-all duration-300 p-6`}
    >
      {/* Decorative side element */}
      <div className={`absolute top-0 left-0 h-full w-1 ${color}`}></div>

      <div className="flex items-start gap-5">
        <div
          className={`flex-shrink-0 flex items-center justify-center rounded-full h-12 w-12 ${color
            .replace("bg-", "bg-")
            .replace("500", "100")} text-${color.replace("bg-", "")}`}
        >
          {icon}
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">
            Established partnerships with leading manufacturers and retailers
            across {title}.
          </p>

          <ul className="space-y-2">
            {countries.map((country, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <FiMapPin className="text-gray-400" />
                <span>{country}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subtle corner decoration */}
      <div
        className="absolute bottom-0 right-0 h-16 w-16 opacity-5 rounded-full -mb-8 -mr-8 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${color.replace(
            "bg-",
            ""
          )} 0%, transparent 70%)`,
        }}
      ></div>
    </motion.div>
  );
};

const ClientsRegions: React.FC = () => {
  const regions = [
    {
      title: "Southeast Asia",
      icon: <FiMapPin size={24} />,
      color: "bg-blue-500",
      countries: ["Vietnam", "Cambodia", "Myanmar", "Thailand", "Indonesia"],
    },
    {
      title: "South America",
      icon: <FiGlobe size={24} />,
      color: "bg-green-500",
      countries: ["Brazil", "Chile", "Peru", "Colombia", "Argentina"],
    },
    {
      title: "Africa",
      icon: <FiUsers size={24} />,
      color: "bg-amber-500",
      countries: ["Nigeria", "Ghana", "South Africa", "Kenya", "Egypt"],
    },
    {
      title: "Middle East",
      icon: <FiMapPin size={24} />,
      color: "bg-red-500",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman"],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-neutral-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 sm:mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-red-600 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Global Presence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2] mb-4">
            Our Client <span className="text-red-600">Regions</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            We've established strong partnerships with clients across major
            textile markets worldwide, delivering quality products and
            exceptional service to diverse regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {regions.map((region, index) => (
            <RegionCard
              key={index}
              title={region.title}
              countries={region.countries}
              icon={region.icon}
              color={region.color}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsRegions;
