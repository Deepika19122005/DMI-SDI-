// vite.config.js

// Just setting up Vite with React support
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Exporting my config setup
export default defineConfig({
  plugins: [react()], // Adding React so JSX and Fast Refresh work

  // Optional: setting a port for local development (default is 5173, but added it just in case)
  server: {
    port: 5173,
  },
})
