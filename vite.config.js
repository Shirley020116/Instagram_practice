import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Instagram_practice/', // 👈 非常重要！
  plugins: [
    react(),
    tailwindcss(),
  ],
})
