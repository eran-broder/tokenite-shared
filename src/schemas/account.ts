import { z } from 'zod';

export const accountTypeSchema = z.enum(['personal', 'business']);
export type AccountType = z.infer<typeof accountTypeSchema>;

export const poolResetPeriodSchema = z.enum(['monthly']).nullable();
export type PoolResetPeriod = z.infer<typeof poolResetPeriodSchema>;

export const accountSchema = z.object({
  id: z.string().uuid(),
  type: accountTypeSchema,
  name: z.string().min(1).max(100),
  ownerUserId: z.string().uuid(),
  poolBudgetLimitUsd: z.number().nullable(),
  poolBudgetSpentUsd: z.number().default(0),
  poolResetPeriod: poolResetPeriodSchema,
  poolLastResetAt: z.string().datetime().nullable(),
  deletedAt: z.string().datetime().nullable(),
  createdAt: z.string().datetime(),
});
export type Account = z.infer<typeof accountSchema>;

export const createAccountRequest = z.object({
  type: accountTypeSchema,
  name: z.string().min(1).max(100),
});
export type CreateAccountRequest = z.infer<typeof createAccountRequest>;

export const updateAccountRequest = z.object({
  name: z.string().min(1).max(100).optional(),
  poolBudgetLimitUsd: z.number().nonnegative().nullable().optional(),
  poolResetPeriod: poolResetPeriodSchema.optional(),
});
export type UpdateAccountRequest = z.infer<typeof updateAccountRequest>;
