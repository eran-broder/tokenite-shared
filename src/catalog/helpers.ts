export const asRecord = (value: unknown): Record<string, unknown> | null =>
  typeof value === 'object' && value !== null ? (value as Record<string, unknown>) : null;

export const asNumber = (value: unknown): number =>
  typeof value === 'number' ? value : Number(value ?? 0);

export const asString = (value: unknown, fallback: string): string =>
  typeof value === 'string' ? value : fallback;

export const perMillion = (dollars: number): number => dollars / 1_000_000;
