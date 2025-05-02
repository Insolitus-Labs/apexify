import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges Tailwind CSS classes with conflict resolution.
 * This utility ensures that only the most relevant class names are kept.
 * 
 * @param inputs - Class values to be merged
 * @returns The merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)) 
}

/**
 * Conditionally adds a class based on the input condition.
 * This allows the addition of classes dynamically.
 * 
 * @param condition - The condition to apply the class
 * @param trueClass - Class to apply if condition is true
 * @param falseClass - Class to apply if condition is false (optional)
 * @returns The final class string based on the condition
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass: string = ""
): string {
  return condition ? trueClass : falseClass
}
