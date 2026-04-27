import { defineFamily } from './types.js';
import { TIERS } from '../tiers.js';
import { CAPS } from '../capabilities.js';

export const GEMINI = defineFamily('Gemini ', {
  _3_1_Pro:         [[TIERS.smart, TIERS.reasoning], [CAPS.vision, CAPS.tools, CAPS.thinking, CAPS.jsonMode]],
  _3_Flash:         [[TIERS.fast],                   [CAPS.vision, CAPS.tools, CAPS.thinking, CAPS.jsonMode]],
  _2_5_Pro:         [[TIERS.smart, TIERS.reasoning], [CAPS.vision, CAPS.tools, CAPS.thinking, CAPS.jsonMode]],
  _2_5_Flash:       [[TIERS.fast, TIERS.cheap],      [CAPS.vision, CAPS.tools, CAPS.thinking, CAPS.jsonMode]],
  _2_5_Flash_Lite:  [[TIERS.cheap, TIERS.fast],      [CAPS.vision, CAPS.tools, CAPS.jsonMode]],
});
