import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Using local image paths with better browser compatibility
const images = [
  "images/home/hero-1.jpeg",
  "images/home/hero-2.png",
  "images/home/hero-3.png",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if image loads successfully
    const img = new window.Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => console.error("Failed to load hero image");
    img.src = images[0];

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    // Parallax scroll effect
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (parallaxRef.current) {
        // Move the background at a slower rate than scroll
        parallaxRef.current.style.transform = `translateY(${
          scrollPos * 0.5
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative" style={{ height: "100vh" }}>
      {/* Fixed height container to allow content to slide over */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Images with Parallax Effect */}
        <div ref={parallaxRef} className="absolute inset-0">
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
                height: "120%" /* Extra height for parallax movement */,
                width: "100%",
              }}
            />
          ))}
          {/* Gradient overlay with a hint of red */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay"></div>
        </div>

        {/* Subtle SVG Background Elements for design - changed to red theme */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg
            className="absolute -top-24 -left-24 h-96 w-96 text-red-500/30"
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
            className="absolute bottom-0 right-0 h-96 w-96 text-red-500/20"
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

        {/* Hero Content - kept red elements */}
        <div className="absolute max-w-7xl mx-auto inset-0 flex items-center px-4 sm:px-6">
          <div className="max-w-3xl text-left text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">
              Welcome to JSTEX
              <span className="block text-3xl text-gray-200 mt-2">
                China Jiangsu Textiles I/E Group Datai Corporation
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 max-w-2xl">
              Your Trusted Global Partner in Quality Textiles Since 1973
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 cursor-pointer text-base sm:text-lg font-medium transition-colors duration-300 rounded-sm"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-transparent hover:bg-red-900/20 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 cursor-pointer text-base sm:text-lg font-medium transition-colors duration-300 rounded-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Slide indicators - kept red highlight */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === idx ? "bg-red-600 w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Removed the extra white gap completely */}
      <div ref={contentRef} className="relative bg-white z-10">
        {/* Removed the height div that was causing the gap */}
      </div>
    </section>
  );
}
