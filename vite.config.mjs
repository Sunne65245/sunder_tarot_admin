import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import jquery from 'jquery';

export default defineConfig({
  plugins: [vue()],
  base: '/sunder_tarot_admin/',
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
    $: 'window.jQuery', 
    jQuery: 'window.jQuery',
    'window.jQuery': 'window.jQuery'
  }
});
