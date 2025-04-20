import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md " : "bg-white/0 "
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </header>
  );
};

export const NavBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hidden items-center justify-between md:flex">
      {children}
    </div>
  );
};

export const NavbarLogo = () => {
  return (
    <a href="/" className="flex items-center">
      <img src="/logo.PNG" alt="JSTex Logo" className="h-8" />
    </a>
  );
};

export const NavItems = ({
  items,
}: {
  items: { name: string; link: string }[];
}) => {
  return (
    <nav className="mx-8 flex items-center space-x-8">
      {items.map((item, idx) => (
        <a
          key={`desktop-link-${idx}`}
          href={item.link}
          className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export const NavbarButton = ({
  variant = "primary",
  className,
  onClick,
  children,
}: {
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
        variant === "primary"
          ? "bg-indigo-600 text-white hover:bg-indigo-700"
          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
      } ${className || ""}`}
    >
      {children}
    </button>
  );
};

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
  return <div className="md:hidden">{children}</div>;
};

export const MobileNavHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-between py-4">{children}</div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700"
      aria-label="Toggle menu"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.path
              key="x"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, pathOffset: 0 }}
              exit={{ pathLength: 0 }}
              transition={{ duration: 0.3 }}
              strokeWidth="2"
              stroke="currentColor"
              strokeLinecap="round"
              d="M 4 4 L 20 20 M 20 4 L 4 20"
            />
          ) : (
            <motion.path
              key="menu"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, pathOffset: 0 }}
              exit={{ pathLength: 0 }}
              transition={{ duration: 0.3 }}
              strokeWidth="2"
              stroke="currentColor"
              strokeLinecap="round"
              d="M 4 6 L 20 6 M 4 12 L 20 12 M 4 18 L 20 18"
            />
          )}
        </AnimatePresence>
      </svg>
    </button>
  );
};

export const MobileNavMenu = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 z-50 w-full overflow-hidden bg-white px-4 shadow-lg"
          >
            <div className="flex flex-col space-y-6 py-8">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
