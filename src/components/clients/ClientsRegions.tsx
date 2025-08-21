import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiUsers, FiGlobe, FiMap } from "react-icons/fi";

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
      className={`relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg group hover:shadow-xl transition-all duration-300 p-8`}
    >
      {/* Content */}
      <div className="relative flex items-start gap-6">
        <div
          className={`flex-shrink-0 flex items-center justify-center rounded-xl h-14 w-14 ${color
            .replace("bg-", "bg-")
            .replace("500", "100")} text-${color.replace(
            "bg-",
            ""
          )} transform group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>

        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            {title}
            <FiMap className="text-gray-400 ml-2" />
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {countries.map((country, index) => (
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: delay * 0.1 + index * 0.1 }}
                key={index}
                className="flex items-center gap-2 text-gray-700 group/item"
              >
                <span className={`h-2 w-2 rounded-full ${color} opacity-75`} />
                <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                  {country}
                </span>
              </motion.li>
            ))}
          </div>
        </div>
      </div>

      {/* Side accent */}
      <div
        className={`absolute top-0 left-0 h-full w-2 ${color} rounded-l-2xl`}
      />
    </motion.div>
  );
};

const ClientsRegions: React.FC = () => {
  const regions = [
    {
      title: "Southeast Asia",
      icon: <FiMapPin size={28} />,
      color: "bg-blue-500",
      countries: [
        "Vietnam",
        "Cambodia",
        "Myanmar",
        "Thailand",
        "Indonesia",
        "Malaysia",
      ],
    },
    {
      title: "South America",
      icon: <FiGlobe size={28} />,
      color: "bg-green-500",
      countries: [
        "Brazil",
        "Chile",
        "Peru",
        "Colombia",
        "Argentina",
        "Ecuador",
      ],
    },
    {
      title: "Africa",
      icon: <FiUsers size={28} />,
      color: "bg-amber-500",
      countries: [
        "Nigeria",
        "Ghana",
        "South Africa",
        "Kenya",
        "Egypt",
        "Morocco",
      ],
    },
    {
      title: "Middle East",
      icon: <FiMapPin size={28} />,
      color: "bg-red-500",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"],
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden bg-neutral-50"
      style={{
        backgroundImage: 'url("/images/world.svg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to make the map darker and provide contrast */}
      <div className="absolute inset-0 bg-gray-50/50" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {regions.map((region, index) => (
            <RegionCard key={index} {...region} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsRegions;
