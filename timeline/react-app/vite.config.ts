import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Central-Notes-Repo/',
  build: {
    outDir: '../pages',
    emptyOutDir: true,
  },
})
