import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const configOptions = {
    port: 5173,
    plugins: [
        react()
    ],
    css: {
        postcss: "./postcss.config.js"
    }
}

export default defineConfig(configOptions);