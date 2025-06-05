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
    },
    mainFields: ["browser", "module", "main"],
  },
  optimizeDeps: {
    include: ["@mono/ui", "react-native-web"],
  },
  server: {
    port: 1337,
    open: true,
  },
  build: {
    // Ensure that shared packages are correctly bundled
    commonjsOptions: {
      include: [/node_modules/, /packages\/ui/],
    },
  },
});
