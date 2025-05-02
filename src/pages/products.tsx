import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { productCategories } from "@/data/productData";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <MainLayout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="mb-2 inline-block rounded-full bg-red-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-red-800">
                Our Products
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mt-2 mb-4">
                Premium Textile <span className="text-red-600">Categories</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse our extensive range of high-quality fabrics organized by
                category, designed for various applications in the textile
                industry
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
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
                  </div>

                  {/* Category Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.name}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-gray-500">
                        {category.products.length} products
                      </span>
                      <span className="inline-flex items-center text-red-600 font-medium">
                        View Category
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
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
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Need Custom Textile Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Our team of experts is ready to assist you with custom fabric
                requirements and specifications
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
