import { SectionWrapper } from "@/components/layout/section-layout";
import { TextAnimate } from "@/components/ui/text-animate";

export default function StacksIntro() {
  return (
    <SectionWrapper id="stacks">
      <TextAnimate className="font-bold tracking-tighter text-4xl lg:text-5xl xl:text-6xl">
        Arsenal Tecnológico
      </TextAnimate>
      <TextAnimate className="mt-6 font-light opacity-90 text-sm lg:text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error aliquam,
        reiciendis voluptate quo maiores ad, cumque illo soluta facilis incidunt
        ipsum eaque praesentium eius dolor? Accusantium, quidem! Sed, officiis!
        Iste?
      </TextAnimate>
    </SectionWrapper>
  );
}
