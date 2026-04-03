import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/projeto-camila-barcelos/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
})
