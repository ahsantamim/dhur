import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Custom logo component
const Logo: React.FC<{
  imagePath: string;
  delay: number;
}> = ({ imagePath, delay }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex items-center justify-center"
    >
      <div className="w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center bg-white rounded-full hover:shadow-md hover:border-red-100 transition-all duration-300 p-4">
        <div className="relative w-full h-full">
          <Image
            src={`/images/client logo/${imagePath}`}
            alt="Client Logo"
            fill
            className="object-contain p-2"
          />
        </div>
      </div>
    </motion.div>
  );
};

const ClientsLogos: React.FC = () => {
  const logos = [
    "file_00000000025061fdbe0e3a90eca75757.png",
    "file_0000000007146230a17e70373cf9a418.png",
    "file_000000000b94622fbaa87b567c40639a.png",
    "file_00000000109461f5a825d68af161ac43.png",
    "file_00000000127861f586fd25846814d299.png",
    "file_000000001298622f9ca9558f5dc3ffa6.png",
    "file_000000001c2c61f892d911a90e465001.png",
    "file_00000000313461fdb3aa496abc25a05f.png",
    "file_0000000034b461f89c133fc9b6c33b7a.png",
    "file_00000000528461f9b1be0804d38d459c.png",
    "file_000000005820622f9efec1eb971d5e25.png",
    "file_0000000058a861fd84155eff7de5da81.png",
    "file_00000000686c61f897555a1029b777a7.png",
    "file_000000006c1462308437d6395f9f6131.png",
    "file_000000006fe06230ae04dcfeb4cd6612.png",
    "file_000000007eec61f89e6fedbd4a9cc5fe.png",
    "file_000000009b7461f6ac59215eb03bf362.png",
    "file_000000009bac622f84cfce2202adad18.png",
    "file_00000000b39c61f788bef4706afb2a88.png",
    "file_00000000b4b86230af1d1db5618c0a54.png",
    "file_00000000c97c61f8897c2a9653b05210.png",
    "file_00000000cb34622fa8403d39da42ec53.png",
    "file_00000000d0b461f7a497dc36ee485bba.png",
    "file_00000000e570623092d4561d744c63ff.png",
    "file_00000000f77461f8b48368d46bf35ef9.png",
    "upscaled_logo_1.png",
    "upscaled_logo_2.png",
    "upscaled_logo_3.png",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 sm:mb-16 text-center">
          <span className="mb-2 inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2] mb-4">
            Trusted by <span className="text-red-600">Global Brands</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            We're proud to partner with industry-leading brands worldwide,
            providing exceptional textile products and innovative solutions for
            diverse market needs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {logos.map((logo, index) => (
            <Logo key={index} imagePath={logo} delay={index} />
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>* Representative brands shown for illustrative purposes</p>
        </div>
      </div>
    </section>
  );
};

export default ClientsLogos;
