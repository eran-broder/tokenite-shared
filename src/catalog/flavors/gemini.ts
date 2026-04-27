import type { FlavorHandler } from './types.js';
import { asRecord, asNumber } from '../helpers.js';

const MODEL_IN_PATH = /\/models\/([^:/]+)/;

export const geminiFlavor: FlavorHandler = {
  getRequestedModel: ({ path }) => path.match(MODEL_IN_PATH)?.[1] ?? null,

  extractUsage: (body, fallbackModel) => {
    const usage = asRecord(body['usageMetadata']);
    if (!usage) return null;
    return {
      model: fallbackModel,
      inputTokens: asNumber(usage['promptTokenCount']),
      outputTokens: asNumber(usage['candidatesTokenCount']),
    };
  },
};
