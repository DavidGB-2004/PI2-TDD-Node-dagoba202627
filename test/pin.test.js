// test/pin.test.js
import { describe, it, expect } from 'vitest'
import { esPinValido } from '../src/pin.js'

describe('esPinValido(pin)', () => {
  it('null y undefined no son válidos', () => {
    expect(esPinValido(null)).toBe(false)
    expect(esPinValido(undefined)).toBe(false)
  })

  it('un PIN vacío no es válido', () => {
    expect(esPinValido('')).toBe(false)
  })

  it.each(['123', '12345', '1234567'])(
    "'%s' no es válido: la longitud debe ser 4 o 6",
    (pin) => {
      expect(esPinValido(pin)).toBe(false)
    },
  )

  it.each(['12a4', '12 4', '-123', '12.456'])(
    "'%s' no es válido: solo se permiten dígitos 0-9",
    (pin) => {
      expect(esPinValido(pin)).toBe(false)
    },
  )

  it.each(['1111', '0000', '888888'])(
    "'%s' no es válido: todos los dígitos son iguales",
    (pin) => {
      expect(esPinValido(pin)).toBe(false)
    },
  )

  it('un número (no string) no es válido', () => {
    expect(esPinValido(1234)).toBe(false)
  })

  it.each(['1234', '0912', '123456', '908172'])(
    "'%s' es un PIN válido",
    (pin) => {
      expect(esPinValido(pin)).toBe(true)
    },
  )
})
