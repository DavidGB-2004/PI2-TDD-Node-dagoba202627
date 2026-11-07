// src/pin.js
// Fase GREEN: implementación mínima que hace pasar los tests.

export function esPinValido(pin) {
  // No puede ser null ni undefined, y debe ser un string
  if (pin === null || pin === undefined) return false
  if (typeof pin !== 'string') return false

  // No puede estar vacío
  if (pin === '') return false

  // Longitud 4 o 6
  if (pin.length !== 4 && pin.length !== 6) return false

  // Solo dígitos 0-9
  for (const caracter of pin) {
    if (caracter < '0' || caracter > '9') return false
  }

  // No todos los dígitos iguales
  let todosIguales = true
  for (const caracter of pin) {
    if (caracter !== pin[0]) todosIguales = false
  }
  if (todosIguales) return false

  return true
}
