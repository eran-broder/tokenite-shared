import { z } from 'zod';
import { accountRoleSchema } from './account-member.js';

export const accountInvitationSchema = z.object({
  id: z.string().uuid(),
  accountId: z.string().uuid(),
  email: z.string().email(),
  role: accountRoleSchema,
  invitedByUserId: z.string().uuid(),
  expiresAt: z.string().datetime(),
  acceptedAt: z.string().datetime().nullable(),
  createdAt: z.string().datetime(),
});
export type AccountInvitation = z.infer<typeof accountInvitationSchema>;

export const createInvitationRequest = z.object({
  email: z.string().email(),
  role: accountRoleSchema.default('member'),
});
export type CreateInvitationRequest = z.infer<typeof createInvitationRequest>;

export const invitationWithClaimUrl = accountInvitationSchema.extend({
  claimUrl: z.string().url(),
});
export type InvitationWithClaimUrl = z.infer<typeof invitationWithClaimUrl>;
