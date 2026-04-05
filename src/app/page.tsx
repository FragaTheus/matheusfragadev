import HomeHeroWrapper from "@/features/home/wrappers/home-hero-wrapper";

export default function Home() {
  return (
    <div>
      <HomeHeroWrapper />
      <div className="w-full h-svh">Hero</div>
      <div className="w-full h-svh">Intro</div>
    </div>
  );
}
