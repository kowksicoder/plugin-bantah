import { BANTAH_SKILL_VERSION, bantahSkillActionValues, } from "./types.js";
function getRuntimeSetting(runtime, key) {
    const runtimeValue = runtime.getSetting(key);
    if (runtimeValue !== undefined && runtimeValue !== null) {
        return runtimeValue;
    }
    const characterSettings = runtime.character?.settings;
    return characterSettings?.[key];
}
function parseNumber(value) {
    if (typeof value === "number" && Number.isFinite(value))
        return value;
    if (typeof value === "string" && value.trim()) {
        const parsed = Number(value);
        if (Number.isFinite(parsed))
            return parsed;
    }
    return undefined;
}
function parseEnabledActions(value) {
    if (Array.isArray(value)) {
        return value
            .map((entry) => String(entry || "").trim())
            .filter((entry) => bantahSkillActionValues.includes(entry));
    }
    if (typeof value === "string" && value.trim()) {
        try {
            return parseEnabledActions(JSON.parse(value));
        }
        catch {
            return value
                .split(",")
                .map((entry) => entry.trim())
                .filter((entry) => bantahSkillActionValues.includes(entry));
        }
    }
    return undefined;
}
export function resolveBantahPluginConfig(runtime, baseConfig) {
    const endpointUrl = String(baseConfig.endpointUrl ??
        getRuntimeSetting(runtime, "BANTAH_ENDPOINT_URL") ??
        "").trim() || undefined;
    const apiKey = String(baseConfig.apiKey ?? getRuntimeSetting(runtime, "BANTAH_API_KEY") ?? "").trim() ||
        undefined;
    const timeoutMs = baseConfig.timeoutMs ??
        parseNumber(getRuntimeSetting(runtime, "BANTAH_TIMEOUT_MS")) ??
        12000;
    const skillVersion = String(baseConfig.skillVersion ??
        getRuntimeSetting(runtime, "BANTAH_SKILL_VERSION") ??
        BANTAH_SKILL_VERSION).trim() || BANTAH_SKILL_VERSION;
    const enabledActions = baseConfig.enabledActions ??
        parseEnabledActions(getRuntimeSetting(runtime, "BANTAH_SKILL_ACTIONS"));
    return {
        endpointUrl,
        apiKey,
        timeoutMs,
        skillVersion,
        enabledActions,
        headers: baseConfig.headers,
    };
}
export function isBantahActionEnabled(config, action) {
    if (!config.enabledActions || config.enabledActions.length === 0) {
        return true;
    }
    return config.enabledActions.includes(action);
}
