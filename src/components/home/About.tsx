import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Changed from react-router-dom to next/link
import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Stat = ({
  num,
  suffix,
  decimals = 0,
  subheading,
}: {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-full sm:w-72 flex-col items-center py-2 sm:py-3">
      <p className="text-center font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-black">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-[12rem] text-center text-xs font-medium uppercase tracking-wider text-neutral-600">
        {subheading}
      </p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <>
      <section className="relative overflow-hidden  py-8 sm:py-12 h-screen flex flex-col">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-neutral-900 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 flex-grow">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8 h-full">
            {/* Image column */}
            <div className="group w-full overflow-hidden md:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our innovative team collaborating"
                  className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0"></div>
              </div>
            </div>

            {/* Content column */}
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Transforming ideas into
                  <span className="block mt-1 text-neutral-500">
                    impactful solutions
                  </span>
                </h2>

                <p className="max-w-xl text-sm sm:text-base leading-relaxed text-neutral-600">
                  Since 2010, we've been partnering with forward-thinking
                  businesses to create meaningful change through innovation and
                  technology. Our approach combines deep industry expertise with
                  cutting-edge capabilities.
                </p>

                <Link
                  href="/about"
                  className="group inline-flex items-center bg-black px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative border-t  py-4 sm:py-6 mt-4">
          {/* Subtle background shapes */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute left-1/4 top-1/4 h-24 w-24 border-4 border-black rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 h-32 w-32 border-4 border-neutral-900 rotate-45"></div>
            <div className="absolute left-3/4 top-1/2 h-16 w-16 border-4 border-neutral-800 rounded-full"></div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-3 sm:mb-4 text-center font-mono text-sm font-medium uppercase tracking-widest text-neutral-900">
              Trusted by industry leaders with
              <span className="inline ml-1 text-neutral-500">
                proven results
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
              <Stat num={92} suffix="%" subheading="Client satisfaction rate" />
              <Stat
                num={25.5}
                decimals={1}
                suffix="K+"
                subheading="Projects completed"
              />
              <Stat num={150} suffix="M+" subheading="Revenue generated" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
