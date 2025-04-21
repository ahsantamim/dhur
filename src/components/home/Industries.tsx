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
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2] mb-3 sm:mb-4 text-center">
          Industries We Serve
        </h2>
        <p className="text-neutral-500 max-w-2xl mx-auto text-center text-base sm:text-lg">
          We provide cutting-edge solutions across diverse industries, helping
          businesses optimize their operations and drive innovation in their
          respective sectors.
        </p>
      </div>

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
      <div className="max-w-7xl mx-auto flex overflow-hidden mt-4">
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
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }: TranslateWrapperProps) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, label }: LogoItemProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 flex justify-center items-center hover:bg-slate-100 text-black transition-colors rounded-lg">
        <Icon className="text-2xl sm:text-4xl md:text-5xl transition-transform hover:scale-110" />
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
