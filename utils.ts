import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple Tailwind classes with conflict resolution.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Conditionally returns a class string.
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass: string = ""
): string {
  return condition ? trueClass : falseClass;
}

/**
 * Joins non-null or non-undefined class names.
 */
export function joinClass(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Toggles a class name inside a class string.
 */
export function toggleClass(
  base: string,
  condition: boolean,
  toggledClass: string
): string {
  return condition ? `${base} ${toggledClass}` : base;
}

/**
 * Converts a class string into an array of unique class names.
 */
export function classListToArray(classString: string): string[] {
  return [...new Set(classString.split(/\s+/).filter(Boolean))];
}

/**
 * Removes a specific class from a class string.
 */
export function removeClass(classString: string, classToRemove: string): string {
  return classListToArray(classString).filter(cls => cls !== classToRemove).join(" ");
}

/**
 * Appends a class to a class string if it is not already present.
 */
export function appendClass(classString: string, newClass: string): string {
  const classList = classListToArray(classString);
  if (!classList.includes(newClass)) {
    classList.push(newClass);
  }
  return classList.join(" ");
}

/**
 * Prepends a class to a class string if it is not already present.
 */
export function prependClass(classString: string, newClass: string): string {
  const classList = classListToArray(classString);
  if (!classList.includes(newClass)) {
    classList.unshift(newClass);
  }
  return classList.join(" ");
}

/**
 * Checks if a class exists in a class string.
 */
export function hasClass(classString: string, className: string): boolean {
  return classListToArray(classString).includes(className);
}

/**
 * Toggles a class on/off within a class string.
 */
export function toggleClassValue(classString: string, className: string): string {
  const classList = classListToArray(classString);
  if (classList.includes(className)) {
    return classList.filter(cls => cls !== className).join(" ");
  }
  return [...classList, className].join(" ");
}

/**
 * Removes all instances of a class from a class string.
 */
export function removeAllInstances(classString: string, classToRemove: string): string {
  return classListToArray(classString)
    .filter(cls => cls !== classToRemove)
    .join(" ");
}

/**
 * Counts the number of times a class appears in a class string.
 */
export function countClass(classString: string, className: string): number {
  return classListToArray(classString).filter(cls => cls === className).length;
}

/**
 * Replaces an old class with a new class in a class string.
 */
export function replaceClass(classString: string, oldClass: string, newClass: string): string {
  return classListToArray(classString)
    .map(cls => (cls === oldClass ? newClass : cls))
    .join(" ");
}

/**
 * Merges classes conditionally, adding or removing them based on a boolean condition.
 */
export function mergeClassConditionally(base: string, condition: boolean, conditionalClass: string): string {
  return condition ? `${base} ${conditionalClass}` : base;
}

/**
 * Filters out empty or undefined class names from a class string.
 */
export function filterEmptyClasses(classString: string): string {
  return classString.split(/\s+/).filter(Boolean).join(" ");
}

/**
 * Adds a class only if it doesn't exist already, else removes it.
 */
export function toggleClassOnCondition(classString: string, className: string): string {
  const classList = classListToArray(classString);
  return classList.includes(className)
    ? classList.filter(cls => cls !== className).join(" ")
    : [...classList, className].join(" ");
}

/**
 * Replaces all instances of a class in a string with another class.
 */
export function replaceAllInstances(classString: string, oldClass: string, newClass: string): string {
  return classListToArray(classString)
    .map(cls => (cls === oldClass ? newClass : cls))
    .join(" ");
}

/**
 * Merges class strings, ensuring no duplicates and applying class conditions.
 */
export function mergeClasses(...classes: string[]): string {
  return [...new Set(classes.flatMap(cls => cls.split(/\s+/)))]
    .filter(Boolean)
    .join(" ");
}
