import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

const backend_url = 'http://localhost:5000';

// https://vitejs.dev/config/
// http://localhost:5173/
export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
      }
  },
  server: {
      host: true,
      proxy: {
          '/disp': {
              target: backend_url,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/disp/, '/display')
          },
          '/outp': {
              target: backend_url,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/outp/, '/output')
          }
      }
  },
})
