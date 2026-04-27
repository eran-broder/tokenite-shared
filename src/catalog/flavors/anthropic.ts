import { z } from 'zod';
import type { FlavorHandler } from './types.js';
import { asRecord, asNumber, asString } from '../helpers.js';

const requestSchema = z.object({ model: z.string() }).passthrough();

export const anthropicFlavor: FlavorHandler = {
  getRequestedModel: ({ parsedBody }) => {
    const parsed = requestSchema.safeParse(parsedBody);
    return parsed.success ? parsed.data.model : null;
  },

  extractUsage: (body, fallbackModel) => {
    const usage = asRecord(body['usage']);
    if (!usage) return null;
    return {
      model: asString(body['model'], fallbackModel),
      inputTokens: asNumber(usage['input_tokens']),
      outputTokens: asNumber(usage['output_tokens']),
    };
  },

  errors: {
    isContentFilterError: (_message, body) => {
      const error = asRecord(body?.['error']);
      return error?.['type'] === 'content_policy_violation';
    },
  },
};
