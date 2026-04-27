import type { Model } from '../models/types.js';
import type { Provider } from '../providers/index.js';

export type Pricing = { readonly inputPerToken: number; readonly outputPerToken: number };

export type ModelBinding = {
  readonly model: Model;
  readonly provider: Provider;
  readonly vendorModelName: string;
  readonly vendorModelAliases?: readonly string[];
  readonly pricing: Pricing;
};

export const binding = (
  model: ModelBinding['model'],
  provider: ModelBinding['provider'],
  vendorModelName: ModelBinding['vendorModelName'],
  inputPerMillion: number,
  outputPerMillion: number,
  aliases?: ModelBinding['vendorModelAliases'],
): ModelBinding => ({
  model,
  provider,
  vendorModelName,
  ...(aliases ? { vendorModelAliases: aliases } : {}),
  pricing: {
    inputPerToken: inputPerMillion / 1_000_000,
    outputPerToken: outputPerMillion / 1_000_000,
  },
});
