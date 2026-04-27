import { anthropicFlavor } from './anthropic.js';
import { openaiFlavor } from './openai.js';
import { geminiFlavor } from './gemini.js';
import type { FlavorHandler } from './types.js';

export const FLAVORS = {
  anthropic: anthropicFlavor,
  openai: openaiFlavor,
  gemini: geminiFlavor,
} as const satisfies Record<string, FlavorHandler>;

export type FlavorId = keyof typeof FLAVORS;

export const getFlavor = (id: FlavorId): FlavorHandler => FLAVORS[id];

export type { FlavorHandler, UsageInfo, RequestedModelExtractor, UsageExtractor, ErrorBody, ErrorHooks } from './types.js';
