import { cn } from "@/config/utils";
import {
  ContainerLayoutProps,
  SectionLayoutProps,
} from "../type/section-layout.type";

const SectionLayout = ({ id, className, children }: SectionLayoutProps) => {
  return (
    <section id={id} className={cn(`w-full`, className)}>
      {children}
    </section>
  );
};

const ContainerLayout = ({ className, children }: ContainerLayoutProps) => {
  return (
    <div
      className={cn(`w-full max-w-7xl border-x m-auto p-4 md:p-6`, className)}
    >
      {children}
    </div>
  );
};

export { SectionLayout, ContainerLayout };
