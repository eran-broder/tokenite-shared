import { defineProvider } from './types.js';

export const google = defineProvider({
  displayName: 'Gemini',
  color: '#4285f4',
  logoUrl: '/providers/google.svg',
  logoStyle: 'symbol',
  flavor: 'gemini',
  baseUrl: 'https://generativelanguage.googleapis.com',
  auth: { kind: 'query', param: 'key' },
  keyPrefixHints: ['AIza'],
});
