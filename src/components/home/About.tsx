// components/AboutSection.tsx
"use client";

import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Top White Background */}
      <div className="h-1/2 bg-white" />

      {/* Bottom Gray Background */}
      <div className="h-1/2 bg-gray-100" />

      {/* Centered Absolute Image with Overlay and Text */}
      <div className="absolute top-1/2 left-1/2 w-full flex justify-center transform -translate-x-1/2 -translate-y-1/2">
        <div className="max-w-5xl w-full mt-24 mb-24 px-4 relative">
          <div className="relative overflow-hidden  shadow-xl">
            <Image
              src="/images/about-image.png"
              alt="About Company"
              width={1600}
              height={600}
              className="w-full h-auto object-cover max-h-[500px]"
              priority
            />
            {/* Black overlay with gradient */}
            <div className="absolute  inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

            {/* About Us Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h2 className="text-5xl font-bold mb-4 tracking-wider">
                ABOUT US
              </h2>
              <p className="text-xl max-w-2xl text-center px-6">
                JS-TEX Bangladesh is a trusted apparel sourcing and
                manufacturing company. We produce top-quality woven, denim,
                knitwear, and sweaters for renowned buyers, importers, and
                retailers across the US, RU, and EU. Since our beginning, we
                have built strong partnerships, earning trust through
                exceptional quality, innovation, and reliable service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
