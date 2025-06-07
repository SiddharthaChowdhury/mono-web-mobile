import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "react-native": "react-native-web",
        "@mono/ui": path.resolve(__dirname, "../../packages/ui"),
        "@mono/data": path.resolve(__dirname, "../../packages/data"),
      },
      mainFields: ["browser", "module", "main"],
    },
    optimizeDeps: {
      include: ["@tanstack/react-query", "react-native-web"],
    },
    server: {
      port: 1337,
      open: true,
      proxy: {
        "/api": {
          target: env.VITE_API_DEV_DOMAIN, // Use the loaded env variable here
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/api"),
          secure: false,
        },
      },
      watch: {
        ignored: ["!**/node_modules/@mono/ui/**"],
      },
    },
    build: {
      commonjsOptions: {
        include: [/node_modules/, /packages\/ui/],
      },
    },
  };
});
