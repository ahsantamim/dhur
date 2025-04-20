import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
    </MainLayout>
  );
}
