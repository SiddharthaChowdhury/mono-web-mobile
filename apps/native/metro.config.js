const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

const config = getDefaultConfig(projectRoot);

// 1. Force Metro to consider the monorepo root as a project root
config.watchFolders = [workspaceRoot];

// 2. Enable Metro to resolve modules from the monorepo root's node_modules
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

// 3. Ensure Metro can find and bundle files from `packages/`
config.resolver.extraNodeModules = {
  "@mono/ui": path.resolve(workspaceRoot, "packages/ui"),  
};


module.exports = config;
