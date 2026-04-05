import { cn } from "@/config/utils";
import { AppButtonProps } from "../type/app-button.type";

const variantStyles = {
  solid: "bg-primary hover:opacity-80 active:opacity-90 text-white",
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
        "px-4 py-1 text-sm md:text-base font-semibold flex items-center justify-center gap-2 rounded-sm transition-all duration-200 cursor-pointer active:scale-95",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {Icon && <Icon className="text-base md:text-lg" />}
      <span>{btnText}</span>
    </button>
  );
};

export default AppButton;
