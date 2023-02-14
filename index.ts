type SimpleObject = {[x: string]: string | number | boolean} | NodeJS.ProcessEnv;
type Includes<Obj, T extends ReadonlyArray<string>> = {[K in T[number]]: string | number | boolean} & Obj;

export function mandateEnvVariables<Obj extends SimpleObject, T extends ReadonlyArray<string>>(env: Obj, keys: T, abort = true): env is Includes<Obj, T> {
  const missingKeys = checkForMissingKeys(env, keys);
  if (missingKeys.length) {
    console.error(`You are missing the following mandatory environment variables: ${missingKeys.join(', ')}`);
    if (abort) {
      console.error('Aborting the process due to the above message.')
      process.exit();
    }
    console.warn('Core functionality will not be functional, process should be aborted.')
    return false;
  }

  return true;
}

export function suggestEnvVariables<Obj extends SimpleObject, T extends ReadonlyArray<string>>(env: Obj, keys: T): env is Includes<Obj, T> {
  const missingKeys = checkForMissingKeys(env, keys);
  if (missingKeys.length) {
    console.warn(`You are missing the following recommended environment variables: ${missingKeys.join(', ')}. Certain features may be non-functional without them.`);
    return false;
  }

  return true;
}

function checkForMissingKeys<Obj extends SimpleObject, T extends ReadonlyArray<string>>(env: Obj, keys: T): string[] {
  return keys.filter(key => env[key] === undefined);
}
