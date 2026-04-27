# @tokenite/shared

Public protocol surface for the [Tokenite](https://www.npmjs.com/package/@tokenite/sdk) SDK and CLI.

This package contains:

- **Zod schemas + types** for the OAuth, app, account, connection, key, budget, usage, and proxy-error surfaces.
- **Provider registry** — supported LLM providers (Anthropic, OpenAI, Google, Grok, AWS Bedrock), their key prefix hints, display names, and brand colors.
- **Model catalog** — known models per provider with pricing (input / output / cache), context window, and capability tiers.
- **Result types** — small `Result<T, E>` helper used by the SDK error envelope.

You normally don't install this directly — it's a transitive dependency of `@tokenite/sdk` and `@tokenite/cli`. Install one of those:

```bash
npm install @tokenite/sdk
# or
npm install -g @tokenite/cli
```

## Direct use

If you want to validate an incoming Tokenite proxy response in your own code, or look up pricing for a model:

```typescript
import {
  proxyResponseSchema,
  isProxyError,
  providerSchema,
  type Provider,
} from '@tokenite/shared';

import { listProviders, tryGetProvider } from '@tokenite/shared/providers';
import { catalog, pricingFor } from '@tokenite/shared/catalog';

const parsed = proxyResponseSchema.parse(unknownInput);
const anthropic = tryGetProvider('anthropic');
const cost = pricingFor('anthropic', 'claude-sonnet-4-6');
```

## License

MIT
