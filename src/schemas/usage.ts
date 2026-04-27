import { z } from 'zod';
import { providerSchema } from './provider.js';

export const usageLogSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  appId: z.string().uuid(),
  accessTokenId: z.string().uuid(),
  provider: providerSchema,
  model: z.string(),
  inputTokens: z.number().int().nonnegative(),
  outputTokens: z.number().int().nonnegative(),
  costUsd: z.number().nonnegative(),
  platformFeeUsd: z.number().nonnegative(),
  createdAt: z.string().datetime(),
});

export type UsageLog = z.infer<typeof usageLogSchema>;

export const PLATFORM_FEE_RATE = 0.05;

export const calculatePlatformFee = (costUsd: number): number =>
  Math.round(costUsd * PLATFORM_FEE_RATE * 1_000_000) / 1_000_000;

export const calculateTotalDebit = (costUsd: number): number =>
  costUsd + calculatePlatformFee(costUsd);
