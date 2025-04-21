import React from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  position: "left" | "right";
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  position,
}) => {
  return (
    <div
      className={`flex w-full ${
        position === "left" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`mb-8 flex w-full max-w-[45%] ${
          position === "right" ? "ml-auto" : ""
        }`}
      >
        <div className="relative z-10">
          {/* Dot */}
          <div className="absolute -left-9 top-1.5 h-4 w-4 rounded-full bg-black"></div>

          {/* Content */}
          <div className="border-l-4 border-black pl-6">
            <span className="block text-sm font-semibold uppercase tracking-wider text-neutral-500">
              {year}
            </span>
            <h3 className="mt-1 text-xl font-bold text-black sm:text-2xl">
              {title}
            </h3>
            <p className="mt-3 text-neutral-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AboutJourney() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-24">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg
          className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            strokeWidth="20"
            fill="none"
          />
        </svg>
        <svg
          className="absolute right-0 bottom-0 h-64 w-64 translate-x-1/2 translate-y-1/2"
          viewBox="0 0 100 100"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="black"
            strokeWidth="15"
            fill="none"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Our Journey
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
            The Path to Excellence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Explore our journey from a small startup to an industry leader,
            driven by innovation and commitment to quality.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-neutral-200"></div>

          <div className="space-y-0">
            <TimelineItem
              year="2010"
              title="Foundation"
              description="JSTex was founded with a vision to revolutionize the industry through innovative technology solutions."
              position="left"
            />
            <TimelineItem
              year="2013"
              title="First Major Client"
              description="Secured our first enterprise client, marking the beginning of our growth journey in the industry."
              position="right"
            />
            <TimelineItem
              year="2016"
              title="International Expansion"
              description="Expanded our operations globally, establishing offices in three new countries to serve international clients."
              position="left"
            />
            <TimelineItem
              year="2019"
              title="Industry Recognition"
              description="Received multiple industry awards for our innovative approach and commitment to excellence."
              position="right"
            />
            <TimelineItem
              year="2022"
              title="Major Investment"
              description="Secured significant investment to fuel our growth and expand our product portfolio."
              position="left"
            />
            <TimelineItem
              year="2025"
              title="Market Leader"
              description="Today, we're recognized as a market leader, committed to pushing the boundaries of what's possible."
              position="right"
            />
          </div>

          {/* Bottom dot */}
          <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full bg-black"></div>
        </div>
      </div>
    </section>
  );
}
