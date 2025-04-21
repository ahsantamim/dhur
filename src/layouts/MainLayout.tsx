import React, { ReactNode } from "react";
import { Navbar } from "../components/common/Navbar";
import Footer from "@/components/common/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
