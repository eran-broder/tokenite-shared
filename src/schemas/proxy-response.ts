import { z } from 'zod';
import { providerSchema } from './provider.js';
import { errorResponseSchema } from './error.js';

export const proxyUsageSchema = z.object({
  inputTokens: z.number(),
  outputTokens: z.number(),
});

export type ProxyUsage = z.infer<typeof proxyUsageSchema>;

export const proxySuccessSchema = z.object({
  provider: providerSchema,
  model: z.string(),
  usage: proxyUsageSchema.nullable(),
  data: z.unknown(),
});

export type ProxySuccess = z.infer<typeof proxySuccessSchema>;

export const proxyResponseSchema = z.union([proxySuccessSchema, errorResponseSchema]);

export type ProxyResponse = z.infer<typeof proxyResponseSchema>;
