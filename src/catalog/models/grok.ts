import { defineFamily } from './types.js';
import { TIERS } from '../tiers.js';
import { CAPS } from '../capabilities.js';

export const GROK = defineFamily('Grok ', {
  _4_1_Fast_Reasoning:     [[TIERS.reasoning, TIERS.fast], [CAPS.tools, CAPS.thinking, CAPS.jsonMode]],
  _4_1_Fast_Non_Reasoning: [[TIERS.fast, TIERS.cheap],     [CAPS.tools, CAPS.jsonMode]],
  _4_20_Reasoning:         [[TIERS.smart, TIERS.reasoning],[CAPS.tools, CAPS.thinking, CAPS.jsonMode]],
  _4_20_Multi_Agent:       [[TIERS.smart],                 [CAPS.tools, CAPS.jsonMode]],
  Code_Fast_1:             [[TIERS.cheap, TIERS.fast],     [CAPS.tools, CAPS.jsonMode]],
  _3:                      [[TIERS.smart],                 [CAPS.tools, CAPS.jsonMode]],
  _3_Mini:                 [[TIERS.cheap, TIERS.fast],     [CAPS.tools, CAPS.thinking, CAPS.jsonMode]],
});
