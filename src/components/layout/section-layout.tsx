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
  isLast = false,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(`w-full ${isLast ? "mt-20" : "my-20"}`, className)}
    >
      {children}
    </section>
  );
}

export { SectionWrapper, ContainerLayout, SectionLayout };
