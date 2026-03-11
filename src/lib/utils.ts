import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function safeOpenUrl(url: string, target: string = '_blank'): void {
  if (isValidUrl(url)) {
    window.open(url, target, 'noopener,noreferrer');
  } else {
    console.warn('Invalid URL attempted:', url);
  }
}
