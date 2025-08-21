import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import the product categories data
import { productCategories } from "@/data/productData";

const TopFabricCategories = () => {
  // Select 6 featured categories to display (all our categories)
  const featuredCategories = productCategories;

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* SVG Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg
          className="absolute top-0 right-1/4 h-64 w-64 text-red-600/30"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            strokeDasharray="10,5"
          />
        </svg>

        <svg
          className="absolute bottom-1/3 left-10 h-48 w-48 text-red-800/20 -rotate-12"
          viewBox="0 0 100 100"
        >
          <path
            d="M20,20 L80,20 L80,80 L20,80 Z"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
          />
        </svg>

        <svg
          className="absolute top-1/2 right-0 h-96 w-96 text-red-500/15"
          viewBox="0 0 100 100"
        >
          <path
            d="M10,50 C10,30 30,10 50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 Z"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
          />
        </svg>

        <svg
          className="absolute bottom-20 left-1/3 h-40 w-40 text-red-700/20 rotate-45"
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

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 sm:mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2]">
            Featured <span className="text-red-600">Fabrics</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-gray-600">
            Explore our selection of premium quality fabrics designed for
            durability, comfort, and performance across various applications.
          </p>
        </div>

        {/* Categories grid - 3 columns x 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {featuredCategories.map((category) => (
            <Link
              href={`/products/${category.slug}`}
              key={category.id}
              className="relative group overflow-hidden rounded-xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 h-64 sm:h-72 md:h-80 flex flex-col"
            >
              <div className="relative w-full h-full">
                {/* Modern overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 opacity-70 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* Red accent on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-20"></div>

                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>

                {/* Category name and product count */}
                <div className="absolute bottom-0 left-0 w-full p-5 z-20 transform translate-y-0 group-hover:translate-y-[-5px] transition-transform duration-300">
                  <span className="text-red-300 text-sm font-medium mb-1 block">
                    {category.products.length} Products
                  </span>
                  <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide">
                    {category.name}
                  </h3>
                  <div className="flex items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm">View Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Products button */}
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
          >
            View All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopFabricCategories;
