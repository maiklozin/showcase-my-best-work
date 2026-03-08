import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { I18nProvider } from "@/i18n/I18nProvider";

const Index = () => {
  return (
    <I18nProvider>
      <main className="min-h-screen bg-background">
        <LanguageSwitcher />
        <HeroSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </I18nProvider>
  );
};

export default Index;
