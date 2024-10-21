import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSlug(name: string) {
  return name.toLocaleLowerCase().replace(/\s+/g, "-");
}

export function revertSlug(slug: string) {
  // Replace hyphens with spaces
  const reverted = slug.replace(/-/g, " ");

  // Capitalize the first letter of each word (Title Case)
  return reverted.replace(/\b\w/g, (char) => char.toUpperCase());
}
