function normalizeProductText(value: string): string {
  if (!/[ÃÂâ]/.test(value)) return value;

  try {
    const bytes = Uint8Array.from(value, (char) => char.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  } catch {
    return value;
  }
}

function normalizePriceText(value: string | number | undefined): string {
  if (value === undefined || value === null) return '';

  const normalized = normalizeProductText(String(value))
    .replace(/â¬/g, '€')
    .replace(/\s+/g, ' ')
    .trim();

  const cleanValue = normalized.replace(/€/g, '').trim();
  return cleanValue ? `${cleanValue} €` : '';
}

export { normalizeProductText, normalizePriceText };