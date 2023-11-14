import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes while resolving conflicts.
 *
 * @param inputs - List of class values
 * @returns A merged class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Conditionally applies a class based on a boolean value.
 *
 * @param condition - Boolean to determine the applied class
 * @param trueClass - Class to apply if condition is true
 * @param falseClass - Class to apply if condition is false (optional)
 * @returns Selected class string
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass?: string
): string {
  return condition ? trueClass : falseClass || "";
}
