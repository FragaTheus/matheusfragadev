import Cta from "@/sections/cta";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import SocialProof from "@/sections/social-proof";
import Stackts from "@/sections/stackts";
import Technical from "@/sections/technical";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Projects />
      <Stackts />
      <Technical />
      <Cta />
    </main>
  );
}
