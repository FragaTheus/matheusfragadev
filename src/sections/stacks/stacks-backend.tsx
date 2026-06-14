import StacksTitle from "@/components/stacks/stacks-title";
import { SectionWrapper } from "@/components/layout/section-layout";
import StacksCardLayout from "@/components/stacks/stack-card-layout";

export default function StacksBackend() {
  return (
    <SectionWrapper id="backend">
      <StacksTitle title="Backend" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
        <StacksCardLayout></StacksCardLayout>
      </div>
    </SectionWrapper>
  );
}
