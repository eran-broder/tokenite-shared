import { z } from 'zod';

export const accountRoleSchema = z.enum(['owner', 'member']);
export type AccountRole = z.infer<typeof accountRoleSchema>;

export const accountMemberSchema = z.object({
  accountId: z.string().uuid(),
  userId: z.string().uuid(),
  role: accountRoleSchema,
  monthlyCapUsd: z.number().nullable(),
  joinedAt: z.string().datetime(),
});
export type AccountMember = z.infer<typeof accountMemberSchema>;

const roleRank: Record<AccountRole, number> = {
  member: 0,
  owner: 1,
};

export const hasAtLeastRole = (actual: AccountRole, required: AccountRole): boolean =>
  roleRank[actual] >= roleRank[required];
