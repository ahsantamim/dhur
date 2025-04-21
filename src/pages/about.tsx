import React from "react";
import MainLayout from "@/layouts/MainLayout";
import dynamic from "next/dynamic";

// Import all components with client-side rendering only
const AboutHero = dynamic(() => import("@/components/about/AboutHero"), {
  ssr: false,
});

const AboutMission = dynamic(() => import("@/components/about/AboutMission"), {
  ssr: false,
});

const AboutJourney = dynamic(() => import("@/components/about/AboutJourney"), {
  ssr: false,
});

const AboutTeam = dynamic(() => import("@/components/about/AboutTeam"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutHero />
      <AboutMission />
      <AboutJourney />
      <AboutTeam />
    </MainLayout>
  );
}
