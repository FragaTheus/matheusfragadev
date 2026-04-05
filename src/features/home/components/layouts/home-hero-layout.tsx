import AppButton from "@/shared/components/ui/app-button";
import { AppH1, AppP, AppSpan } from "@/shared/components/ui/typography";
import { BsWhatsapp } from "react-icons/bs";
import { GoFileDirectory } from "react-icons/go";
import HomeHeroTerminal from "../home-hero-terminal";

const HomeHeroLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <AppSpan className="text-secondary font-bold px-3 py-1 rounded-full bg-secondary/5 border border-secondary! mb-4">
          jvm.runtime: running
        </AppSpan>
        <AppH1 className="mb-4">
          Desenvolvedor
          <span className="text-primary"> Backend Java </span>
        </AppH1>
        <AppP className="mb-8 max-w-xl">
          Criando APIs robustas e escaláveis. Experiência com projetos e
          desenvolvimento de soluções completas, do planejamento ao deploy.
        </AppP>
        <div className="flex flex-wrap gap-4">
          <AppButton
            btnText="Ver projetos"
            Icon={GoFileDirectory}
            className="p-4 bg-secondary text-white font-bold rounded-lg shadow-lg shadow-secondary/20 hover:-translate-y-0.5 hover:bg-secondary/90"
          />
          <AppButton
            variant="outlined"
            btnText="Entrar em contato"
            Icon={BsWhatsapp}
            className="bg-transparent text-foreground border-foreground! hover:bg-transparent active:bg-transparent"
          />
        </div>
      </div>
      <HomeHeroTerminal />
    </div>
  );
};

export default HomeHeroLayout;
