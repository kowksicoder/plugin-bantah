import type * as ElizaCore from "@elizaos/core";
import { type BantahPluginConfig, type BantahSkillAction } from "./types.js";
type IAgentRuntime = ElizaCore.IAgentRuntime;
type ResolvedBantahPluginConfig = {
    endpointUrl?: string;
    apiKey?: string;
    enabledActions?: readonly BantahSkillAction[];
    timeoutMs: number;
    skillVersion: string;
    headers?: Record<string, string>;
};
export declare function resolveBantahPluginConfig(runtime: IAgentRuntime, baseConfig: BantahPluginConfig): ResolvedBantahPluginConfig;
export declare function isBantahActionEnabled(config: Pick<ResolvedBantahPluginConfig, "enabledActions">, action: BantahSkillAction): boolean;
export {};
