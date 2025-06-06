const { pathsToModuleNameMapper } = require("ts-jest");
const baseTsConfig = require("../tsconfig/base.json");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/*.test.ts?(x)"],
  moduleNameMapper: pathsToModuleNameMapper(
    baseTsConfig.compilerOptions.paths || {},
    {
      prefix: "<rootDir>/../../",
    }
  ),
};
