import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <main>
      <AuroraBackground>
        <Navbar />
        <Hero />
      </AuroraBackground>
      <Skills />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
