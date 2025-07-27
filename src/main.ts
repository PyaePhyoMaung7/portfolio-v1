import './assets/font.css'
import './assets/main.css'

import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import en from './locales/en.json'
import ja from './locales/ja.json'
import router from './router'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ja,
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
