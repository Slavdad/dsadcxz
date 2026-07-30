import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dsadcxz/', // имя твоего репозитория
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
});
