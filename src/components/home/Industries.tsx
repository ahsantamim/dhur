import { motion } from "framer-motion";
import {
  SiNike,
  SiBmw,
  SiBosch,
  SiSeat,
  SiHonda,
  SiTarget,
  SiZara,
  SiUniqlo,
  SiPhilipshue,
  SiAbbott,
  SiPuma,
} from "react-icons/si";
import { IconType } from "react-icons";

interface TranslateWrapperProps {
  children: React.ReactNode;
  reverse?: boolean;
}

interface LogoItemProps {
  Icon: IconType;
  label: string;
}

const Industries = () => {
  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      {/* Subtle SVG background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg
          className="absolute left-1/4 top-0 h-64 w-64 -translate-y-1/2"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            strokeWidth="10"
            fill="none"
          />
        </svg>
        <svg
          className="absolute right-1/4 bottom-0 h-64 w-64 translate-y-1/2"
          viewBox="0 0 100 100"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="black"
            strokeWidth="10"
            fill="none"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl mb-12 sm:mb-16">
        <div className="text-center">
          <span className="mb-2 inline-block rounded-full bg-black px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Our Reach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2] mb-4">
            Industries We Serve
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-base sm:text-lg">
            We provide cutting-edge solutions across diverse industries, helping
            businesses optimize their operations and drive innovation in their
            respective sectors.
          </p>
        </div>
      </div>

      <div className="relative border-t border-b border-gray-100 py-10 bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex overflow-hidden">
          <TranslateWrapper>
            <LogoRow1 />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoRow1 />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoRow1 />
          </TranslateWrapper>
        </div>
        <div className="max-w-7xl mx-auto flex overflow-hidden mt-8">
          <TranslateWrapper reverse>
            <LogoRow2 />
          </TranslateWrapper>
          <TranslateWrapper reverse>
            <LogoRow2 />
          </TranslateWrapper>
          <TranslateWrapper reverse>
            <LogoRow2 />
          </TranslateWrapper>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl mt-12 text-center">
        <p className="text-neutral-600 max-w-2xl mx-auto text-base sm:text-lg mb-6">
          We're proud to serve leading companies across multiple sectors,
          providing tailored solutions to meet their unique requirements.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center bg-black hover:bg-neutral-800 text-white px-6 py-3 font-medium transition-colors"
        >
          Explore Case Studies
        </motion.button>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }: TranslateWrapperProps) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-8 px-4"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, label }: LogoItemProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 flex justify-center items-center bg-white hover:bg-gray-50 text-black transition-colors rounded-lg shadow-sm border border-gray-100">
        <Icon className="text-3xl sm:text-5xl md:text-6xl transition-transform hover:scale-110" />
      </div>
      <span className="text-xs sm:text-sm text-neutral-600 font-medium whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

const LogoRow1 = () => (
  <>
    <LogoItem Icon={SiZara} label="Fashion" />
    <LogoItem Icon={SiNike} label="Sportswear" />
    <LogoItem Icon={SiTarget} label="Textile" />
    <LogoItem Icon={SiPhilipshue} label="Home" />
    <LogoItem Icon={SiUniqlo} label="Retail" />
    <LogoItem Icon={SiPuma} label="Apparel" />
  </>
);

const LogoRow2 = () => (
  <>
    <LogoItem Icon={SiBmw} label="Automotive" />
    <LogoItem Icon={SiAbbott} label="Medical" />
    <LogoItem Icon={SiSeat} label="Industrial" />
    <LogoItem Icon={SiHonda} label="Manufacturing" />
    <LogoItem Icon={SiBosch} label="Distribution" />
    <LogoItem Icon={SiPhilipshue} label="Technology" />
  </>
);

export default Industries;
