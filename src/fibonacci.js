// src/fibonacci.js

/**
 * Devuelve el término n de la sucesión de Fibonacci.
 * Versión iterativa: O(n) en tiempo y O(1) en memoria.
 *
 * @param {number} n Posición del término (n ≥ 0).
 * @returns {number} El término n de la sucesión.
 * @throws {RangeError} Si n es negativo.
 */
export function fibonacci(n) {
  if (n < 0) throw new RangeError('solo números enteros ≥ 0')

  let [anterior, actual] = [0, 1]
  for (let i = 0; i < n; i++) {
    [anterior, actual] = [actual, anterior + actual]
  }
  return anterior
}
