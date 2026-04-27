import type { Tier } from '../tiers.js';
import type { Cap } from '../capabilities.js';

export type Model = {
  readonly __tag: 'model';
  readonly slug: string;
  readonly displayName: string;
  readonly tiers: readonly Tier[];
  readonly capabilities: readonly Cap[];
};

export type ModelSpec = readonly [
  tiers: Model['tiers'],
  capabilities: Model['capabilities'],
];

const slugify = (s: string): string =>
  s.toLowerCase().replace(/\./g, '-').replace(/\s+/g, '-');

export const defineFamily = <K extends string>(
  prefix: string,
  entries: Readonly<Record<K, ModelSpec>>,
): { readonly [P in K]: Model } => {
  const out = {} as { [P in K]: Model };
  for (const key in entries) {
    const [tiers, capabilities] = entries[key]!;
    const displayName = `${prefix}${humanize(key)}`;
    out[key] = {
      __tag: 'model',
      slug: slugify(displayName),
      displayName,
      tiers,
      capabilities,
    };
  }
  return out;
};

export const humanize = (key: string): string => {
  const parts = key.split('_').filter((p) => p.length > 0);
  const out: string[] = [];
  let numBuf: string[] = [];
  const flush = (): void => {
    if (numBuf.length) {
      out.push(numBuf.join('.'));
      numBuf = [];
    }
  };
  for (const p of parts) {
    if (/^\d+$/.test(p)) numBuf.push(p);
    else {
      flush();
      out.push(p);
    }
  }
  flush();
  return out.join(' ');
};

export const model = (
  displayName: Model['displayName'],
  tiers: Model['tiers'],
  capabilities: Model['capabilities'],
): Model => ({
  __tag: 'model',
  slug: slugify(displayName),
  displayName,
  tiers,
  capabilities,
});
