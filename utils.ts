import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes while resolving conflicts.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Conditionally applies a class based on a boolean value.
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass?: string
): string {
  return condition ? trueClass : falseClass || "";
}
