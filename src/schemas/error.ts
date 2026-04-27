import { z } from 'zod';

export {
  proxyErrorCodes,
  providerErrorCodes,
  apiErrorCodes,
  type ProxyErrorCode,
  type ProviderErrorCode,
  type ApiErrorCode,
  type ErrorCode,
} from './error-codes.js';

export const errorSourceSchema = z.enum(['proxy', 'provider']);
export type ErrorSource = z.infer<typeof errorSourceSchema>;

export const errorResponseSchema = z.object({
  error: z.object({
    code: z.string(),
    message: z.string(),
    source: errorSourceSchema,
    details: z.record(z.string(), z.unknown()).optional(),
  }),
});

export type ErrorResponse = z.infer<typeof errorResponseSchema>;
