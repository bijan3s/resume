/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Support GitHub Pages repository sub-paths (e.g. /portfolio/)
// Determine base path for GitHub Pages (repo name) when not explicitly set
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const basePath = process.env.VITE_BASE_PATH || (repoName ? `/${repoName}/` : './');

export default defineConfig({
  plugins: [react()],
  base: basePath,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/unit/setup.ts'],
    include: ['tests/unit/**/*.test.{ts,tsx}'],
    css: false,
  },
});
