export type Tier = { readonly __tag: 'tier' };

export const TIERS = {
  cheap:     {} as Tier,
  fast:      {} as Tier,
  smart:     {} as Tier,
  reasoning: {} as Tier,
} as const;

export type TierId = keyof typeof TIERS;

const TIER_NAME = new Map<Tier, TierId>(
  (Object.entries(TIERS) as [TierId, Tier][]).map(([k, v]) => [v, k]),
);

export const tierName = (t: Tier): TierId => TIER_NAME.get(t)!;
