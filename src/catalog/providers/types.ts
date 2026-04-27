import type { FlavorId } from '../flavors/index.js';

export type ProviderAuth =
  | { readonly kind: 'header'; readonly name: string; readonly format?: (key: string) => string }
  | { readonly kind: 'query'; readonly param: string }
  | { readonly kind: 'sigv4'; readonly service: string; readonly defaultRegion: string };

export type RequestShape = {
  readonly path: string;
  readonly body: Readonly<Record<string, unknown>>;
};

export type Provider = {
  readonly __tag: 'provider';
  readonly displayName: string;
  readonly color: string;
  readonly logoUrl: string;
  readonly logoStyle: 'symbol' | 'wordmark';
  readonly flavor: FlavorId;
  readonly baseUrl: string;
  readonly auth: ProviderAuth;
  readonly defaultHeaders?: Readonly<Record<string, string>>;
  readonly keyPrefixHints?: readonly string[];
  readonly adaptRequest?: (
    flavorPath: string,
    flavorBody: Readonly<Record<string, unknown>>,
    vendorModelName: string,
  ) => RequestShape;
};

export const defineProvider = <T extends Provider>(p: Omit<T, '__tag'>): T =>
  ({ __tag: 'provider', ...p }) as T;
