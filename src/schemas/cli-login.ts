import { z } from 'zod';

export const CliLoopbackHost = {
  V4: '127.0.0.1',
  V6: '[::1]',
  Localhost: 'localhost',
} as const;
export type CliLoopbackHost = typeof CliLoopbackHost[keyof typeof CliLoopbackHost];

const cliLoopbackHostSchema = z.enum([CliLoopbackHost.V4, CliLoopbackHost.V6, CliLoopbackHost.Localhost]);

export const cliLoginParamsSchema = z.object({
  port: z.coerce.number().int().min(1).max(65535),
  state: z.string().min(8).max(128),
  host: cliLoopbackHostSchema,
});
export type CliLoginParams = z.infer<typeof cliLoginParamsSchema>;

export const cliLoginMintRequestSchema = cliLoginParamsSchema;
export type CliLoginMintRequest = z.infer<typeof cliLoginMintRequestSchema>;

export const cliLoginMintResponseSchema = z.object({
  redirect_to: z.string().url(),
  code: z.string(),
});
export type CliLoginMintResponse = z.infer<typeof cliLoginMintResponseSchema>;

export const cliLoginExchangeRequestSchema = z.object({
  code: z.string().min(1),
});
export type CliLoginExchangeRequest = z.infer<typeof cliLoginExchangeRequestSchema>;

export const cliLoginExchangeResponseSchema = z.object({
  token: z.string(),
  email: z.string().email(),
});
export type CliLoginExchangeResponse = z.infer<typeof cliLoginExchangeResponseSchema>;
