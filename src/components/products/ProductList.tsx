import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProductProps {
  id: number;
  name: string;
  fabricConstruction: string;
  image: string;
  hasStretch: boolean;
  description: string;
  slug: string;
}

// Product data featuring the items from your prompt
const products: ProductProps[] = [
  {
    id: 1,
    name: "Cotton Poplin",
    fabricConstruction: "100% Cotton 40x40/133x72",
    image: "/images/home/hero-1.png",
    hasStretch: false,
    description:
      "Crisp, lightweight cotton fabric with a tight plain weave, perfect for shirts and dresses with excellent breathability.",
    slug: "cotton-poplin",
  },
  {
    id: 2,
    name: "Cotton Denim",
    fabricConstruction: "100% Cotton 10x8/73x46",
    image: "/images/home/hero-2.png",
    hasStretch: false,
    description:
      "Durable, heavy-duty cotton fabric with a characteristic diagonal ribbing, used primarily for jeans and workwear.",
    slug: "cotton-denim",
  },
  {
    id: 3,
    name: "Cotton Twill",
    fabricConstruction: "100% Cotton 16x12/108x56",
    image: "/images/home/hero-3.png",
    hasStretch: false,
    description:
      "Versatile medium to heavyweight fabric with a distinctive diagonal weave pattern, suitable for pants, jackets and workwear.",
    slug: "cotton-twill",
  },
  {
    id: 4,
    name: "Corduroy",
    fabricConstruction: "100% Cotton 21/2x16 16W",
    image: "/images/home/hero-1.png",
    hasStretch: false,
    description:
      "Distinctive cotton fabric with raised parallel cords, known for its warmth and durability, perfect for autumn and winter garments.",
    slug: "corduroy",
  },
  {
    id: 5,
    name: "Cotton Flannel",
    fabricConstruction: "100% Cotton 20x10/40x42",
    image: "/images/home/hero-2.png",
    hasStretch: false,
    description:
      "Soft, warm fabric with a napped finish on one or both sides, ideal for comfortable shirts and sleepwear.",
    slug: "cotton-flannel",
  },
  {
    id: 6,
    name: "Cotton Linen",
    fabricConstruction: "55% Cotton 45% Linen 21x18/52x58",
    image: "/images/home/hero-3.png",
    hasStretch: false,
    description:
      "Natural fiber blend offering breathability with reduced wrinkles, perfect for warm-weather clothing and home textiles.",
    slug: "cotton-linen",
  },
  {
    id: 7,
    name: "TC Poplin",
    fabricConstruction: "65% Polyester 35% Cotton 45x45/110x76",
    image: "/images/home/hero-1.png",
    hasStretch: false,
    description:
      "Durable poly-cotton blend with excellent color fastness and wrinkle resistance, suitable for uniforms and workwear.",
    slug: "tc-poplin",
  },
  {
    id: 8,
    name: "Cotton/Spandex Stretch Twill",
    fabricConstruction: "98% Cotton 2% Spandex 16x12/108x56",
    image: "/images/home/hero-2.png",
    hasStretch: true,
    description:
      "Comfortable cotton fabric with spandex for stretch and recovery, perfect for fitted garments and activewear.",
    slug: "cotton-spandex-stretch-twill",
  },
];

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

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-square overflow-hidden">
                {/* Product image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Stretch indicator badge */}
                {product.hasStretch ? (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    With Stretch
                  </div>
                ) : (
                  <div className="absolute top-3 right-3 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    No Stretch
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                {/* Product details */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-3">
                  {product.fabricConstruction}
                </p>
                <p className="text-gray-600 mb-4 flex-grow">
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-red-600 text-red-600 bg-white hover:bg-red-50 rounded-md font-medium transition-colors"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Product categories link */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Looking for something specific? Browse our categories for more
            options.
          </p>
          <a
            href="#categories"
            className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
          >
            Browse by Category
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
