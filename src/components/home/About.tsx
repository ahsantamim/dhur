import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-white to-gray-50">
      {/* Modern decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background geometric shapes */}
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-red-50"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-50"></div>

        {/* SVG decorative elements */}
        <svg
          className="absolute top-1/4 right-10 h-48 w-48 text-red-600/10"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray="60,15"
          />
        </svg>

        <svg
          className="absolute bottom-1/4 left-10 h-64 w-64 text-red-600/5"
          viewBox="0 0 100 100"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="10"
            stroke="currentColor"
            strokeWidth="10"
            fill="none"
          />
        </svg>

        <svg
          className="absolute top-1/3 right-1/3 h-24 w-24 text-red-600/10 rotate-45"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,10 90,50 50,90 10,50"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-2 inline-block rounded-full bg-red-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-red-600">
            Our Story
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Who We Are
            <span className="block mt-2 text-red-600">
              Leading Apparel & Fabric Manufacturer
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Crafting excellence in textiles since 2012, serving global markets
            with innovation and quality.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image column with enhanced presentation */}
          <div className="relative order-2 lg:order-1">
            {/* Main image with border effect */}
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="aspect-[4/3] w-full">
                <Image
                  src="/images/home/about-image.jpg"
                  alt="Our innovative textile manufacturing facility"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>

              {/* Red accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-red-600"></div>
            </div>

            {/* Floating accent element */}
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="h-24 w-24 rounded-lg bg-red-600 shadow-lg flex items-center justify-center">
                <span className="text-white text-4xl font-bold">10+</span>
                <span className="text-white text-xs font-medium absolute bottom-2">
                  YEARS
                </span>
              </div>
            </div>
          </div>

          {/* Content column with enhanced typography */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="w-16 h-1.5 bg-red-600 mb-4"></div>

            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Excellence in Textile Manufacturing
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              JS-TEX Bangladesh has established itself as a trusted apparel
              sourcing and manufacturing partner for global brands. We
              specialize in producing premium-quality woven fabrics, denim,
              knitwear, and sweaters for renowned buyers and retailers
              throughout the US, Europe, and Asia.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              Since our founding, we've built lasting partnerships through our
              commitment to exceptional quality, continuous innovation, and
              reliable service delivery.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4">
              {[
                "Premium Materials",
                "Expert Craftsmanship",
                "Sustainable Practices",
                "Global Distribution",
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <div className="mr-2 flex-shrink-0 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA button with enhanced styling */}
            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center rounded-md bg-red-600 px-5 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
