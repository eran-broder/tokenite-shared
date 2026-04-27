export const safeParseJson = (text: string): Record<string, unknown> | null => {
  try {
    const parsed: unknown = JSON.parse(text);
    if (typeof parsed === 'object' && parsed !== null) return parsed as Record<string, unknown>;
    return null;
  } catch {
    return null;
  }
};
