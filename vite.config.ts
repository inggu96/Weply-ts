import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  // optimizeDeps: {
  //   exclude: ["@tanstack/react-query-devtools", "react-slick", "slick-carousel"],
  // },
  plugins: [react(), tsconfigPaths(), tailwindcss()],
});
