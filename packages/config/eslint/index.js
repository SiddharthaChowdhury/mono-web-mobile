// packages/config/eslint/index.js
module.exports = {
  root: false, // so subprojects can extend it
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier", // optional, for Prettier integration
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // General recommended rules
    "react/react-in-jsx-scope": "off", // for React 17+
    // React Hooks dependencies
    "react-hooks/exhaustive-deps": "warn",
  },
};
