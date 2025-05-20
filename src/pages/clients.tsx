import React from "react";
import MainLayout from "@/layouts/MainLayout";
import ClientsHero from "@/components/clients/ClientsHero";
import ClientsRegions from "@/components/clients/ClientsRegions";
import ClientsLogos from "@/components/clients/ClientsLogos";
import ClientsTestimonials from "@/components/clients/ClientsTestimonials";
// import LocalBuyingHouses from "@/components/clients/LocalBuyingHouses";

export default function ClientsPage() {
  return (
    <MainLayout>
      <ClientsHero />
      {/* <LocalBuyingHouses /> */}
      <ClientsRegions />
      <ClientsLogos />
      <ClientsTestimonials />
    </MainLayout>
  );
}
