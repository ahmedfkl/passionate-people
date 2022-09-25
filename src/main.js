/* eslint-disable no-undef */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/css/main-style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')

/* eslint-disable eol-last */