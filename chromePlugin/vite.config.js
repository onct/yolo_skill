import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/chrome-plugin": {
        target: "https://staging-crm-api.atkinsinsights/",
        changeOrigin: true,
      },
    },
  },
})
