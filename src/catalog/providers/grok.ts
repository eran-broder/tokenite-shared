import { defineProvider } from './types.js';

export const grok = defineProvider({
  displayName: 'Grok',
  color: '#000000',
  logoUrl: '/providers/grok.svg',
  logoStyle: 'symbol',
  flavor: 'openai',
  baseUrl: 'https://api.x.ai',
  auth: { kind: 'header', name: 'authorization', format: (key) => `Bearer ${key}` },
  keyPrefixHints: ['xai-'],
});
