import { binding } from './types.js';
import { PROVIDERS } from '../providers/index.js';
import { GROK } from '../models/grok.js';

const { grok } = PROVIDERS;

export const GROK_BINDINGS = [
  binding(GROK._4_1_Fast_Reasoning,     grok, 'grok-4-1-fast-reasoning',     0.2, 0.5),
  binding(GROK._4_1_Fast_Non_Reasoning, grok, 'grok-4-1-fast-non-reasoning', 0.2, 0.5),
  binding(GROK._4_20_Reasoning,         grok, 'grok-4.20-0309-reasoning',    2,   6),
  binding(GROK._4_20_Multi_Agent,       grok, 'grok-4.20-multi-agent-0309',  2,   6),
  binding(GROK.Code_Fast_1,             grok, 'grok-code-fast-1',            0.2, 1.5),
  binding(GROK._3,                      grok, 'grok-3',                      3,   15),
  binding(GROK._3_Mini,                 grok, 'grok-3-mini',                 0.3, 0.5),
];
