import * as ElizaCore from "@elizaos/core";
import { type BantahPluginConfig } from "./types.js";
type Plugin = ElizaCore.Plugin;
export declare function createBantahPlugin(baseConfig?: BantahPluginConfig): Plugin;
declare const bantahPlugin: ElizaCore.Plugin;
export default bantahPlugin;
export * from "./client.js";
export * from "./environment.js";
export * from "./types.js";
