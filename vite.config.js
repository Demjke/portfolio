import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      'image/svg+xml': ['svg'],
    },
  },
});