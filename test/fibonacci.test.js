// test/fibonacci.test.js
import { describe, it, expect } from 'vitest'
import { fibonacci } from '../src/fibonacci.js'

describe('fibonacci(n)', () => {
  it('fibonacci(0) devuelve 0', () => {
    expect(fibonacci(0)).toBe(0)
  })

  it('fibonacci(1) devuelve 1', () => {
    expect(fibonacci(1)).toBe(1)
  })

  // Para n >= 2 se cumple f(n) = f(n-1) + f(n-2)
  it.each([
    [2, 1],
    [3, 2],
    [5, 5],
    [10, 55],
    [20, 6765],
    [30, 832040],
  ])('fibonacci(%i) devuelve %i', (n, esperado) => {
    expect(fibonacci(n)).toBe(esperado)
  })

  it('cumple f(n) = f(n-1) + f(n-2)', () => {
    for (let n = 2; n <= 25; n++) {
      expect(fibonacci(n)).toBe(fibonacci(n - 1) + fibonacci(n - 2))
    }
  })

  it.each([-1, -10])('fibonacci(%i) lanza RangeError', (n) => {
    expect(() => fibonacci(n)).toThrow(RangeError)
    expect(() => fibonacci(n)).toThrow('solo números enteros ≥ 0')
  })
})
