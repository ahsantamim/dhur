import React from "react";
import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/data/productData";

const ProductList = () => {
  return (
    <section id="products" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <span className="mb-2 inline-block rounded-full bg-red-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-red-600">
            Our Products
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Premium Textile <span className="text-red-600">Collection</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Browse our extensive range of high-quality fabrics designed for
            various applications
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <Link
              href={`/products/${category.slug}`}
              key={category.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Category Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 opacity-60 group-hover:opacity-70 transition-opacity"></div>

                {/* Red accent line */}
                <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

                {/* Product count badge */}
                <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {category.products.length} Products
                </div>
              </div>

              {/* Category Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  {category.description.length > 120
                    ? `${category.description.substring(0, 120)}...`
                    : category.description}
                </p>

                <div className="mt-auto inline-flex items-center text-red-600 font-medium">
                  View Category
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Product categories link - could link to a future category filter page */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Looking for a custom solution? Contact us for specialized fabric
            requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
          >
            Contact For Custom Orders
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
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

export default ProductList;
