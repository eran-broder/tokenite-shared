export const proxyErrorCodes = {
  TOKEN_INVALID: { code: 'TOKEN_INVALID', status: 401, message: 'Invalid access token' },
  TOKEN_REVOKED: { code: 'TOKEN_REVOKED', status: 401, message: 'Access token has been revoked' },
  TOKEN_SUSPENDED: { code: 'TOKEN_SUSPENDED', status: 403, message: 'Access has been suspended by the user' },
  TOKEN_EXPIRED: { code: 'TOKEN_EXPIRED', status: 401, message: 'Access token has expired' },
  BUDGET_EXCEEDED: { code: 'BUDGET_EXCEEDED', status: 402, message: 'Budget limit exceeded' },
  POOL_EXHAUSTED: { code: 'POOL_EXHAUSTED', status: 402, message: 'Account pool budget exhausted' },
  PROVIDER_KEY_MISSING: { code: 'PROVIDER_KEY_MISSING', status: 402, message: 'No API key or credits available for required provider' },
  CREDITS_DEPLETED: { code: 'CREDITS_DEPLETED', status: 402, message: 'Insufficient credits' },
  APP_NOT_FOUND: { code: 'APP_NOT_FOUND', status: 404, message: 'Application not found' },
  MODEL_NOT_ALLOWED: { code: 'MODEL_NOT_ALLOWED', status: 403, message: 'Model not in allowed models list' },
  AGENT_SCOPE_MISSING: { code: 'AGENT_SCOPE_MISSING', status: 403, message: 'App does not have the managed-agents scope' },
  SPONSORED_POOL_EXHAUSTED: { code: 'SPONSORED_POOL_EXHAUSTED', status: 402, message: 'Sponsored credits pool is exhausted' },
  SPONSORED_KEY_UNAVAILABLE: { code: 'SPONSORED_KEY_UNAVAILABLE', status: 402, message: 'Sponsored key is no longer active' },
  SPONSORED_PROVIDER_MISMATCH: { code: 'SPONSORED_PROVIDER_MISMATCH', status: 402, message: 'Sponsored key does not cover requested provider' },
} as const;

export const providerErrorCodes = {
  RATE_LIMITED: { code: 'RATE_LIMITED', status: 429, message: 'Rate limited by the LLM provider' },
  CONTEXT_LENGTH_EXCEEDED: { code: 'CONTEXT_LENGTH_EXCEEDED', status: 400, message: 'Request exceeds model context length' },
  INVALID_REQUEST: { code: 'INVALID_REQUEST', status: 400, message: 'Invalid request rejected by the LLM provider' },
  AUTHENTICATION_FAILED: { code: 'AUTHENTICATION_FAILED', status: 401, message: 'LLM provider rejected the API key' },
  PROVIDER_OVERLOADED: { code: 'PROVIDER_OVERLOADED', status: 503, message: 'LLM provider is temporarily overloaded' },
  CONTENT_FILTERED: { code: 'CONTENT_FILTERED', status: 400, message: 'Content blocked by the LLM provider safety filter' },
  PROVIDER_TIMEOUT: { code: 'PROVIDER_TIMEOUT', status: 504, message: 'LLM provider did not respond' },
  PROVIDER_ERROR: { code: 'PROVIDER_ERROR', status: 502, message: 'LLM provider returned an error' },
} as const;

export const apiErrorCodes = {
  VALIDATION: 'VALIDATION',
  FORBIDDEN: 'FORBIDDEN',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND',
  INTERNAL: 'INTERNAL',
  UNKNOWN: 'UNKNOWN',
  INSUFFICIENT_ROLE: 'INSUFFICIENT_ROLE',
  EMAIL_TAKEN: 'EMAIL_TAKEN',
  WRONG_EMAIL: 'WRONG_EMAIL',
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  INVALID_CLIENT: 'INVALID_CLIENT',
  INVALID_CODE: 'INVALID_CODE',
  INVALID_INVITATION: 'INVALID_INVITATION',
  INVITATION_EXPIRED: 'INVITATION_EXPIRED',
  INVITE_PENDING: 'INVITE_PENDING',
  ALREADY_CLAIMED: 'ALREADY_CLAIMED',
  ALREADY_MEMBER: 'ALREADY_MEMBER',
  PAT_NOT_FOUND: 'PAT_NOT_FOUND',
  UNKNOWN_PROVIDER: 'UNKNOWN_PROVIDER',
  CANNOT_DELETE_PERSONAL: 'CANNOT_DELETE_PERSONAL',
  CANNOT_INVITE_TO_PERSONAL: 'CANNOT_INVITE_TO_PERSONAL',
  TEAM_CANNOT_BUILD: 'TEAM_CANNOT_BUILD',
  CANNOT_REMOVE_SELF: 'CANNOT_REMOVE_SELF',
  SOLE_OWNER: 'SOLE_OWNER',
  NO_KEY: 'NO_KEY',
  NOT_ACTIVE: 'NOT_ACTIVE',
  SPONSORED_INELIGIBLE: 'SPONSORED_INELIGIBLE',
  BUDGET_UPDATE_FAILED: 'BUDGET_UPDATE_FAILED',
  SPONSORED_POOL_UPDATE_FAILED: 'SPONSORED_POOL_UPDATE_FAILED',
  ENCRYPTION_FAILED: 'ENCRYPTION_FAILED',
  DECRYPTION_FAILED: 'DECRYPTION_FAILED',
  DB_INSERT_FAILED: 'DB_INSERT_FAILED',
  FETCH_FAILED: 'FETCH_FAILED',
} as const;

export type ProxyErrorCode = keyof typeof proxyErrorCodes;
export type ProviderErrorCode = keyof typeof providerErrorCodes;
export type ApiErrorCode = keyof typeof apiErrorCodes;

export type ErrorCode = ProxyErrorCode | ProviderErrorCode | ApiErrorCode;
