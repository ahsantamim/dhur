import React from "react";
import MainLayout from "@/layouts/MainLayout";
import ClientsHero from "@/components/clients/ClientsHero";
import ClientsRegions from "@/components/clients/ClientsRegions";
import ClientsLogos from "@/components/clients/ClientsLogos";
import ClientsTestimonials from "@/components/clients/ClientsTestimonials";
import ClientsLocal from "@/components/clients/ClientsLocal";

export default function ClientsPage() {
  return (
    <MainLayout>
      <ClientsHero />
      <ClientsLocal />
      <ClientsRegions />
      <ClientsLogos />
      <ClientsTestimonials />
    </MainLayout>
  );
}
