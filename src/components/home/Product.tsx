import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Enterprise Solutions",
    description: "Scalable software for large organizations",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: "50+ Enterprise Clients",
  },
  {
    title: "Digital Innovation",
    description: "Next-generation digital experiences",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: "200+ Digital Products",
  },
  {
    title: "Cloud Infrastructure",
    description: "Reliable and secure cloud solutions",
    image:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: "99.9% Uptime",
  },
];

const Product: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 w-full bg-white">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rotate-45 border-8 border-black"></div>
        <div className="absolute left-1/3 bottom-1/4 h-48 w-48 rounded-full border-8 border-neutral-900"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2] mb-3 sm:mb-4">
            Our Expertise
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-base sm:text-lg">
            Comprehensive solutions for modern challenges
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col"
            >
              <div className="relative mb-4 sm:mb-6 overflow-hidden ">
                <div className="aspect-[4/3]">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0"></div>
                </div>
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                  {category.stats}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-neutral-700">
                {category.title}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-neutral-600">
                {category.description}
              </p>

              <button className="mt-4 inline-flex items-center text-sm font-medium uppercase tracking-wider text-black touch-manipulation">
                Learn more
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-4px]" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
