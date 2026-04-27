import { CLAUDE } from './anthropic.js';
import { GPT, OSERIES } from './openai.js';
import { GEMINI } from './google.js';
import { GROK } from './grok.js';
import type { Model } from './types.js';
import type { Tier } from '../tiers.js';
import type { Cap } from '../capabilities.js';

export { CLAUDE } from './anthropic.js';
export { GPT, OSERIES } from './openai.js';
export { GEMINI } from './google.js';
export { GROK } from './grok.js';

export type ModelCreator = 'anthropic' | 'openai' | 'google' | 'grok';

export type ModelGroup = {
  readonly creator: ModelCreator;
  readonly displayName: string;
  readonly models: readonly Model[];
};

export const MODEL_GROUPS: readonly ModelGroup[] = [
  { creator: 'anthropic', displayName: 'Anthropic', models: Object.values(CLAUDE) },
  { creator: 'openai',    displayName: 'OpenAI',    models: [...Object.values(GPT), ...Object.values(OSERIES)] },
  { creator: 'google',    displayName: 'Google',    models: Object.values(GEMINI) },
  { creator: 'grok',      displayName: 'xAI Grok',  models: Object.values(GROK) },
];

export const ALL_MODELS: readonly Model[] = MODEL_GROUPS.flatMap((g) => g.models);

export const modelsByTier = (t: Tier): readonly Model[] =>
  ALL_MODELS.filter((m) => m.tiers.includes(t));

export const modelsWithCap = (c: Cap): readonly Model[] =>
  ALL_MODELS.filter((m) => m.capabilities.includes(c));

export { model, defineFamily, humanize } from './types.js';
export type { Model, ModelSpec } from './types.js';
