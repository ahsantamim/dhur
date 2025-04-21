import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    title: "Enterprise Solutions",
    description:
      "Comprehensive software systems designed for large organizations with complex operational needs, providing scalability, security, and seamless integration.",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: "50+ Enterprise Clients",
    link: "/products/enterprise",
  },
  {
    title: "Digital Innovation",
    description:
      "Cutting-edge digital experiences that transform how businesses engage with customers, utilizing the latest technologies to create intuitive and impactful interfaces.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: "200+ Digital Products",
    link: "/products/innovation",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Robust and secure cloud solutions that provide reliable performance, flexibility, and scalability for businesses of all sizes, with industry-leading uptime guarantees.",
    image:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: "99.9% Uptime",
    link: "/products/cloud",
  },
];

const Product: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 w-full bg-white overflow-hidden">
      {/* Subtle SVG background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg
          className="absolute left-0 top-0 h-96 w-96 -translate-x-1/3 -translate-y-1/3"
          viewBox="0 0 100 100"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="black"
            strokeWidth="15"
            fill="none"
          />
        </svg>
        <svg
          className="absolute right-0 bottom-0 h-64 w-64 translate-x-1/3 translate-y-1/3"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            strokeWidth="12"
            fill="none"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 sm:mb-20 text-center">
          <span className="mb-2 inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Product Range
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2] mb-4">
            Our Expertise
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Comprehensive solutions designed to address modern business
            challenges and drive transformative growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative flex flex-col bg-white border border-gray-100 shadow-lg overflow-hidden"
            >
              <div className="relative mb-6 overflow-hidden">
                <div className="aspect-[4/3]">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
                <div className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-md">
                  {category.stats}
                </div>
              </div>

              <div className="px-6 pb-6 flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                  {category.title}
                </h3>

                <p className="text-base text-neutral-600 mb-6">
                  {category.description}
                </p>

                <Link
                  href={category.link}
                  className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-black border-b-2 border-transparent transition-all duration-300 hover:border-black"
                >
                  Learn more
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-4px]" />
                </Link>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 h-12 w-12 border-t-2 border-r-2 border-black opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/products"
            className="group inline-flex items-center bg-black px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            View All Products
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-4px]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
