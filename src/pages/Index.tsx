import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SeoHead from "@/components/SeoHead";
import SeoIntroSection from "@/components/SeoIntroSection";
import SiteHeaderNav from "@/components/SiteHeaderNav";
import { useI18n } from "@/i18n/I18nProvider";

const Index = () => {
  const { lang } = useI18n();

  return (
    <main className="min-h-screen bg-background">
      <SeoHead lang={lang} />
      <SiteHeaderNav />
      <LanguageSwitcher />
      <HeroSection />
      <SeoIntroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Index;
