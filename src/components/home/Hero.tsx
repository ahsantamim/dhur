import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Using local image paths with better browser compatibility
const images = ["/images/hero-1.png", "images/hero-2.png", "images/hero-3.png"];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Check if image loads successfully
    const img = new window.Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => console.error("Failed to load hero image");
    img.src = images[0];

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === idx ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        {/* Gradient overlay for better text contrast without blocking images */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      {/* Subtle SVG Background Elements for design */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg
          className="absolute -top-24 -left-24 h-96 w-96 text-white/20"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 h-96 w-96 text-white/10"
          viewBox="0 0 100 100"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="absolute max-w-7xl mx-auto inset-0 flex items-center px-4 sm:px-6">
        <div className="max-w-3xl text-left text-white">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-6">
            Empowering Industry
            <span className="block text-gray-300 mt-2">Through Innovation</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 max-w-2xl">
            High-performance tools & machinery designed for modern businesses
            seeking excellence and efficiency.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-4 cursor-pointer text-base sm:text-lg font-medium transition-colors duration-300 rounded-sm"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 cursor-pointer text-base sm:text-lg font-medium transition-colors duration-300 rounded-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === idx ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
