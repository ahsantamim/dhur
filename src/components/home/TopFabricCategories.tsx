import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the category interface
interface FabricCategory {
  id: number;
  name: string;
  image: string;
  slug: string;
}

// Sample fabric categories data
const fabricCategories: FabricCategory[] = [
  {
    id: 1,
    name: "Cotton",
    image: "/images/home/hero-1.png", // Using existing images for now
    slug: "cotton",
  },
  {
    id: 2,
    name: "Silk",
    image: "/images/home/hero-2.png",
    slug: "silk",
  },
  {
    id: 3,
    name: "Linen",
    image: "/images/home/hero-3.png",
    slug: "linen",
  },
  {
    id: 4,
    name: "Wool",
    image: "/images/home/hero-1.png",
    slug: "wool",
  },
  {
    id: 5,
    name: "Polyester",
    image: "/images/home/hero-2.png",
    slug: "polyester",
  },
  {
    id: 6,
    name: "Denim",
    image: "/images/home/hero-3.png",
    slug: "denim",
  },
  {
    id: 7,
    name: "Velvet",
    image: "/images/home/hero-1.png",
    slug: "velvet",
  },
  {
    id: 8,
    name: "Satin",
    image: "/images/home/hero-2.png",
    slug: "satin",
  },
  {
    id: 9,
    name: "Canvas",
    image: "/images/home/hero-3.png",
    slug: "canvas",
  },
];

const TopFabricCategories = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Added reddish SVG background elements */}
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
        {/* Section heading - now centered */}
        <div className="mb-8 sm:mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Our Collection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2]">
            Top Fabric <span className="text-red-600">Categories</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-gray-600">
            Explore our wide selection of premium fabrics suitable for all your
            needs.
          </p>
        </div>

        {/* Fabric categories grid - 3 columns x 3 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-screen">
          {fabricCategories.map((category) => (
            <Link
              href={`/fabrics/${category.slug}`}
              key={category.id}
              className="relative group overflow-hidden bg-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-full">
                {/* Image overlay */}
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>

                {/* Red accent on hover */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-red-900/10 transition-all duration-300 z-10 mix-blend-overlay"></div>

                {/* Image (no grayscale filter) */}
                <div className="relative w-full h-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Category name */}
                <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                  <div className="w-12 h-1 bg-red-600 mb-2 transition-all duration-300 group-hover:w-16"></div>
                  <h3 className="text-white text-xl font-bold">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFabricCategories;
