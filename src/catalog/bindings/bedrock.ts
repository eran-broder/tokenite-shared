import { binding } from './types.js';
import { PROVIDERS } from '../providers/index.js';
import { CLAUDE } from '../models/anthropic.js';

const { bedrock } = PROVIDERS;

export const BEDROCK_BINDINGS = [
  binding(CLAUDE.Opus_4_7,   bedrock, 'us.anthropic.claude-opus-4-7',                  5,    25),
  binding(CLAUDE.Sonnet_4_6, bedrock, 'us.anthropic.claude-sonnet-4-6',                3,    15),
  binding(CLAUDE.Haiku_4_5,  bedrock, 'us.anthropic.claude-haiku-4-5-20251001-v1:0',   1,    5),
];
