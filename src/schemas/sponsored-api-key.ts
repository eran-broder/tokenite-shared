import { z } from 'zod';
import { providerSchema } from './provider.js';

export const sponsoredApiKeySchema = z.object({
  id: z.string().uuid(),
  appId: z.string().uuid(),
  provider: providerSchema,
  encryptedKey: z.string(),
  keyHint: z.string().max(8),
  totalBudgetUsd: z.number(),
  totalSpentUsd: z.number().default(0),
  perUserBudgetUsd: z.number().nullable(),
  isActive: z.boolean().default(true),
  createdAt: z.string().datetime(),
});

export type SponsoredApiKey = z.infer<typeof sponsoredApiKeySchema>;

export const addSponsoredApiKeyRequest = z.object({
  provider: providerSchema.optional(),
  apiKey: z.string().min(1),
  totalBudgetUsd: z.number().positive(),
  perUserBudgetUsd: z.number().positive().optional(),
});

export type AddSponsoredApiKeyRequest = z.infer<typeof addSponsoredApiKeyRequest>;

export const sponsoredKeyConsumerSchema = z.object({
  userId: z.string().uuid(),
  email: z.string(),
  spentUsd: z.number(),
  requestCount: z.number().int(),
});

export type SponsoredKeyConsumer = z.infer<typeof sponsoredKeyConsumerSchema>;

export const sponsoredApiKeyResponse = sponsoredApiKeySchema
  .omit({ encryptedKey: true })
  .extend({ consumers: z.array(sponsoredKeyConsumerSchema) });

export type SponsoredApiKeyResponse = z.infer<typeof sponsoredApiKeyResponse>;
