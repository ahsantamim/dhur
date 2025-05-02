import React, { useState, useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import dynamic from "next/dynamic";

// Import contact components with client-side rendering
const ContactHero = dynamic(() => import("@/components/contact/ContactHero"), {
  ssr: false,
  loading: () => <div className="h-32"></div>,
});

const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  ssr: false,
  loading: () => <div className="h-32"></div>,
});

const ContactInfo = dynamic(() => import("@/components/contact/ContactInfo"), {
  ssr: false,
  loading: () => <div className="h-32"></div>,
});

const ContactMap = dynamic(() => import("@/components/contact/ContactMap"), {
  ssr: false,
  loading: () => <div className="h-32"></div>,
});

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Make sure we're in the browser environment
    if (typeof window !== "undefined") {
      setIsLoaded(true);
    }
  }, []);

  if (!isLoaded) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="mb-4 text-xl font-semibold text-red-600">
              Loading Contact Page...
            </div>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </MainLayout>
  );
}
