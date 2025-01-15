import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Это важно для Docker, только в development
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://auction-platform-nginx', //Только внутри контейнера, запуск вне контейнера http://localhost:80
        changeOrigin: true
      }
    },
    watch: {
      usePolling: true // Может понадобиться для работы hot reload в Docker
    }
  }
})