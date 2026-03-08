import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <LanguageSwitcher />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
};

export default Index;
