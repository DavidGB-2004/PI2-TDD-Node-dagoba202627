// src/pin.js

// Exactamente 4 o 6 dígitos (0-9), sin ningún otro carácter
const FORMATO_PIN = /^(\d{4}|\d{6})$/

// Un dígito seguido de sí mismo hasta el final: '1111', '888888'...
const DIGITOS_REPETIDOS = /^(\d)\1+$/

/**
 * Comprueba si un PIN es válido.
 *
 * @param {unknown} pin Valor a comprobar.
 * @returns {boolean} true si es un string de 4 o 6 dígitos
 *   que no son todos iguales; false en cualquier otro caso
 *   (null, undefined, vacío, números, letras...).
 */
export function esPinValido(pin) {
  return (
    typeof pin === 'string' &&
    FORMATO_PIN.test(pin) &&
    !DIGITOS_REPETIDOS.test(pin)
  )
}
