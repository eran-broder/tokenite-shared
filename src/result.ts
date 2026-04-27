import type { ErrorCode } from './schemas/error-codes.js';

export type Result<T, E = AppError> =
  | { readonly ok: true; readonly data: T }
  | { readonly ok: false; readonly error: E };

export type AppError = {
  readonly code: ErrorCode;
  readonly message: string;
  readonly status: number;
  readonly source?: 'proxy' | 'provider';
  readonly details?: Record<string, unknown>;
};

export const ok = <T>(data: T): Result<T, never> => ({
  ok: true,
  data,
});

export const err = <E = AppError>(error: E): Result<never, E> => ({
  ok: false,
  error,
});
