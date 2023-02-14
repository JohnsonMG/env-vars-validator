# env-vars-validator
Tiny TypeScript library to check for variables in your process env

## Usage
The library has 2 exported functions: mandateEnvVariables and suggestEnvVariables.

They are both [TypeScript type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) which when returning true, indicate that the passed in keys are present on the passed in object.



```
import { mandateEnvVariables, suggestEnvVariables } from 'env-vars-validator';

if (!mandateEnvVariables(env, ['MANDATORY_VARIABLE'] as const)) {
  return;
}

// After our guard we know that MANDATORY_VARIABLE exsists on env, and ts intellisense will indicates as such
// We can use it safely without constantly telling ts that it's safe

suggestEnvVariables(env, ['OPTIONAL_FEATURE_FLAG_MISSING']);
// Won't quit the process, but will log to the console warning of the missing variables
```
