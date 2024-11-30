"use client";
import Hero from "@/components/LandingPage/Hero";
import FeatureSection from "@/components/LandingPage/FeatureSection";
import CTA from "@/components/LandingPage/CTA";
import Footer from "@/components/LandingPage/Footer";

export default function Root() {
  return (
    <>
      {/* Hero section with bg-color */}
      <Hero />
      {/* Feature Cards */}
      <FeatureSection />
      {/* CTA */}
      <CTA />
      {/* Footer */}
      <Footer/>
    </>
  );
}
