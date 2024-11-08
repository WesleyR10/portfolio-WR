import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const normalizarTelefone = (value: string) => {
  if (!value) return value

  const numeroLimpo = value.replace(/\D/g, '')
  if (numeroLimpo.length <= 11) {
    let numeroFormatado = numeroLimpo

    if (numeroLimpo.length > 2) {
      numeroFormatado = `(${numeroLimpo.slice(0, 2)})${numeroLimpo.slice(2)}`
    }
    if (numeroLimpo.length > 7) {
      numeroFormatado = `(${numeroLimpo.slice(0, 2)}) ${numeroLimpo.slice(2, 7)}-${numeroLimpo.slice(7)}`
    }
    return numeroFormatado
  }
  return value
}
