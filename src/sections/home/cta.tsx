import {
  ContainerLayout,
  SectionLayout,
} from "@/components/layout/section-layout";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";

export default function Cta() {
  return (
    <SectionLayout className="w-full border-t-2 bg-popover" isLast>
      <ContainerLayout className="flex flex-col items-center justify-center text-center gap-8 p-12">
        <TextAnimate once startOnView className="font-bold text-3xl">
          Interessado no meu trabalho?
        </TextAnimate>
        <TextAnimate once startOnView className="text-sm font-light opacity-90">
          Fique à vontade para entrar em contato ou cconectar-se comigo nas
          redes sociais.
        </TextAnimate>
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <Link href={"https://wa.me/5511974479570"} target="_blank">
            <Button className="p-8 font-black text-lg">
              Entrar em contato
            </Button>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/matheusfragadev/"}
            target="_blank"
          >
            <Button className="p-8 font-black text-lg" variant={"outline"}>
              Conecte-se comigo
            </Button>
          </Link>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
