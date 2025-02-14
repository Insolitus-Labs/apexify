import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind classes with conditional logic.
 * It removes conflicting classes and ensures proper merging.
 *
 * @param inputs - Class values to be merged
 * @returns A properly merged class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to conditionally apply classes based on a boolean value.
 *
 * @param condition - Boolean condition to apply the class
 * @param trueClass - Class to apply if condition is true
 * @param falseClass - Class to apply if condition is false (optional)
 * @returns The selected class string
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass: string = ""
): string {
  return condition ? trueClass : falseClass;
}
  