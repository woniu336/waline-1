import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: './scripts/thinkjs-mock.js',
  },
});
