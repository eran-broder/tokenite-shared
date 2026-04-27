export { type Result, ok, err, type AppError } from './result.js';

export {
  providerSchema,
  type Provider,
} from './schemas/provider.js';

export {
  userSchema,
  createUserRequest,
  userResponse,
  type User,
  type CreateUserRequest,
  type UserResponse,
} from './schemas/user.js';

export {
  accountTypeSchema,
  accountSchema,
  createAccountRequest,
  updateAccountRequest,
  type AccountType,
  type Account,
  type CreateAccountRequest,
  type UpdateAccountRequest,
} from './schemas/account.js';

export {
  accountRoleSchema,
  accountMemberSchema,
  hasAtLeastRole,
  type AccountRole,
  type AccountMember,
} from './schemas/account-member.js';

export {
  accountInvitationSchema,
  createInvitationRequest,
  invitationWithClaimUrl,
  type AccountInvitation,
  type CreateInvitationRequest,
  type InvitationWithClaimUrl,
} from './schemas/account-invitation.js';

export {
  appSchema,
  createAppRequest,
  updateAppRequest,
  appResponse,
  modelStrategySchema,
  tierSchema,
  type App,
  type CreateAppRequest,
  type UpdateAppRequest,
  type AppResponse,
  type ModelStrategy,
  type RequiredTier,
} from './schemas/app.js';

export {
  apiKeySchema,
  addApiKeyRequest,
  apiKeyResponse,
  type ApiKey,
  type AddApiKeyRequest,
  type ApiKeyResponse,
} from './schemas/api-key.js';

export {
  sponsoredApiKeySchema,
  addSponsoredApiKeyRequest,
  sponsoredApiKeyResponse,
  sponsoredKeyConsumerSchema,
  type SponsoredApiKey,
  type AddSponsoredApiKeyRequest,
  type SponsoredApiKeyResponse,
  type SponsoredKeyConsumer,
} from './schemas/sponsored-api-key.js';

export {
  budgetSchema,
  type Budget,
  DEBT_TOLERANCE_USD,
  isBudgetAvailable,
  remainingBudget,
} from './schemas/budget.js';

export {
  accessTokenSchema,
  authorizeAppRequest,
  updateConnectionRequest,
  connectionResponse,
  type AccessToken,
  type AuthorizeAppRequest,
  type UpdateConnectionRequest,
  type ConnectionResponse,
} from './schemas/access-token.js';

export {
  usageLogSchema,
  type UsageLog,
  PLATFORM_FEE_RATE,
  calculatePlatformFee,
  calculateTotalDebit,
} from './schemas/usage.js';

export {
  errorResponseSchema,
  errorSourceSchema,
  proxyErrorCodes,
  providerErrorCodes,
  apiErrorCodes,
  type ErrorResponse,
  type ErrorSource,
  type ProxyErrorCode,
  type ProviderErrorCode,
  type ApiErrorCode,
  type ErrorCode,
} from './schemas/error.js';

export {
  proxyUsageSchema,
  proxySuccessSchema,
  proxyResponseSchema,
  type ProxyUsage,
  type ProxySuccess,
  type ProxyResponse,
} from './schemas/proxy-response.js';

export {
  discoverySchema,
  type Discovery,
} from './schemas/discovery.js';

export {
  CliLoopbackHost,
  cliLoginParamsSchema,
  cliLoginMintRequestSchema,
  cliLoginMintResponseSchema,
  cliLoginExchangeRequestSchema,
  cliLoginExchangeResponseSchema,
  type CliLoginParams,
  type CliLoginMintRequest,
  type CliLoginMintResponse,
  type CliLoginExchangeRequest,
  type CliLoginExchangeResponse,
} from './schemas/cli-login.js';

export { requireEnv, optionalEnv } from './config.js';
export { safeParseJson } from './parse.js';
export { rateLimits, ACCESS_TOKEN_LIFETIME_DAYS, OAUTH_CODE_TTL_SECONDS, TOKEN_CACHE_TTL_SECONDS } from './constants.js';
