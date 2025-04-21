import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Use dynamic import with ssr: false to ensure browser APIs are not called during server-side rendering
const AboutHero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/about-image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      {/* SVG Background Elements for subtle design */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg
          className="absolute -top-24 -left-24 h-64 w-64 text-white/20"
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
            Our Story
            <span className="block text-gray-300 mt-2">Who We Are</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 max-w-2xl">
            We're passionate about innovation and committed to excellence.
            Discover the team behind our success and our journey to becoming
            industry leaders.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-4 cursor-pointer text-base sm:text-lg font-medium transition-colors duration-300 rounded-sm">
              Meet Our Team
            </button>
            <button className="w-full sm:w-auto bg-transparent hover:bg-white/10 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 cursor-pointer text-base sm:text-lg font-medium transition-colors duration-300 rounded-sm">
              Our Process
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export with dynamic import to ensure the component is only loaded on the client side
export default dynamic(() => Promise.resolve(AboutHero), { ssr: true });
