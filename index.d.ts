/// <reference types="node" />
type SimpleObject = {
    [x: string]: string | number | boolean;
} | NodeJS.ProcessEnv;
type Includes<Obj, T extends ReadonlyArray<string>> = {
    [K in T[number]]: string | number | boolean;
} & Obj;
export declare function mandateEnvVariables<Obj extends SimpleObject, T extends ReadonlyArray<string>>(env: Obj, keys: T, abort?: boolean): env is Includes<Obj, T>;
export declare function suggestEnvVariables<Obj extends SimpleObject, T extends ReadonlyArray<string>>(env: Obj, keys: T): env is Includes<Obj, T>;
export {};
