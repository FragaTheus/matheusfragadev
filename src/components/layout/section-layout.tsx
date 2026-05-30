import { cn } from "@/lib/utils";

function SectionWrapper({
  id,
  children,
  sectionClassName,
  containerClassName,
}: {
  id?: string;
  children: React.ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
}) {
  return (
    <SectionLayout id={id} className={cn(`w-full`, sectionClassName)}>
      <ContainerLayout className={containerClassName}>
        {children}
      </ContainerLayout>
    </SectionLayout>
  );
}

function ContainerLayout({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("w-full max-w-7xl m-auto p-4", className)}>
      {children}
    </div>
  );
}

function SectionLayout({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(`w-full my-16 md:my-18 lg:my-20`, className)}
    >
      {children}
    </section>
  );
}

export { SectionWrapper, ContainerLayout, SectionLayout };
