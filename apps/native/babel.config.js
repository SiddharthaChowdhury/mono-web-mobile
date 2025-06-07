module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          unstable_transformImportMeta: true, // ✅ This enables import.meta support
        },
      ],
    ],
    plugins: [
      [
        "babel-plugin-dotenv-import",
        {
          moduleName: "@env",
          path: ".env",
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
