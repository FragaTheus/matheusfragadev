import { cn } from "@/config/utils";
import { AppButtonProps } from "../type/app-button.type";

const variantStyles = {
  solid: "bg-primary hover:bg-primary/80 active:bg-primary/90 text-white",
  outlined:
    "border border-secondary! text-secondary bg-secondary/5 hover:bg-secondary/10 active:bg-secondary/20",
  ghost: "text-primary bg-transparent hover:bg-primary/10 active:bg-primary/20",
};

const AppButton = ({
  btnText,
  className,
  Icon,
  variant = "solid",
  ...props
}: AppButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 py-1 text-sm md:text-base font-semibold flex items-center justify-center gap-2 rounded-sm transition-colors cursor-pointer group ",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {Icon && (
        <Icon className="group-hover:mr-1 transition-all duration-300 text-base md:text-lg" />
      )}
      <span className="mt-0.5">{btnText}</span>
    </button>
  );
};

export default AppButton;
