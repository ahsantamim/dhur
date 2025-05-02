import React, { ReactNode, useState, useEffect } from "react";
import { Navbar } from "../components/common/Navbar";
import Footer from "@/components/common/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  // Handle client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      {isClient ? (
        <>
          <Navbar />
          <div className="min-h-screen pt-16">{children}</div>
          <Footer />
        </>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="mb-4 text-xl font-semibold text-red-600">
              Loading...
            </div>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
