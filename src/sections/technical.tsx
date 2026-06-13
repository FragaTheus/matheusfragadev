import AppTerminal from "@/components/app/app-terminal";
import { SectionWrapper } from "@/components/layout/section-layout";
import { AnimatedSpan, TypingAnimation } from "@/components/ui/terminal";
import { TextAnimate } from "@/components/ui/text-animate";
import { BiLogoSpringBoot } from "react-icons/bi";

const TechnicalItem = () => {
  return (
    <div className="flex items-center gap-4">
      <BiLogoSpringBoot className="size-8 text-secondary" />
      <div>
        <TextAnimate
          once
          startOnView
          className="font-semibold text-sm uppercase tracking-tighter font-heading"
        >
          Spring Boot
        </TextAnimate>
        <TextAnimate once startOnView className="text-xs">
          Description
        </TextAnimate>
      </div>
    </div>
  );
};

const TechincalContent = () => {
  return (
    <div className="flex flex-col items-start">
      <TextAnimate once startOnView className="text-3xl font-bold">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </TextAnimate>
      <TextAnimate once startOnView className="mt-8 text-sm opacity-90">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        possimus dolorem minus quae veniam omnis nobis reprehenderit ad
        explicabo dolore repellendus alias at necessitatibus veritatis magnam
        pariatur, error nemo consequuntur.
      </TextAnimate>
      <div className="mt-8 flex flex-col gap-6">
        <TechnicalItem />
        <TechnicalItem />
        <TechnicalItem />
      </div>
    </div>
  );
};

export default function Technical() {
  return (
    <SectionWrapper>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <TechincalContent />
        <AppTerminal>
          <TypingAnimation>gradle clean bootrun -x test</TypingAnimation>
          <AnimatedSpan>Executing tasks</AnimatedSpan>
        </AppTerminal>
      </div>
    </SectionWrapper>
  );
}
