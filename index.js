"use strict";
exports.__esModule = true;
exports.suggestEnvVariables = exports.mandateEnvVariables = void 0;
function mandateEnvVariables(env, keys, abort) {
    if (abort === void 0) { abort = true; }
    var missingKeys = checkForMissingKeys(env, keys);
    if (missingKeys.length) {
        console.error("You are missing the following mandatory environment variables: ".concat(missingKeys.join(', ')));
        if (abort) {
            console.error('Aborting the process due to the above message.');
            process.exit();
        }
        console.warn('Core functionality will not be functional, process should be aborted.');
        return false;
    }
    return true;
}
exports.mandateEnvVariables = mandateEnvVariables;
function suggestEnvVariables(env, keys) {
    var missingKeys = checkForMissingKeys(env, keys);
    if (missingKeys.length) {
        console.warn("You are missing the following recommended environment variables: ".concat(missingKeys.join(', '), ". Certain features may be non-functional without them."));
        return false;
    }
    return true;
}
exports.suggestEnvVariables = suggestEnvVariables;
function checkForMissingKeys(env, keys) {
    return keys.filter(function (key) { return env[key] === undefined; });
}
