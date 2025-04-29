import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
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
      <section className="relative overflow-hidden py-12 sm:py-16 min-h-[80vh] flex flex-col">
        {/* Enhanced background elements with more reddish SVGs */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-900 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-black blur-3xl"></div>

          {/* New SVG elements */}
          <svg
            className="absolute left-1/3 top-1/4 h-48 w-48 text-red-600/20"
            viewBox="0 0 100 100"
          >
            <polygon
              points="50,15 100,100 0,100"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
            />
          </svg>

          <svg
            className="absolute right-1/4 top-1/3 h-36 w-36 text-red-800/10 rotate-45"
            viewBox="0 0 100 100"
          >
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              rx="20"
              stroke="currentColor"
              strokeWidth="10"
              fill="none"
            />
          </svg>

          <svg
            className="absolute left-2/3 bottom-1/4 h-24 w-24 text-red-500/15"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
            />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            {/* Image column - removed grayscale */}
            <div className="group w-full overflow-hidden md:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/home/about-image.jpg"
                  alt="Our innovative team collaborating"
                  className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0"></div>
                <div className="absolute inset-0 bg-red-900/0 mix-blend-overlay transition-opacity duration-700 group-hover:bg-red-900/10"></div>
              </div>
            </div>

            {/* Content column */}
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                <div className="w-12 h-1 bg-red-600 mb-2"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black">
                  Who We Are
                  <span className="block mt-1 text-red-600">
                    Leading Apparel & Fabric Manufacturer
                  </span>
                </h2>

                <p className="max-w-xl text-sm sm:text-base leading-relaxed text-neutral-600">
                  JS-TEX Bangladesh is a trusted apparel sourcing and
                  manufacturing company. We produce top-quality woven, denim,
                  knitwear, and sweaters for renowned buyers, importers, and
                  retailers across the US, RU, and EU. Since our beginning, we
                  have built strong partnerships, earning trust through
                  exceptional quality, innovation, and reliable service.
                </p>

                <Link
                  href="/about"
                  className="group inline-flex items-center bg-red-600 hover:bg-red-700 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative border-t py-8 sm:py-10 mt-8">
          {/* Enhanced background shapes */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute left-1/4 top-1/4 h-24 w-24 border-4 border-red-600 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 h-32 w-32 border-4 border-black rotate-45"></div>
            <div className="absolute left-3/4 top-1/2 h-16 w-16 border-4 border-red-600 rounded-full"></div>

            {/* New SVG elements */}
            <svg
              className="absolute right-1/3 bottom-1/4 h-40 w-40 text-red-700/10"
              viewBox="0 0 100 100"
            >
              <path
                d="M10,50 Q25,25 50,50 T90,50"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
              />
            </svg>

            <svg
              className="absolute left-1/5 bottom-1/3 h-32 w-32 text-red-500/15 -rotate-12"
              viewBox="0 0 100 100"
            >
              <path
                d="M30,10 L70,10 L90,50 L70,90 L30,90 L10,50 Z"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
              />
            </svg>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-3 sm:mb-4 text-center font-mono text-sm font-medium uppercase tracking-widest text-neutral-900">
              Trusted by industry leaders with
              <span className="inline ml-1 text-red-600">proven results</span>
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
