// @ts-nocheck

import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import WhyChoose from "@/components/sections/WhyChoose";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Newsletter from "@/components/sections/Newsletter";

export default function __PAGE_NAME__Page() {
  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* BREADCRUMB */}
      <PageBreadcrumb title="__PAGE_TITLE__" />

      {/* WHY CHOOSE */}
      <WhyChoose />

      {/* PROCESS */}
      <ProcessSteps />

      {/* CTA / NEWSLETTER */}
      <Newsletter />
    </>
  );
}
