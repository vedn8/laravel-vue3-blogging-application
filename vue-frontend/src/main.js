import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './plugins/axios.js';
import './assets/style.css'

import App from './App.vue'
import router from './router'
import { useAuthStore } from '@/stores/auth.js';

const app = createApp(App)
const pinia = createPinia();
app.use(pinia)

const auth = useAuthStore(pinia);
await auth.getUser();

app.use(router)

app.mount('#app')
