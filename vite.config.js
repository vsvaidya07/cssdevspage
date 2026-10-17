import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps asset paths relative, so the built site also works
// when hosted from a GitHub Pages sub-path (username.github.io/repo-name/).
export default defineConfig({
  plugins: [react()],
  base: './',
});
