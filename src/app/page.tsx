import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Marquee from "@/components/Marquee";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex flex-col bg-obsidian">
      <Preloader />
      <Hero />
      <Marquee text="Social Media Management • Visual Branding • Media Production" speed={20} />
      <Services />
      <Work />
      <Clients />
      <About />
      <Footer />
    </main>
  );
}
