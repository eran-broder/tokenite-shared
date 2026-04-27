import type { Model } from '../models/types.js';
import type { Provider } from '../providers/index.js';
import { providerName, type ProviderId } from '../providers/index.js';
import type { ModelBinding, Pricing } from './types.js';
import { ANTHROPIC_BINDINGS } from './anthropic.js';
import { OPENAI_BINDINGS } from './openai.js';
import { GOOGLE_BINDINGS } from './google.js';
import { GROK_BINDINGS } from './grok.js';
import { BEDROCK_BINDINGS } from './bedrock.js';

export { ANTHROPIC_BINDINGS } from './anthropic.js';
export { OPENAI_BINDINGS } from './openai.js';
export { GOOGLE_BINDINGS } from './google.js';
export { GROK_BINDINGS } from './grok.js';
export { BEDROCK_BINDINGS } from './bedrock.js';

export const BINDINGS: readonly ModelBinding[] = [
  ...ANTHROPIC_BINDINGS,
  ...OPENAI_BINDINGS,
  ...GOOGLE_BINDINGS,
  ...GROK_BINDINGS,
  ...BEDROCK_BINDINGS,
];

export const bindingsForModel = (m: Model): readonly ModelBinding[] =>
  BINDINGS.filter((b) => b.model === m);

export const bindingsForProvider = (p: Provider): readonly ModelBinding[] =>
  BINDINGS.filter((b) => b.provider === p);

export const findBinding = (m: Model, p: Provider): ModelBinding | null =>
  BINDINGS.find((b) => b.model === m && b.provider === p) ?? null;

const matchesVendor = (b: ModelBinding, name: string): boolean =>
  b.vendorModelName === name || b.vendorModelAliases?.includes(name) === true;

export const findBindingByVendorName = (
  providerId: ProviderId,
  vendorModelName: string,
): ModelBinding | null => {
  for (const b of BINDINGS) {
    if (providerName(b.provider) === providerId && matchesVendor(b, vendorModelName)) return b;
  }
  return null;
};

const DEFAULT_PRICING: Pricing = {
  inputPerToken: 3 / 1_000_000,
  outputPerToken: 15 / 1_000_000,
};

export const pricingFor = (providerId: ProviderId, vendorModelName: string): Pricing =>
  findBindingByVendorName(providerId, vendorModelName)?.pricing ?? DEFAULT_PRICING;

export { binding } from './types.js';
export type { ModelBinding, Pricing } from './types.js';
