import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: '/', // Ensure this is correct for your deployment environment
    build: {
      outDir: 'build', // Change this to 'build' instead of 'build/static'
      manifest: true,
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].js`, // Use 'assets' folder for better organization
          chunkFileNames: `assets/chunks/[name].[hash].js`,
          assetFileNames: ({ name }) => {
            if (/\.css$/.test(name ?? '')) {
              return `assets/css/[name].[ext]`; // CSS files in 'assets/css'
            }
            if (/\.(png|jpe?g|gif|svg|webp)$/.test(name ?? '')) {
              return `assets/media/[name].[ext]`; // Images in 'assets/media'
            }
            // Default for other assets
            return 'assets/[name].[ext]';
          },
        },
      },
    },
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/api/1': {
          target: 'https://demo.getdkan.org',
          changeOrigin: true,
        },
      },
    },
  };
});