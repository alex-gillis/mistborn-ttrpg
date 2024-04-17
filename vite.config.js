import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mistborn-ttrpg/', // Adjust this to match your repository name
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for the production build
    assetsDir: '.', // Assets directory relative to outDir
    sourcemap: false, // Disable sourcemaps for production build
  },
});
