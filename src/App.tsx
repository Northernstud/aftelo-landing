import { Background } from "@/components/layout/Background";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { HowItWorks } from "@/sections/HowItWorks";
import { Features } from "@/sections/Features";
import { Showcase } from "@/sections/Showcase";
import { EchoStory } from "@/sections/EchoStory";
import { Stats } from "@/sections/Stats";
import { AboutUs } from "@/sections/AboutUs";
import { Community } from "@/sections/Community";
import { Contact } from "@/sections/Contact";
import { FinalCTA } from "@/sections/FinalCTA";

/**
 * Composition root. The page is assembled from independent sections;
 * each pulls its own copy from the content layer and its own styling
 * from the design-system primitives. App only wires order + chrome.
 */
export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Showcase />
        <EchoStory />
        <Stats />
        <AboutUs />
        <Community />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
