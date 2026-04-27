import { z } from 'zod';
import { providerSchema } from './provider.js';

export const apiKeySchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  provider: providerSchema,
  encryptedKey: z.string(),
  keyHint: z.string().max(8),
  isActive: z.boolean().default(true),
  createdAt: z.string().datetime(),
});

export type ApiKey = z.infer<typeof apiKeySchema>;

export const addApiKeyRequest = z.object({
  provider: providerSchema.optional(),
  apiKey: z.string().min(1),
});

export type AddApiKeyRequest = z.infer<typeof addApiKeyRequest>;

export const apiKeyResponse = apiKeySchema.omit({ encryptedKey: true });

export type ApiKeyResponse = z.infer<typeof apiKeyResponse>;
