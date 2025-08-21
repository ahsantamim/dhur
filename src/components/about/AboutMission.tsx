import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutMission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-20 sm:py-28"
    >
      {/* Modern decorative elements with red accents */}
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
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Content column */}
          <div className="w-full md:w-1/2">
            <div className="space-y-8">
              <div className="w-16 h-1.5 bg-red-600"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Our Values
                <span className="block mt-2 text-red-600">& Vision</span>
              </h2>

              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-gray-600">
                Headquartered in the historical city of Nanjing, JSTEX thrives
                in a region rich with cultural heritage and modern industrial
                growth. With over 10 billion USD in exports, our influence
                extends across more than 120 countries and regions.
              </p>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Integrity and Quality
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We are guided by a management philosophy of clarity,
                      honesty, and excellence in all our business dealings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Responsibility
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We're committed to environmental protection and
                      sustainable practices throughout our operations and supply
                      chain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      People-Oriented Culture
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We create a workplace that promotes democracy, sincerity,
                      and unity among our global team members.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="#journey"
                className="group inline-flex items-center rounded-md bg-red-600 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                Explore Our Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Image column with enhanced presentation */}
          <div className="relative w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="aspect-[4/3] w-full">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our mission in action"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Red accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-red-600"></div>
            </div>

            {/* Floating accent element */}
            <div className="absolute -bottom-6 -right-6 hidden md:flex">
              <div className="h-24 w-24 rounded-lg bg-red-600 shadow-lg flex items-center justify-center relative">
                <span className="text-white text-3xl font-bold">120+</span>
                <span className="text-white text-xs font-medium absolute bottom-2">
                  COUNTRIES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
