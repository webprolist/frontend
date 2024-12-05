import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import commonjs from "@rollup/plugin-commonjs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), commonjs()]
});
