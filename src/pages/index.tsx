import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import TopFabricCategories from "@/components/home/TopFabricCategories";
import Industries from "@/components/home/Industries";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <TopFabricCategories />
      <Industries />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
    </MainLayout>
  );
}
