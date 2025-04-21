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
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start md:items-center">
          {/* Left side - Title */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] mb-3 sm:mb-4 text-black">
              What Our Clients Say
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
                    <FiStar key={i} className="text-black w-4 h-4" />
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
                    {testimonials[currentIndex].position} at{" "}
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex gap-2 mt-6 sm:mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 hover:bg-neutral-100 rounded-full transition-colors border border-neutral-200 touch-manipulation"
                aria-label="Previous testimonial"
              >
                <FiArrowLeft className="w-5 h-5 text-black" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 hover:bg-neutral-100 rounded-full transition-colors border border-neutral-200 touch-manipulation"
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
                    index === currentIndex ? "bg-black" : "bg-neutral-200"
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
