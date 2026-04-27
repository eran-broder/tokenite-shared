import { binding } from './types.js';
import { PROVIDERS } from '../providers/index.js';
import { GPT, OSERIES } from '../models/openai.js';

const { openai } = PROVIDERS;

export const OPENAI_BINDINGS = [
  binding(GPT._5,        openai, 'gpt-5',      1.25, 10),
  binding(GPT._5_Mini,   openai, 'gpt-5-mini', 0.25, 2),
  binding(GPT._4_1,      openai, 'gpt-4.1',    2,    8),
  binding(GPT._4o,       openai, 'gpt-4o',     2.5,  10),
  binding(GPT._4o_Mini,  openai, 'gpt-4o-mini', 0.15, 0.6, ['gpt-4o-mini-2024-07-18']),
  binding(OSERIES.o3,      openai, 'o3',       2,    8),
  binding(OSERIES.o4_Mini, openai, 'o4-mini',  1.1,  4.4),
];
