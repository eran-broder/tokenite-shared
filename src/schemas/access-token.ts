import { z } from 'zod';

export const accessTokenSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  appId: z.string().uuid(),
  tokenHash: z.string(),
  budgetLimit: z.number().positive(),
  budgetSpent: z.number().default(0),
  isRevoked: z.boolean().default(false),
  createdAt: z.string().datetime(),
});

export type AccessToken = z.infer<typeof accessTokenSchema>;

export const authorizeAppRequest = z.object({
  appId: z.string().uuid(),
  budgetLimit: z.number().positive(),
});

export type AuthorizeAppRequest = z.infer<typeof authorizeAppRequest>;

export const updateConnectionRequest = z.object({
  budgetLimit: z.number().positive().optional(),
});

export type UpdateConnectionRequest = z.infer<typeof updateConnectionRequest>;

export const connectionResponse = accessTokenSchema.omit({ tokenHash: true });

export type ConnectionResponse = z.infer<typeof connectionResponse>;
