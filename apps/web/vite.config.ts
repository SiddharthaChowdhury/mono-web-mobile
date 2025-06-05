import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Crucial: Alias 'react-native' to 'react-native-web'
      "react-native": "react-native-web",
      "@mono/ui": path.resolve(__dirname, "../../packages/ui"),
      "@mono/data": path.resolve(__dirname, "../../packages/data"),
    },
    mainFields: ["browser", "module", "main"],
  },
  optimizeDeps: {
    include: ["@mono/ui", "react-native-web"],
  },
  server: {
    port: 1337,
    open: true,
    proxy: {
      "/api": {
        target: "https://www.hunqz.com", // Get it from @mono/data
        changeOrigin: true, // Needed for many APIs to correctly resolve the host
        rewrite: (path) => path.replace(/^\/api/, "/api"), // Rewrites /api to /api on the target
        secure: false,
      },
    },
  },
  build: {
    // Ensure that shared packages are correctly bundled
    commonjsOptions: {
      include: [/node_modules/, /packages\/ui/],
    },
  },
});
