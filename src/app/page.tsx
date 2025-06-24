import { TeamIntro } from "./components/Teamintro";
import { AnimatedTestimonialsDemo } from "./components/animated-testimonials-demo";
import HeroParallaxDemo from "./components/hero-demo";
import { FeaturesSectionDemo } from "./components/cards-demo";
import { CarouselDemo } from "./components/carousel-demo";
import { MacbookScrollDemo } from "./components/macbook-scroll-demo";
import ServiceSectionsCarrossel from "./components/service-sections.-demo";
import { CTASection } from "./components/cta/CTASection";

export default function Home() {
  return (
    <main className="bg-[#0B0B0F]">
      <HeroParallaxDemo />
      <ServiceSectionsCarrossel />
      <CarouselDemo />
      <FeaturesSectionDemo />
      <TeamIntro />
      
      <CTASection 
        title="Transforme sua Ideia em Realidade Digital"
        subtitle="Aproveite nossa oferta especial e receba 20% de desconto no primeiro projeto"
        showTimer={true}
        section="home-cta"
      />
      
      <AnimatedTestimonialsDemo />
      <MacbookScrollDemo />  
    </main>
  );
}