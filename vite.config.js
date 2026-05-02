import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // <-- Caminho corrigido para a raiz
  plugins: [react()],
  build: {
    outDir: 'docs', // Mantido como docs para bater com a configuração atual do Cloudflare
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false,
  },
})