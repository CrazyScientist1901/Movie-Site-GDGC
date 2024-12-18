import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // Ensures Vite looks for index.html in the root directory
  build: {
    outDir: 'dist' // Defines the output directory
  }
});
