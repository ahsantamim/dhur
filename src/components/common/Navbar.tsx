import React, { useState, ReactNode } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useMotionValueEvent, AnimatePresence, useScroll, motion } from "framer-motion";
import useMeasure from "react-use-measure";

// Define types for the links
interface NavLinkType {
  text: string;
  href: string;
  component?: React.FC;
}

// Define prop types for components
interface NavLinkProps {
  children: ReactNode;
  href: string;
  FlyoutContent?: React.FC;
}

interface MobileMenuLinkProps {
  children: ReactNode;
  href: string;
  FoldContent?: React.FC;
  setMenuOpen: (value: boolean) => void;
}

interface LogoProps {
  color?: string;
}

// Client-side only Navbar implementation
const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    setScrolled(latest > 250 ? true : false);
  });

  // Logo component
  const Logo = ({ color = "black" }: LogoProps) => {
    return (
      <Link href="/" className="flex items-center">
        <img
          src="/logo.PNG"
          alt="JSTex Logo"
          className="h-9 scale-110 transition-transform hover:scale-125"
        />
      </Link>
    );
  };

  // Links component
  const Links = () => {
    return (
      <div className="flex items-center gap-6">
        {LINKS.map((l) => (
          <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
            {l.text}
          </NavLink>
        ))}
      </div>
    );
  };

  // NavLink component
  const NavLink = ({ children, href, FlyoutContent }: NavLinkProps) => {
    const [open, setOpen] = useState(false);
    const showFlyout = FlyoutContent && open;

    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative h-fit w-fit"
      >
        <Link href={href} className="relative block overflow-hidden">
          <motion.div
            whileHover={{ y: -20 }}
            transition={{ ease: "backInOut", duration: 0.5 }}
            className="h-[20px]"
          >
            <span className="flex h-[20px] items-center">{children}</span>
            <span className="flex h-[20px] items-center text-black font-medium">
              {children}
            </span>
          </motion.div>
          <span
            style={{
              transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-black transition-transform duration-300 ease-out"
          />
        </Link>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-12 bg-white text-black"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  // CTAs component
  const CTAs = () => {
    return (
      <div className="flex items-center gap-3">
        <button className="px-6 py-2 cursor-pointer font-medium bg-black text-white w-fit transition-all shadow-[3px_3px_0px_gray] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Book A Meeting
        </button>
      </div>
    );
  };

  // MobileMenuLink component
  const MobileMenuLink = ({
    children,
    href,
    FoldContent,
    setMenuOpen,
  }: MobileMenuLinkProps) => {
    const [ref, bounds] = useMeasure();
    const [open, setOpen] = useState(false);

    return (
      <div className="relative text-neutral-950">
        {FoldContent ? (
          <div
            className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
            onClick={() => setOpen((pv) => !pv)}
          >
            <Link
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(false);
              }}
              href={href}
            >
              {children}
            </Link>
            <motion.div
              animate={{ rotate: open ? "180deg" : "0deg" }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <FiChevronDown />
            </motion.div>
          </div>
        ) : (
          <Link
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={href}
            className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          >
            <span>{children}</span>
            <FiArrowRight />
          </Link>
        )}
        {FoldContent && (
          <motion.div
            initial={false}
            animate={{
              height: open ? bounds.height : 0,
              marginBottom: open ? "24px" : "0px",
              marginTop: open ? "12px" : "0px",
            }}
            className="overflow-hidden"
          >
            <div ref={ref}>
              <FoldContent />
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  // MobileMenu component
  const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="block lg:hidden">
        <button onClick={() => setOpen(true)} className="block text-3xl">
          <FiMenu />
        </button>
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "100vw" }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
            >
              <div className="flex items-center justify-between p-6">
                <Logo color="black" />
                <button onClick={() => setOpen(false)}>
                  <FiX className="text-3xl text-neutral-950" />
                </button>
              </div>
              <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
                {LINKS.map((l) => (
                  <MobileMenuLink
                    key={l.text}
                    href={l.href}
                    FoldContent={l.component}
                    setMenuOpen={setOpen}
                  >
                    {l.text}
                  </MobileMenuLink>
                ))}
              </div>
              <div className="flex justify-end bg-neutral-950 p-6">
                <CTAs />
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-black bg-white 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-white py-1 shadow-xl"
          : "bg-neutral-950/0 py-2 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

// List of navigation links
const LINKS: NavLinkType[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Services",
    href: "/services",
  },
  {
    text: "Products",
    href: "/products",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

// Create a client-side only version of the navbar
const Navbar = dynamic(() => Promise.resolve(NavbarComponent), {
  ssr: false, // Disable server-side rendering
});

// Export a simple placeholder during SSR
export { Navbar };
