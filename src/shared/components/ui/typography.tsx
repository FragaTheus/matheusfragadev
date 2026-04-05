import { cn } from "@/config/utils";
import { TypographyProps } from "../type/app-typography";

const AppSpan = ({ className, children }: TypographyProps) => {
  return (
    <span
      className={cn(
        "font-mono text-xs tracking-widest inline-flex whitespace-pre-line",
        className,
      )}
    >
      {children}
    </span>
  );
};

const AppH1 = ({ className, children }: TypographyProps) => {
  return (
    <h1
      className={cn(
        "text-5xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tighter leading-tight whitespace-pre-line",
        className,
      )}
    >
      {children}
    </h1>
  );
};

const AppP = ({ className, children }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-base md:text-lg lg:text-xl font-normal leading-relaxed whitespace-pre-line",
        className,
      )}
    >
      {children}
    </p>
  );
};

export { AppSpan, AppH1, AppP };
