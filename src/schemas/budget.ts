import { z } from 'zod';

export const budgetSchema = z.object({
  limit: z.number().positive(),
  spent: z.number().default(0),
});

export type Budget = z.infer<typeof budgetSchema>;

export const DEBT_TOLERANCE_USD = 0.01;

export const isBudgetAvailable = (budget: Budget): boolean =>
  budget.spent < budget.limit + DEBT_TOLERANCE_USD;

export const remainingBudget = (budget: Budget): number =>
  Math.max(0, budget.limit - budget.spent);
