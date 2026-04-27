const isProduction = () => process.env['NODE_ENV'] === 'production';

export const requireEnv = (name: string, fallback?: string): string => {
  const value = process.env[name];
  if (value) return value;
  if (fallback && !isProduction()) return fallback;
  throw new Error(`Missing required environment variable: ${name}`);
};

export const optionalEnv = (name: string): string | undefined =>
  process.env[name];
