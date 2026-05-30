import {
  ContainerLayout,
  SectionLayout,
} from "@/components/layout/section-layout";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { TextAnimate } from "@/components/ui/text-animate";
import { RiJavaFill } from "react-icons/ri";

const Item = () => {
  return (
    <Card className="border-2 hover:border-secondary transition-all group">
      <CardContent className="flex flex-col items-center justify-center">
        <RiJavaFill className=" group-hover:text-secondary transition-colors size-8" />
        <CardTitle>Stack</CardTitle>
      </CardContent>
    </Card>
  );
};

export default function Stackts() {
  return (
    <SectionLayout className="w-full border-y bg-card transition-all">
      <ContainerLayout className="py-12">
        <div className="w-full flex flex-col items-center justify-center">
          <TextAnimate startOnView once className="text-3xl font-bold">
            Core ecossistem
          </TextAnimate>
          <TextAnimate className="opacity-90 font-light text-sm text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </TextAnimate>
        </div>
        <div className="w-full mt-8 gap-4 grid grid-cols-1 lg:grid-cols-6">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
