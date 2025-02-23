import { createApp } from 'vue';
import App from './App.vue';
import './style.css'; // 确保这行存在
import '@/assets/main.css';
import router from './router';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);
app.use(router);
app.use(Toast);
app.mount('#app');

