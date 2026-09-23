import { describe, expect, it } from 'vitest'
import { normalizePriceText, normalizeProductText } from '../src/utils/NormalizeNames'

describe('normalizeProductText', () => {
  it('decodes text with common mojibake characters', () => {
    expect(normalizeProductText('Procesador IntelÂ®')).toBe('Procesador Intel®')
  })

  it('returns already normalized text unchanged', () => {
    expect(normalizeProductText('Tarjeta gráfica')).toBe('Tarjeta gráfica')
  })
})

describe('normalizePriceText', () => {
  it('normalizes numeric and formatted prices', () => {
    expect(normalizePriceText(1299.99)).toBe('1299.99 €')
    expect(normalizePriceText('  49,99 €  ')).toBe('49,99 €')
  })

  it('returns an empty string for missing prices', () => {
    expect(normalizePriceText(undefined)).toBe('')
  })
})