// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ this is correct for a custom domain
  build: {
    outDir: 'dist'
  }
});