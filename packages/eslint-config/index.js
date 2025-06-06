import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // import as a plugin object
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MONOREPO_ROOT = path.resolve(__dirname, "../../");

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.turbo/**",
      "**/.expo/**",
      "**/web-build/**",
      "**/android/**",
      "**/ios/**",
      "**/build/**",
      "**/coverage/**",
      "**/README.md",
      "**/package.json",
      "**/pnpm-lock.yaml",
    ],
  },
  // Removed pluginJs.configs.recommended and tseslint.configs.recommended to avoid "extends" key
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
        project: [
          "./apps/native/tsconfig.json",
          "./apps/web/tsconfig.app.json",
          "./packages/ui/tsconfig.json",
          "./packages/data/tsconfig.json",
        ],
        tsconfigRootDir: MONOREPO_ROOT,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
      "@typescript-eslint": tseslint, // 🔧 Corrected!
    },
    rules: {
      // Add recommended rules manually
      "no-unused-vars": "warn",
      "no-undef": "error",
      // React recommended
      "react/display-name": "off",
      "react/jsx-key": "warn",
      // React Hooks recommended
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Typescript recommended
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      // Other custom rules
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
