import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Info, ShoppingBag } from "lucide-react";

// Define the product type to match the data structure
interface ProductProps {
  id: number;
  name: string;
  slug: string;
  fabricConstruction: string;
  category: string;
  images: string[];
  hasStretch: boolean;
  price: {
    min: number;
    max: number;
  };
  description: string;
  features: string[];
  applications: string[];
  colors: string[];
  minimumOrder: string;
  availability: string;
  leadTime: string;
}

interface ProductDetailProps {
  product: ProductProps;
}

// Related products that might interest the customer (shown at bottom of page)
const relatedProducts = [
  {
    id: 1,
    name: "Cotton Poplin",
    slug: "cotton-poplin",
    category: "Cotton",
    image: "/images/home/hero-1.png",
    fabricConstruction: "100% Cotton 40x40/133x72",
  },
  {
    id: 2,
    name: "Cotton Twill",
    slug: "cotton-twill",
    category: "Cotton",
    image: "/images/home/hero-3.png",
    fabricConstruction: "100% Cotton 16x12/108x56",
  },
  {
    id: 6,
    name: "Cotton Linen",
    slug: "cotton-linen",
    category: "Blends",
    image: "/images/home/hero-3.png",
    fabricConstruction: "55% Cotton 45% Linen 21x18/52x58",
  },
  {
    id: 8,
    name: "Cotton/Spandex Stretch Twill",
    slug: "cotton-spandex-stretch-twill",
    category: "Stretch",
    image: "/images/home/hero-2.png",
    fabricConstruction: "98% Cotton 2% Spandex 16x12/108x56",
  },
];

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  const selectImage = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb Navigation - Updated to remove non-existent category link */}
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
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product category badge moved to top of content for better visibility */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
          {product.category}
        </span>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images Section */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
              <Image
                src={product.images[selectedImage]}
                alt={`${product.name} - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:bg-white hover:text-red-600 transition-colors"
                aria-label="Previous image"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:bg-white hover:text-red-600 transition-colors"
                aria-label="Next image"
              >
                <ArrowRight size={20} />
              </button>

              {/* Red accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-3 justify-center">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`relative h-20 w-20 rounded-md overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-red-600 ring-2 ring-red-600/20"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col">
            {/* Product Category Badge */}
            <div className="inline-block mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                {product.category}
              </span>
              {product.hasStretch && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ml-2">
                  With Stretch
                </span>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>

            {/* Fabric Construction */}
            <p className="text-lg text-gray-600 mb-4">
              <span className="font-medium">Construction:</span>{" "}
              {product.fabricConstruction}
            </p>

            {/* Price Range */}
            <div className="mb-6">
              <p className="text-lg text-gray-600">Price Range:</p>
              <p className="text-2xl font-semibold text-red-600">
                ${product.price.min.toFixed(2)} - $
                {product.price.max.toFixed(2)}
                <span className="text-base text-gray-500 font-normal ml-1">
                  per yard
                </span>
              </p>
              <p className="text-sm mt-1 text-gray-500">
                *Pricing may vary based on quantity and specifications
              </p>
            </div>

            {/* Product Description */}
            <div className="prose prose-gray max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 px-4 py-3 rounded-lg">
                <p className="text-sm text-gray-500">Minimum Order</p>
                <p className="font-medium text-gray-800">
                  {product.minimumOrder}
                </p>
              </div>
              <div className="bg-gray-50 px-4 py-3 rounded-lg">
                <p className="text-sm text-gray-500">Availability</p>
                <p className="font-medium text-gray-800">
                  {product.availability}
                </p>
              </div>
              <div className="bg-gray-50 px-4 py-3 rounded-lg">
                <p className="text-sm text-gray-500">Lead Time</p>
                <p className="font-medium text-gray-800">{product.leadTime}</p>
              </div>
              <div className="bg-gray-50 px-4 py-3 rounded-lg">
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-medium text-gray-800">{product.category}</p>
              </div>
            </div>

            {/* Color Options */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Available Colors</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#request-quote"
                className="inline-flex h-12 items-center justify-center rounded-md bg-red-600 px-6 py-1 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                Inquire Now
              </a>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md border border-red-600 bg-white px-6 py-1 text-sm font-medium text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                <Info className="mr-2 h-4 w-4" />
                Request Specifications
              </Link>
              <Link
                href="/products/samples"
                className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Order Sample
              </Link>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Features Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-0.5">
                      <Check className="h-5 w-5 text-red-600" />
                    </div>
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Applications
              </h3>
              <ul className="space-y-3">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-0.5">
                      <Check className="h-5 w-5 text-red-600" />
                    </div>
                    <p className="ml-3 text-gray-700">{application}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Care Instructions Section - Example static content */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Care & Handling
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  For best results and longevity of your fabric, please follow
                  the care instructions below:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Store in a cool, dry place away from direct sunlight</li>
                  <li>Pre-wash fabric before cutting and sewing</li>
                  <li>
                    Follow specific washing instructions for your fabric type
                  </li>
                  <li>Iron on the reverse side or use a pressing cloth</li>
                </ul>
                <p className="text-sm text-gray-500 italic">
                  *Detailed care instructions will be provided with your order
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Related <span className="text-red-600">Products</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden">
                  {/* Product image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                    {product.category}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Product info */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-gray-600 text-sm">
                    {product.fabricConstruction}
                  </p>
                  <div className="mt-auto pt-3 flex items-center text-red-600">
                    <span className="font-medium">Details</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Request Quote Form */}
        <div
          id="request-quote"
          className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Request <span className="text-red-600">Product Information</span>
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                placeholder="Your company"
              />
            </div>

            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Estimated Quantity*
              </label>
              <input
                type="text"
                id="quantity"
                className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                placeholder="e.g., 100 yards"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Additional Requirements
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                placeholder="Please describe any special requirements or questions about this product"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-red-600 text-white py-3 px-8 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>

        {/* Back to Products Button */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center text-gray-700 font-medium hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
