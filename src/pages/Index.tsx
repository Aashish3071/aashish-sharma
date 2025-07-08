import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { CoreSkillsSection } from "@/components/portfolio/CoreSkillsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { CaseStudiesSection } from "@/components/portfolio/CaseStudiesSection";
import { TestimonialsSection } from "@/components/portfolio/TestimonialsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CoreSkillsSection />
      <ExperienceSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
