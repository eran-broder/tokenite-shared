import { defineProvider } from './types.js';

const adaptToBedrock = (_flavorPath: string, body: Readonly<Record<string, unknown>>, model: string) => {
  const { model: _, ...rest } = body;
  return {
    path: `/model/${encodeURIComponent(model)}/invoke`,
    body: { ...rest, anthropic_version: 'bedrock-2023-05-31' },
  };
};

export const bedrock = defineProvider({
  displayName: 'Bedrock',
  color: '#ff9900',
  logoUrl: '/providers/bedrock.svg',
  logoStyle: 'symbol',
  flavor: 'anthropic',
  baseUrl: 'https://bedrock-runtime.us-east-1.amazonaws.com',
  auth: { kind: 'sigv4', service: 'bedrock', defaultRegion: 'us-east-1' },
  keyPrefixHints: ['AKIA'],
  adaptRequest: adaptToBedrock,
});
