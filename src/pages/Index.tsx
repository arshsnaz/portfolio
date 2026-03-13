import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    toast({
      title: "Hi Recruiter 👋",
      description: "Thanks for visiting my portfolio.",
      duration: 3000,
    });
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Premium Background Effects */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
