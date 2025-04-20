import { useEffect, useState } from "react";
import Image from "next/image";

// Using local image paths with better browser compatibility
const images = ["/images/hero-1.png", "images/hero-2.png"];

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
    <div className="relative  h-screen overflow-hidden">
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
        <div className="absolute  inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      {/* Overlay */}
      <div className="absolute max-w-7xl mx-auto  inset-0 bg-opacity-80 flex items-center ">
        <div className="max-w-2xl text-left text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empowering Industry Through Innovation
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            High-performance tools & machinery for modern businesses.
          </p>
          <button className="bg-black hover:bg-gray-900 text-white px-8 py-4 cursor-pointer text-lg font-medium transition-colors duration-300">
            Explore Products
          </button>
        </div>
      </div>
    </div>
  );
}
