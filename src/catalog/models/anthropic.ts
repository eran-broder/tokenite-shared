import { defineFamily } from './types.js';
import { TIERS } from '../tiers.js';
import { CAPS } from '../capabilities.js';

export const CLAUDE = defineFamily('Claude ', {
  Opus_4_7:   [[TIERS.smart, TIERS.reasoning], [CAPS.vision, CAPS.tools, CAPS.thinking]],
  Sonnet_4_6: [[TIERS.smart],                  [CAPS.vision, CAPS.tools, CAPS.thinking]],
  Haiku_4_5:  [[TIERS.fast, TIERS.cheap],      [CAPS.vision, CAPS.tools, CAPS.thinking]],
  Haiku_3:    [[TIERS.cheap, TIERS.fast],      [CAPS.vision, CAPS.tools]],
});
