import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import jquery from 'jquery';

export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/views/_variables.scss";`,
      }
    }
  },
  // define: {
  //   global: {}, 
  //   $: 'window.jQuery', 
  //   jQuery: 'window.jQuery',
  //   'window.jQuery': 'window.jQuery'
  // }
  define: {
    global: {},
    $: jquery,
    jQuery: jquery,
    'window.jQuery': jquery
  }
});

