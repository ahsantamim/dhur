import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/layouts/MainLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  productCategories,
  ProductCategory,
  ProductItem,
} from "@/data/productData";

interface CategoryPageProps {
  category: ProductCategory | null;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const router = useRouter();
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if we're on mobile when component mounts and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // If the page is still generating via fallback, show loading
  if (router.isFallback) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  // If no category was found with the given slug
  if (!category) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Category Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The category you're looking for does not exist or has been removed.
          </p>
          <Link
            href="/products"
            className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </MainLayout>
    );
  }

  const handleProductClick = (id: number) => {
    // Only toggle for mobile devices
    if (isMobile) {
      setActiveProductId(activeProductId === id ? null : id);
    }
  };

  return (
    <MainLayout>
      <div className="bg-white">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center text-sm text-gray-500">
              <Link href="/" className="hover:text-red-600 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/products"
                className="hover:text-red-600 transition-colors"
              >
                Products
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{category.name}</span>
            </div>
          </div>
        </div>

        {/* Category Header */}
        <div className="py-8 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-xs font-semibold tracking-wider text-red-800 uppercase mb-2">
                Product Category
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {category.name}
              </h1>

              {/* Category Details */}
              <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      Category Details
                    </h2>
                    <p className="text-gray-700 mb-6">{category.description}</p>

                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <span className="font-medium">Price:</span> May vary
                        based on quantity and specifications
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Lab-dip Lead Time:</span>{" "}
                        10-12 days
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">SMS Lead Time:</span>{" "}
                        25-30 days
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">
                          Production Lead Time:
                        </span>{" "}
                        30-35 days
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                      Customization Options
                    </h3>
                    <div className="space-y-3 mb-6">
                      <p className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-600 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          <span className="font-medium">Available Colors:</span>{" "}
                          Any (custom coloring available)
                        </span>
                      </p>
                      <p className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-600 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          <span className="font-medium">
                            Available Designs:
                          </span>{" "}
                          Any (custom designs available)
                        </span>
                      </p>
                      <p className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-600 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          <span className="font-medium">
                            Minimum Order Quantity:
                          </span>{" "}
                          Varies by product
                        </span>
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
                    >
                      Request Custom Order
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
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="py-12">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {category.name} Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Product Image with Text Overlay */}
                  <div className="relative aspect-square w-full h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />

                    {/* Product Name - Always visible */}

                    {/* Mobile instruction badge - only visible on mobile */}
                    {isMobile && activeProductId !== product.id && (
                      <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-800 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Tap for info
                      </div>
                    )}

                    {/* Info Overlay - visible on hover for desktop, on click for mobile */}
                    <div
                      className={`absolute inset-0 bg-black/70 flex flex-col justify-center p-4 transition-opacity duration-300
                        ${
                          !isMobile
                            ? "opacity-0 group-hover:opacity-100"
                            : activeProductId === product.id
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                    >
                      <h3 className="text-white text-lg font-bold mb-2 text-center">
                        {product.name}
                      </h3>

                      <div className="text-white text-sm space-y-1">
                        <p>
                          <span className="font-semibold">Composition:</span>{" "}
                          {product.composition}
                        </p>
                        <p>
                          <span className="font-semibold">Construction:</span>{" "}
                          {product.construction}
                        </p>
                        <p>
                          <span className="font-semibold">GSM:</span>{" "}
                          {product.gsm}
                        </p>
                        <p>
                          <span className="font-semibold">Width:</span>{" "}
                          {product.width}
                        </p>
                      </div>

                      {/* Close button - only visible on mobile */}
                      {isMobile && activeProductId === product.id && (
                        <button
                          className="mt-4 bg-white/20 text-white text-xs py-1 rounded-full w-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveProductId(null);
                          }}
                        >
                          Close
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Products Button */}
        <div className="pb-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center text-gray-700 font-medium hover:text-red-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to All Products
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

// Generate static paths for known categories
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = productCategories.map((category) => ({
    params: { slug: category.slug },
  }));

  return { paths, fallback: "blocking" };
};

// Generate static props for each category
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const category = productCategories.find((c) => c.slug === slug);

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
    },
    // Revalidate every 24 hours
    revalidate: 86400,
  };
};

export default CategoryPage;
