export const dynamic = "force-dynamic";
export const revalidate = 0;

import TrainingHero from "@/components/training/TrainingHero";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import TrainingQuickActions from "@/components/training/TrainingQuickActions";
import TrainingIntro from "@/components/training/TrainingIntro";
import TrainingWhyChoose from "@/components/training/TrainingWhyChoose";
import TrainingProcess from "@/components/training/TrainingProcess";
import TrainingFormats from "@/components/training/TrainingFormats";
import TrainingCoursesGrid from "../../components/training/TrainingCoursesGrid";





export default function TrainingPage() {
  return (
    <>
      <TrainingHero />

      {/* Global Breadcrumb */}
      <PageBreadcrumb title="Online Training" />

      <TrainingQuickActions />

       <TrainingIntro />

       <TrainingWhyChoose />

        <TrainingProcess />

        <TrainingFormats />

        <TrainingCoursesGrid />
    
    </>
  );
}
