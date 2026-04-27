import { defineProvider } from './types.js';

export const openai = defineProvider({
  displayName: 'OpenAI',
  color: '#10a37f',
  logoUrl: '/providers/openai.svg',
  logoStyle: 'symbol',
  flavor: 'openai',
  baseUrl: 'https://api.openai.com',
  auth: { kind: 'header', name: 'authorization', format: (key) => `Bearer ${key}` },
  keyPrefixHints: ['sk-proj-', 'sk-'],
});
