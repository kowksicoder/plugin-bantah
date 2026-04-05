import { type Plugin } from "@elizaos/core";
import { type BantahPluginConfig } from "./types.js";
export declare function createBantahPlugin(baseConfig?: BantahPluginConfig): Plugin;
declare const bantahPlugin: Plugin;
export default bantahPlugin;
export * from "./client.js";
export * from "./environment.js";
export * from "./types.js";
