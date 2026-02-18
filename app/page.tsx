import HeroSlider from "@/components/home/HeroSlider";
import HeroQuickLinks from "@/components/home/HeroQuickLinks";
import AboutSection from "@/components/home/AboutSection";
import TrustpilotButton from "@/components/home/TrustpilotButton";
import PartnersSection from "@/components/home/PartnersSection";
import OurServices from "@/components/home/OurServices";
import OurExpertise from "../components/home/OurExpertise";
import TrainingSection from "@/components/home/TrainingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import OurNewsSection from "@/components/home/OurNewsSection";
import FAQSection from "@/components/home/FAQSection";
import NewsletterSection from "@/components/home/NewsletterSection";




export default function Home() {
  return (
    <main>
      <HeroSlider />
<HeroQuickLinks />

<AboutSection />
<TrustpilotButton />
<PartnersSection />

<OurServices />

<OurExpertise />
<TrainingSection />
<TestimonialsSection />
<OurNewsSection />
<FAQSection />
<NewsletterSection />


    </main>
  );
}
