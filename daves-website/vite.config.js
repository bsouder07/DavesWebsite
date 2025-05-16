import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // because you're using a custom domain
  build: {
    outDir: 'docs',
  },
})