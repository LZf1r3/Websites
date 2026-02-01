import { clsx } from 'clsx';

export function cn(...inputs: Array<string | undefined | null | false>) {
  return clsx(inputs);
}

export function formatTags(tags: string[]) {
  return tags.join(' • ');
}
