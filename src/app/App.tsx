import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyMadaFresh } from "./components/WhyMadaFresh";
import { HowItWorks } from "./components/HowItWorks";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { DeliveryZone } from "./components/DeliveryZone";
import { FinalCTA } from "./components/FinalCTA";
import { StickyCTA } from "./components/StickyCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header />
      <main>
        <Hero />
        <WhyMadaFresh />
        <HowItWorks />
        <FeaturedProducts />
        <Testimonials />
        <DeliveryZone />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
