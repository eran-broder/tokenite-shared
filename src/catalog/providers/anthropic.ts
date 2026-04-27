import { defineProvider } from './types.js';

export const anthropic = defineProvider({
  displayName: 'Anthropic',
  color: '#d97706',
  logoUrl: '/providers/anthropic.svg',
  logoStyle: 'symbol',
  flavor: 'anthropic',
  baseUrl: 'https://api.anthropic.com',
  auth: { kind: 'header', name: 'x-api-key' },
  defaultHeaders: { 'anthropic-version': '2023-06-01' },
  keyPrefixHints: ['sk-ant-'],
});
