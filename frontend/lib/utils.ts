import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateCPF(value: string) {
  const cleanedCPF = value.replace(/[^\d]/g, '');

  if (
    cleanedCPF.length !== 11 ||
    /^(.)\1+$/.test(cleanedCPF) ||
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].some(
      (i) => cleanedCPF.substring(9, 1) == i.toString().repeat(1)
    )
  ) {
    return false;
  }

  let add = 0;
  for (let i = 0; i < 9; i++) add += parseInt(cleanedCPF.charAt(i)) * (10 - i);
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cleanedCPF.charAt(9))) return false;

  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(cleanedCPF.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cleanedCPF.charAt(10))) return false;

  return true;
}
