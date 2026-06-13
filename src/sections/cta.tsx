import {
  ContainerLayout,
  SectionLayout,
} from "@/components/layout/section-layout";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Cta() {
  return (
    <SectionLayout className="w-full border-t-2 bg-popover" isLast>
      <ContainerLayout className="flex flex-col items-center justify-center text-center gap-8 p-12">
        <TextAnimate once startOnView className="font-bold text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </TextAnimate>
        <TextAnimate once startOnView className="text-sm font-light opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut!
          Deleniti molestiae reiciendis quo minima voluptatibus facilis
          corporis, delectus quas officia a similique possimus, maxime illum
          maiores explicabo in tempora.
        </TextAnimate>
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <Button className="p-8 font-black text-lg">Entrar em contato</Button>
          <Button className="p-8 font-black text-lg" variant={"outline"}>
            Ver projetos
          </Button>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
