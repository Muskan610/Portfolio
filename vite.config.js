import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-transform-react-remove-prop-types', { mode: 'remove', removeImport: true }]
        ]
      }
    })
  ],

  // GitHub Pages configuration
  base: '/Portfolio/',

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
