// @ts-nocheck

import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import WhyChoose from "@/components/sections/WhyChoose";
import ProcessSteps from "@/components/sections/ProcessSteps";


export default function AiSolutionsPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* BREADCRUMB */}
      <PageBreadcrumb title="AI Solutions" />

      {/* WHY CHOOSE */}
      <WhyChoose />

      {/* PROCESS */}
      <ProcessSteps />

      
    </>
  );
}
