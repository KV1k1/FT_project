import './assets/css/bootstrap.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/icomoon.css'
import './assets/css/nice-select.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/responsive.css'
import './assets/css/style.css'
import 'normalize.css';
import 'jquery';



import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
