import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true
  },
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-firebase': [
            'firebase/app',
            'firebase/auth', 
            'firebase/firestore',
            'firebase/analytics'
          ],
          'vendor-ui': [
            '@radix-ui/react-accordion',
            'lucide-react',
            'clsx',
            'tailwind-merge'
          ],
          // Landing page components (lazy loaded)
          'landing-components': [
            './src/components/landing/Header.tsx',
            './src/components/landing/Hero.tsx',
            './src/components/landing/Problem.tsx',
            './src/components/landing/Solution.tsx',
            './src/components/landing/Demo.tsx',
            './src/components/landing/Roadmap.tsx',
            './src/components/landing/WhoFor.tsx',
            './src/components/landing/FAQ.tsx',
            './src/components/landing/CTA.tsx',
            './src/components/landing/Footer.tsx'
          ]
        },
        // Optimize chunk naming
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '')
            : 'chunk'
          return `assets/[name]-[hash].js`
        },
        // Optimize asset naming
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
    // Enable tree shaking
    target: 'esnext'
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'firebase/app',
      'firebase/auth',
      'firebase/firestore'
    ],
    exclude: ['firebase/analytics'] // Analytics can be loaded on demand
  }
})