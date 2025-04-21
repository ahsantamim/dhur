import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Product from "@/components/home/Product";
import Industries from "@/components/home/Industries";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <Product />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
    </MainLayout>
  );
}
