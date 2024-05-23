import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/my-portfolio",
  // base:"/AS_Portfolio/",
  build:{
    outDir:"./docs"
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@functions": path.resolve(__dirname, "src/functions"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@images": path.resolve(__dirname, "src/images"),
    },
    extensions: ['.ts', '.tsx', '.js']
  },

  server: {
    port:3000,
    open: true 
  },
})
