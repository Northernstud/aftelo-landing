import { Background } from "@/components/layout/Background";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { IntroCurtain } from "@/components/intro/IntroCurtain";
import { BetaSignup } from "@/sections/BetaSignup";
import { HowItWorks } from "@/sections/HowItWorks";
import { Features } from "@/sections/Features";
import { EchoStory } from "@/sections/EchoStory";

/**
 * Composition root. The page recruits beta testers: a first-load logo curtain,
 * then a signup form as the hero, followed by a trimmed set of "about Nuvyel"
 * sections. Each section pulls its own copy from the content layer and its own
 * styling from the design-system primitives. App only wires order + chrome.
 */
export default function App() {
  return (
    <>
      <IntroCurtain />
      <Background />
      <Nav />
      <main>
        <BetaSignup />
        <HowItWorks />
        <Features />
        <EchoStory />
      </main>
      <Footer />
    </>
  );
}
