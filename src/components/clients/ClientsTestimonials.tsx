import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";
import Link from "next/link";

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
    name: "Maria Chen",
    position: "Sourcing Director",
    company: "FastFashion Global",
    content:
      "JSTEX has been our trusted fabric partner for over a decade. Their quality consistency and on-time deliveries have been crucial to our success in the fast fashion market.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ahmed Al-Farsi",
    position: "Head of Materials",
    company: "Middle East Textiles",
    content:
      "The diversity of fabrics and custom development capabilities at JSTEX have allowed us to create unique products for our demanding regional market.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    position: "Production Manager",
    company: "South American Clothing Co.",
    content:
      "Reliable delivery and consistent quality have made JSTEX our preferred supplier. Their fabrics perform exceptionally well in our manufacturing process.",
    rating: 5,
  },
];

const ClientsTestimonials = () => {
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
    <section className="bg-neutral-50 py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle SVG background elements */}
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
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-10">
          <span className="mb-2 inline-block rounded-full bg-red-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-red-600">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-[1.2] mb-3 sm:mb-4 text-black">
            Client <span className="text-red-600">Testimonials</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-10 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FiStar key={i} className="text-red-600 w-5 h-5" />
                ))}
              </div>

              <blockquote className="text-xl sm:text-2xl font-light mb-8 text-black italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex flex-col mt-auto">
                <div className="font-semibold text-lg text-black">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-neutral-600">
                  <span className="text-red-600">
                    {testimonials[currentIndex].position}
                  </span>{" "}
                  at {testimonials[currentIndex].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-2">
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

            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3 hover:bg-red-50 rounded-full transition-colors border border-neutral-200 hover:border-red-200"
                aria-label="Previous testimonial"
              >
                <FiArrowLeft className="w-5 h-5 text-black" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 hover:bg-red-50 rounded-full transition-colors border border-neutral-200 hover:border-red-200"
                aria-label="Next testimonial"
              >
                <FiArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl text-black font-bold mb-6">
            Want to become a JSTEX client?
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 group"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientsTestimonials;
