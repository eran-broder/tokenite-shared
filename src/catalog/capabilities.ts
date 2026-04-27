export type Cap = { readonly __tag: 'cap' };

export const CAPS = {
  vision:   {} as Cap,
  tools:    {} as Cap,
  thinking: {} as Cap,
  jsonMode: {} as Cap,
} as const;

export type CapId = keyof typeof CAPS;

const CAP_NAME = new Map<Cap, CapId>(
  (Object.entries(CAPS) as [CapId, Cap][]).map(([k, v]) => [v, k]),
);

export const capName = (c: Cap): CapId => CAP_NAME.get(c)!;
