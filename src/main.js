import { createApp } from 'vue';
import router from '@/router/index';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'element-plus/dist/index.css';
import '@/plugins/echarts';
import 'virtual:svg-icons-register';
import { useI18n } from '@/plugins/i18n';
import App from './App.vue';

const store = createPinia();
store.use(piniaPluginPersistedstate);
const app = createApp(App);
useI18n(app);
app.use(router).use(store).mount('#app');
