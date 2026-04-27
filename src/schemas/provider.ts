import { z } from 'zod';
import { PROVIDER_IDS, type ProviderId } from '../catalog/providers/index.js';

export const providerSchema = z.enum(PROVIDER_IDS);

export type Provider = ProviderId;
