import { mandateEnvVariables, suggestEnvVariables } from './index';

process.env.OPTIONAL_FEATURE_FLAG = 'false';

if (mandateEnvVariables(process.env, ['MANDATORY_MISSING'] as const, false)) {
  console.error('SHOULD NEVER RUN');
}

if (suggestEnvVariables(process.env, ['OPTIONAL_FEATURE_FLAG'])) {
  console.log(`We can safely proceed using env.OPTIONAL_FEATURE_FLAG knowing that it exists, and TS will give us intellisense for it`);
}

suggestEnvVariables(process.env, ['OPTIONAL_FEATURE_FLAG_MISSING']);
