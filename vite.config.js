import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // GitHub Pages configuration
  base: '/MuskanWebsite/',

  // Build optimization
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },

    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
  },

  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.webp'],

  css: {
    devSourcemap: true,
  },
})
