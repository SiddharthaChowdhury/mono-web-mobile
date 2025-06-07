import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load all env variables from `.env.[mode]` file
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      // This makes VITE_API_DOMAIN available as process.env.VITE_API_DOMAIN
      "process.env.VITE_API_DOMAIN": JSON.stringify(env.VITE_API_DOMAIN),
    },
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
          target: env.VITE_API_DEV_DOMAIN,
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
