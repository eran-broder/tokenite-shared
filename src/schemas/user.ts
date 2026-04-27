import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  passwordHash: z.string().optional(),
  createdAt: z.string().datetime(),
});

export type User = z.infer<typeof userSchema>;

export const createUserRequest = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(128).optional(),
});

export type CreateUserRequest = z.infer<typeof createUserRequest>;

export const userResponse = userSchema.omit({ passwordHash: true });

export type UserResponse = z.infer<typeof userResponse>;
