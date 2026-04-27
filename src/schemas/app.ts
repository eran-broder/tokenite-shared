import { z } from 'zod';
import { providerSchema } from './provider.js';

export const modelStrategySchema = z.enum(['any', 'tier', 'models']);
export type ModelStrategy = z.infer<typeof modelStrategySchema>;

export const tierSchema = z.enum(['cheap', 'fast', 'smart', 'reasoning']);
export type RequiredTier = z.infer<typeof tierSchema>;

export const appSchema = z.object({
  id: z.string().uuid(),
  builderId: z.string().uuid(),
  name: z.string().min(1).max(100),
  callbackUrl: z.string().url(),
  requiredProviders: z.array(providerSchema),
  preferredProviders: z.array(providerSchema).default([]),
  allowSubstitution: z.boolean().default(false),
  allowedModels: z.array(z.string()).optional(),
  modelStrategy: modelStrategySchema.default('any'),
  requiredTier: tierSchema.optional(),
  allowsManagedAgents: z.boolean().default(false),
  websiteUrl: z.string().url().optional(),
  description: z.string().max(500).optional(),
  iconUrl: z.string().url().optional(),
  appSecret: z.string(),
  createdAt: z.string().datetime(),
});

export type App = z.infer<typeof appSchema>;

export const createAppRequestBase = z.object({
  name: z.string().min(1).max(100),
  callbackUrl: z.string().url(),
  requiredProviders: z.array(providerSchema).min(1),
  preferredProviders: z.array(providerSchema).default([]),
  allowSubstitution: z.boolean().default(false),
  allowedModels: z.array(z.string()).optional(),
  modelStrategy: modelStrategySchema.default('any'),
  requiredTier: tierSchema.optional(),
  allowsManagedAgents: z.boolean().default(false),
  websiteUrl: z.string().url().optional(),
  description: z.string().max(500).optional(),
  iconUrl: z.string().url().optional(),
});

const refineStrategy = <T extends { modelStrategy?: ModelStrategy; requiredTier?: RequiredTier; allowedModels?: readonly string[] }>(s: z.ZodType<T>) =>
  s.refine(
    (v) => v.modelStrategy !== 'tier' || !!v.requiredTier,
    { message: "modelStrategy='tier' requires requiredTier", path: ['requiredTier'] },
  ).refine(
    (v) => v.modelStrategy !== 'models' || (v.allowedModels?.length ?? 0) > 0,
    { message: "modelStrategy='models' requires non-empty allowedModels", path: ['allowedModels'] },
  );

export const createAppRequest = refineStrategy(createAppRequestBase);

export type CreateAppRequest = z.infer<typeof createAppRequest>;

export const updateAppRequest = refineStrategy(createAppRequestBase.partial());

export type UpdateAppRequest = z.infer<typeof updateAppRequest>;

export const appResponse = appSchema.omit({ appSecret: true });

export type AppResponse = z.infer<typeof appResponse>;
