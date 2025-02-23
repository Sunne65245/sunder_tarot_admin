import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import jquery from 'jquery';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      }
    }
  },
  define: {
    global: {},
    $: jquery,
    jQuery: jquery,
    'window.jQuery': jquery
  }
});
