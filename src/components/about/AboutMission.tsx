import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Added Next.js Link import

export default function AboutMission() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Subtle SVG background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[40px] border-black"></div>
        <div className="absolute left-1/4 bottom-10 h-40 w-40 rounded-full border-[20px] border-gray-900"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16">
          {/* Content column */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
                Our Mission
                <span className="block mt-2 text-neutral-500">& Vision</span>
              </h2>

              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-neutral-600">
                We strive to be at the forefront of technological advancement,
                delivering innovative solutions that empower businesses to
                thrive in an increasingly competitive landscape. Our commitment
                to excellence drives everything we do.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
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
                    <h3 className="text-xl font-bold text-black">Innovation</h3>
                    <p className="mt-2 text-neutral-600">
                      We consistently push the boundaries of what's possible,
                      embracing new technologies to create cutting-edge
                      solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
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
                    <h3 className="text-xl font-bold text-black">Excellence</h3>
                    <p className="mt-2 text-neutral-600">
                      We're committed to delivering exceptional quality in
                      everything we do, exceeding expectations at every turn.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/process"
                className="group inline-flex items-center bg-black px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Learn About Our Process
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Image column with overlapping design */}
          <div className="relative w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 h-full w-full border-2 border-black"></div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our mission in action"
                className="relative z-10 w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 h-48 w-48 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
