import { anthropic } from './anthropic.js';
import { openai } from './openai.js';
import { google } from './google.js';
import { grok } from './grok.js';
import { bedrock } from './bedrock.js';
import type { Provider } from './types.js';

export { type Provider, type ProviderAuth, defineProvider } from './types.js';

export const PROVIDERS = {
  anthropic,
  openai,
  google,
  grok,
  bedrock,
} as const satisfies Record<string, Provider>;

export type ProviderId = keyof typeof PROVIDERS;

export const PROVIDER_IDS = Object.keys(PROVIDERS) as [ProviderId, ...ProviderId[]];

const PROVIDER_NAME = new Map<Provider, ProviderId>(
  (Object.entries(PROVIDERS) as [ProviderId, Provider][]).map(([k, v]) => [v, k]),
);

export const providerName = (p: Provider): ProviderId => PROVIDER_NAME.get(p)!;

export const getProvider = (id: ProviderId): Provider => PROVIDERS[id];

export const tryGetProvider = (id: string): Provider | null =>
  (PROVIDERS as Record<string, Provider | undefined>)[id] ?? null;

export const listProviders = (): readonly Provider[] => Object.values(PROVIDERS);

export const guessProviderFromKey = (apiKey: string): ProviderId | null => {
  for (const id of PROVIDER_IDS) {
    const hints = PROVIDERS[id].keyPrefixHints;
    if (hints?.some((prefix) => apiKey.startsWith(prefix))) return id;
  }
  return null;
};
