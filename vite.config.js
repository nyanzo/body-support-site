import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/body-support-site/', // ここを GitHub のリポジトリ名と同じにする
})
