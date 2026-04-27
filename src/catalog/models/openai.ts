import { defineFamily } from './types.js';
import { TIERS } from '../tiers.js';
import { CAPS } from '../capabilities.js';

export const GPT = defineFamily('GPT-', {
  _5:       [[TIERS.smart, TIERS.reasoning],             [CAPS.vision, CAPS.tools, CAPS.jsonMode, CAPS.thinking]],
  _5_Mini:  [[TIERS.cheap, TIERS.fast, TIERS.reasoning], [CAPS.vision, CAPS.tools, CAPS.jsonMode, CAPS.thinking]],
  _4_1:     [[TIERS.smart],             [CAPS.vision, CAPS.tools, CAPS.jsonMode]],
  _4o:      [[TIERS.smart],             [CAPS.vision, CAPS.tools, CAPS.jsonMode]],
  _4o_Mini: [[TIERS.cheap, TIERS.fast], [CAPS.vision, CAPS.tools, CAPS.jsonMode]],
});

export const OSERIES = defineFamily('', {
  o3:      [[TIERS.reasoning, TIERS.smart], [CAPS.vision, CAPS.tools, CAPS.jsonMode, CAPS.thinking]],
  o4_Mini: [[TIERS.reasoning, TIERS.cheap], [CAPS.vision, CAPS.tools, CAPS.jsonMode, CAPS.thinking]],
});
