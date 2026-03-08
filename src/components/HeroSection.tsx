import heroImage from "@/assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion editorial portrait"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 font-body text-sm uppercase tracking-[0.4em] text-primary opacity-0 animate-fade-up">
          Fashion Model
        </p>
        <h1 className="mb-6 font-display text-6xl font-medium italic tracking-wide text-foreground opacity-0 animate-fade-up md:text-8xl lg:text-9xl" style={{ animationDelay: "0.2s" }}>
          Alexandra
        </h1>
        <div className="h-px w-24 bg-primary opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }} />
        <p className="mt-6 max-w-md font-body text-sm font-light leading-relaxed text-secondary-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          Haute couture · Editorial · Runway
        </p>
        <a
          href="#portfolio"
          className="mt-12 font-body text-xs uppercase tracking-[0.3em] text-primary opacity-0 animate-fade-up transition-opacity hover:opacity-70"
          style={{ animationDelay: "0.8s" }}
        >
          Смотреть портфолио ↓
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
