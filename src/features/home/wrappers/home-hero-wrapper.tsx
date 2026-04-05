import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/components/layouts/section-layout";
import HomeHeroLayout from "../components/layouts/home-hero-layout";

const HomeHeroWrapper = () => {
  return (
    <SectionLayout id="home-hero">
      <ContainerLayout>
        <HomeHeroLayout />
      </ContainerLayout>
    </SectionLayout>
  );
};

export default HomeHeroWrapper;
