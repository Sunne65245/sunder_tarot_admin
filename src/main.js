import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap & SCSS
import './assets/views/custom-bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/assets/views/main.scss';

// jQuery
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

const app = createApp(App);
app.use(router);
app.mount('#app');
