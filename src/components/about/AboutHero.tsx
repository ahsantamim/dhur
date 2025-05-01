import React, { useState, useEffect, useRef } from "react";

// Using consistent images with the same aspect ratio for better transitions
const images = [
  "/images/about-image.png", // Use existing about image
  "/images/home/hero-2.png", // Reuse home page hero images for consistency
  "/images/home/hero-3.png",
];

export default function AboutHero() {
  const [current, setCurrent] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-rotate images like on the home page
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    // Add parallax scroll effect
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
                height: "120%", /* Extra height for parallax movement */
                width: "100%",
              }}
            />
          ))}
          {/* Gradient overlay with a hint of red */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay"></div>
        </div>

        {/* Subtle SVG Background Elements for design - red theme */}
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

        {/* Hero Content - Consistent with home page styling */}
        <div className="absolute max-w-7xl mx-auto inset-0 flex items-center px-4 sm:px-6">
          <div className="max-w-3xl text-left text-white">
            <span className="mb-4 inline-block rounded-full bg-red-600/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-red-300">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-6">
              About <span className="text-red-500">JSTEX</span>
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-100 max-w-2xl">
              China Jiangsu Textiles Import Export Group Datai Corporation
              (JSTEX), established in 1973, is one of the earliest and most
              reputable provincial foreign trade enterprises in China.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#journey"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 cursor-pointer text-base sm:text-lg font-medium transition-colors duration-300 rounded-sm"
              >
                Our Journey
              </a>
              <a
                href="#mission"
                className="w-full sm:w-auto bg-transparent hover:bg-red-900/20 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 cursor-pointer text-base sm:text-lg font-medium transition-colors duration-300 rounded-sm"
              >
                Our Mission
              </a>
            </div>
          </div>
        </div>

        {/* Slide indicators - same as home page */}
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

      {/* Section that follows the hero */}
      <div className="relative bg-white z-10">
        {/* Content starts here */}
      </div>
    </section>
  );
}
