export const rateLimits = {
  login:    { maxRequests: 5,  windowSeconds: 900,  keyPrefix: 'login' },
  register: { maxRequests: 3,  windowSeconds: 3600, keyPrefix: 'register' },
  token:    { maxRequests: 10, windowSeconds: 3600, keyPrefix: 'token' },
  keys:     { maxRequests: 20, windowSeconds: 3600, keyPrefix: 'keys' },
  apps:     { maxRequests: 10, windowSeconds: 3600, keyPrefix: 'apps' },
} as const;

export const ACCESS_TOKEN_LIFETIME_DAYS = 30;
export const OAUTH_CODE_TTL_SECONDS = 300;
export const TOKEN_CACHE_TTL_SECONDS = 300;
