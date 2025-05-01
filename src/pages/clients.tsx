import React from "react";
import MainLayout from "@/layouts/MainLayout";
import dynamic from "next/dynamic";

// Import all components with client-side rendering only
const ClientsHero = dynamic(() => import("@/components/clients/ClientsHero"), {
  ssr: false,
});

const ClientsRegions = dynamic(() => import("@/components/clients/ClientsRegions"), {
  ssr: false,
});

const ClientsLogos = dynamic(() => import("@/components/clients/ClientsLogos"), {
  ssr: false,
});

const ClientsTestimonials = dynamic(() => import("@/components/clients/ClientsTestimonials"), {
  ssr: false,
});

export default function ClientsPage() {
  return (
    <MainLayout>
      <ClientsHero />
      <ClientsRegions />
      <ClientsLogos />
      <ClientsTestimonials />
    </MainLayout>
  );
}