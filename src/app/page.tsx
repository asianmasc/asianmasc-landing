import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Pillars from "@/components/Pillars";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen" role="main">
      <Hero />
      <Problem />
      <Pillars />
      <Stats />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
