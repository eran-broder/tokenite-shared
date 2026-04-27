import { binding } from './types.js';
import { PROVIDERS } from '../providers/index.js';
import { CLAUDE } from '../models/anthropic.js';

const { anthropic } = PROVIDERS;

export const ANTHROPIC_BINDINGS = [
  binding(CLAUDE.Opus_4_7,   anthropic, 'claude-opus-4-7',         5,    25),
  binding(CLAUDE.Sonnet_4_6, anthropic, 'claude-sonnet-4-6',       3,    15),
  binding(CLAUDE.Haiku_4_5,  anthropic, 'claude-haiku-4-5',        1,    5,    ['claude-haiku-4-5-20251001']),
  binding(CLAUDE.Haiku_3,    anthropic, 'claude-3-haiku-20240307', 0.25, 1.25),
];
