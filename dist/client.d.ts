import { type BantahActionEnvelope, type BantahPluginConfig, type BantahSkillAction, type BantahSkillEnvelope } from "./types.js";
export declare function buildBantahEnvelope(action: BantahSkillAction, payload: Record<string, unknown>, skillVersion?: string): BantahActionEnvelope;
export declare function callBantahSkill(config: Required<Pick<BantahPluginConfig, "endpointUrl" | "timeoutMs" | "skillVersion">> & Pick<BantahPluginConfig, "apiKey" | "headers">, action: BantahSkillAction, payload: Record<string, unknown>): Promise<BantahSkillEnvelope>;
