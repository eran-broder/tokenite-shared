import { z } from 'zod';

export const discoverySchema = z.object({
  appUrl: z.string().url(),
  proxyUrl: z.string().url(),
});
export type Discovery = z.infer<typeof discoverySchema>;
