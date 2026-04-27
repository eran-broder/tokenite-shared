import { binding } from './types.js';
import { PROVIDERS } from '../providers/index.js';
import { GEMINI } from '../models/google.js';

const { google } = PROVIDERS;

export const GOOGLE_BINDINGS = [
  binding(GEMINI._3_1_Pro,        google, 'gemini-3.1-pro-preview', 2,    12),
  binding(GEMINI._3_Flash,        google, 'gemini-3-flash-preview', 0.3,  2.5),
  binding(GEMINI._2_5_Pro,        google, 'gemini-2.5-pro',         1.25, 10),
  binding(GEMINI._2_5_Flash,      google, 'gemini-2.5-flash',       0.3,  2.5),
  binding(GEMINI._2_5_Flash_Lite, google, 'gemini-2.5-flash-lite',  0.1,  0.4),
];
