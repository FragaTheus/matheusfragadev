import { twMerge } from "tailwind-merge";

type ClassValue = string | number | false | null | undefined;

export const cn = (...classes: ClassValue[]): string => {
  return twMerge(classes.filter(Boolean).join(" "));
};
