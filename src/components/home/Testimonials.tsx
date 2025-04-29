import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    position: "Production Manager",
    company: "Industrial Tech Co.",
    content:
      "Their machinery has significantly improved our production efficiency. The quality and reliability of their equipment is unmatched in the industry.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    position: "Operations Director",
    company: "Global Manufacturing Ltd.",
    content:
      "Outstanding service and support. Their team's expertise and quick response time have been crucial to maintaining our operational excellence.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    position: "Plant Supervisor",
    company: "Advanced Materials Inc.",
    content:
      "The innovative solutions they provide have helped us stay ahead of the competition. Their commitment to quality is evident in every interaction.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-white py-16 sm:py-24 relative overflow-hidden">
      {/* Added reddish SVG background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg
          className="absolute left-0 top-0 h-72 w-72 text-red-600/30 -translate-x-1/4"
          viewBox="0 0 100 100"
        >
          <path
            d="M30,10 Q-10,50 30,90 Q50,110 70,90 Q110,50 70,10 Q50,-10 30,10"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
          />
        </svg>

        <svg
          className="absolute right-0 top-1/4 h-64 w-64 text-red-700/20 translate-x-1/4"
          viewBox="0 0 100 100"
        >
          <path
            d="M10,25 L25,10 L75,10 L90,25 L90,75 L75,90 L25,90 L10,75 Z"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
          />
        </svg>

        <svg
          className="absolute bottom-0 left-1/3 h-56 w-56 text-red-500/15"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            strokeDasharray="15,8"
          />
        </svg>

        <svg
          className="absolute bottom-1/4 right-1/4 h-40 w-40 text-red-800/20 rotate-12"
          viewBox="0 0 100 100"
        >
          <path
            d="M10,50 Q25,25 50,25 T90,50 T50,75 T10,50"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
          />
        </svg>

        <svg
          className="absolute top-1/2 left-1/4 h-48 w-48 text-red-600/15 -translate-y-1/2"
          viewBox="0 0 100 100"
        >
          <polygon
            points="20,10 80,10 95,50 80,90 20,90 5,50"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start md:items-center">
          {/* Left side - Title */}
          <div>
            <div className="w-12 h-1 bg-red-600 mb-3"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] mb-3 sm:mb-4 text-black">
              What Our <span className="text-red-600">Clients Say</span>
            </h2>
            <p className="text-neutral-600 max-w-xl text-base sm:text-lg">
              Trusted by industry leaders worldwide for our commitment to
              excellence and innovation
            </p>
          </div>

          {/* Right side - Testimonial Carousel */}
          <div className="relative min-h-[300px] sm:min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FiStar key={i} className="text-red-600 w-4 h-4" />
                  ))}
                </div>

                <blockquote className="text-lg sm:text-xl font-light mb-6 text-black">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex flex-col mt-auto">
                  <div className="font-semibold text-black">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-neutral-600 text-sm">
                    <span className="text-red-600">
                      {testimonials[currentIndex].position}
                    </span>{" "}
                    at {testimonials[currentIndex].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex gap-2 mt-6 sm:mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 hover:bg-red-50 rounded-full transition-colors border border-neutral-200 touch-manipulation hover:border-red-200"
                aria-label="Previous testimonial"
              >
                <FiArrowLeft className="w-5 h-5 text-black" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 hover:bg-red-50 rounded-full transition-colors border border-neutral-200 touch-manipulation hover:border-red-200"
                aria-label="Next testimonial"
              >
                <FiArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-0 right-0 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-8 h-1 rounded-full transition-all ${
                    index === currentIndex ? "bg-red-600" : "bg-neutral-200"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
