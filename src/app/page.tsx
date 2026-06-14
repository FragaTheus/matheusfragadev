import Cta from "@/sections/home/cta";
import Hero from "@/sections/home/hero";
import Projects from "@/sections/home/projects";
import SocialProof from "@/sections/home/social-proof";
import Stackts from "@/sections/home/stackts";
import Technical from "@/sections/home/technical";

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
