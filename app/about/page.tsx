import AboutHero from "@/components/about/AboutHero";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import InnovationSection from "@/components/about/InnovationSection";
import TechnologyTransformation from "@/components/about/TechnologyTransformation";
import IndustriesSection from "@/components/about/IndustriesSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import TrainingSupport from "@/components/about/TrainingSupport";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <PageBreadcrumb title="About" />
      <WhoWeAreSection />
      <InnovationSection />
      <TechnologyTransformation />
      <IndustriesSection />
      <WhyChooseUs />
      <TrainingSupport />
    </main>
  );
}
