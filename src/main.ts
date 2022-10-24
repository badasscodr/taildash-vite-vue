import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import { Icon } from '@iconify/vue'
import Popper from 'vue3-popper'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const head = createHead()

// some global var
app.config.globalProperties.$route = useRoute()
app.config.globalProperties.$router = useRouter()

// some global components
app.component('Icon', Icon)
app.component('Popper', Popper)

// pinia store
const pinia = createPinia()
pinia.use(resetStore)

app.use(pinia)
app.use(router)
app.use(head)

app.mount('#app')
