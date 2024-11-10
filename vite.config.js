import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.js'],
    css: true,
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],  // This includes all test files in src
  },
})
