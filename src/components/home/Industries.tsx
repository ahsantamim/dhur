import { motion } from "framer-motion";
import Image from "next/image";

interface TranslateWrapperProps {
  children: React.ReactNode;
  reverse?: boolean;
}

interface LogoItemProps {
  imagePath: string;
  label: string;
}

const Industries = () => {
  return (
    <section className="relative bg-neutral-50 py-20 sm:py-28 overflow-hidden">
      {/* Enhanced SVG background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg
          className="absolute left-1/4 top-0 h-64 w-64 -translate-y-1/2"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#DC2626"
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
            stroke="#991B1B"
            strokeWidth="10"
            fill="none"
          />
        </svg>

        {/* SVG elements */}
        <svg
          className="absolute left-0 top-1/3 h-80 w-80 text-red-600/20 -translate-x-1/4"
          viewBox="0 0 100 100"
        >
          <path
            d="M10,50 Q25,20 40,50 T70,50 T100,50"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
          />
        </svg>

        <svg
          className="absolute right-0 top-1/4 h-72 w-72 text-red-800/15 translate-x-1/4"
          viewBox="0 0 100 100"
        >
          <path
            d="M10,10 L90,10 L90,90 L10,90 Z"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray="10,5"
          />
        </svg>

        <svg
          className="absolute left-1/2 bottom-0 h-56 w-56 text-red-500/20 -translate-x-1/2 translate-y-1/4"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,10 90,30 90,70 50,90 10,70 10,30"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl mb-12 sm:mb-16">
        <div className="text-center">
          <span className="mb-2 inline-block rounded-full bg-red-600 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Our Reach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold leading-[1.2] mb-4">
            Industries <span className="text-red-600">We Serve</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-base sm:text-lg">
            We provide cutting-edge solutions across diverse industries, helping
            businesses optimize their operations and drive innovation in their
            respective sectors.
          </p>
        </div>
      </div>

      <div className="relative border-t border-b border-neutral-100 py-10 bg-white/50">
        <div className="max-w-7xl mx-auto flex overflow-hidden">
          <TranslateWrapper>
            <LogoRow />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoRow />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoRow />
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
          className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-medium transition-colors"
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
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      className="flex gap-8 px-4"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ imagePath, label }: LogoItemProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-36 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 flex justify-center items-center bg-white hover:bg-red-50 transition-colors rounded-lg shadow-sm border border-neutral-100 group p-4 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={imagePath}
            alt={label}
            fill
            sizes="(max-width: 640px) 36px, (max-width: 768px) 40px, 48px"
            className="object-contain transition-all hover:scale-110"
          />
        </div>
      </div>
      <span className="text-xs sm:text-sm text-neutral-600 font-medium whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

const LogoRow = () => (
  <>
    <LogoItem
      imagePath="/images/buyer company logo/pepe-jeans-others-et.webp"
      label="Pepe Jeans"
    />
    <LogoItem
      imagePath="/images/buyer company logo/Target_Australia-Logo.wine.png"
      label="Target"
    />
    <LogoItem
      imagePath="/images/buyer company logo/Reitmans-Logo.wine.png"
      label="Reitmans"
    />
    <LogoItem
      imagePath="/images/buyer company logo/Promod-logo-500x281.jpg"
      label="Promod"
    />
    <LogoItem
      imagePath="/images/buyer company logo/bestseller-logo-white-on-black.jpg"
      label="Bestseller"
    />
    <LogoItem imagePath="/images/buyer company logo/ca-logo.png" label="C&A" />
    <LogoItem
      imagePath="/images/buyer company logo/Woolo.webp"
      label="Woolworths"
    />
    <LogoItem imagePath="/images/buyer company logo/image-70.png" label="H&M" />
    <LogoItem
      imagePath="/images/buyer company logo/2021-swedish-fashion-brand-kappahl-new-logo-design.png"
      label="KappAhl"
    />
    <LogoItem
      imagePath="/images/buyer company logo/357484014_649800033834950_819934350580520110_n.jpg"
      label="Calzedonia"
    />
    <LogoItem
      imagePath="/images/buyer company logo/431510957_803859341769307_225701672570979654_n.jpg"
      label="Tesco"
    />
    <LogoItem
      imagePath="/images/buyer company logo/id6eWC5QcD_1742537920844.jpeg"
      label="LPP"
    />
  </>
);

export default Industries;
