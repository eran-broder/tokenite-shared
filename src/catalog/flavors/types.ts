export type UsageInfo = {
  readonly model: string;
  readonly inputTokens: number;
  readonly outputTokens: number;
};

export type RequestedModelExtractor = (input: {
  readonly path: string;
  readonly parsedBody: unknown;
}) => string | null;

export type UsageExtractor = (
  body: Record<string, unknown>,
  fallbackModel: string,
) => UsageInfo | null;

export type ErrorBody = Record<string, unknown> | null;

export type ErrorHooks = {
  readonly extractMessage?: (body: ErrorBody) => string | undefined;
  readonly isContextLengthError?: (message: string | undefined, body: ErrorBody) => boolean;
  readonly isContentFilterError?: (message: string | undefined, body: ErrorBody) => boolean;
};

export type FlavorHandler = {
  readonly getRequestedModel: RequestedModelExtractor;
  readonly extractUsage: UsageExtractor;
  readonly errors?: ErrorHooks;
};
