import { ButtonHTMLAttributes } from "react";

export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string; 
    Icon?: React.ElementType;
    variant?: "solid" | "outlined" | "ghost";
    btnText: string;
}

