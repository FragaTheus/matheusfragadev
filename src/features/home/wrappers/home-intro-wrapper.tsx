import {
  ContainerLayout,
  SectionLayout,
} from "@/shared/components/layouts/section-layout";

const HomeIntroWrapper = () => {
  return (
    <SectionLayout id="home-intro" className="bg-surface">
      <ContainerLayout className="h-svh">
        <h1>Em breve</h1>
      </ContainerLayout>
    </SectionLayout>
  );
};

export default HomeIntroWrapper;
