import { createApp } from 'vue'
// @ts-ignore - Cannot find module '@/App.vue' or its corresponding type declarations. - can fix this using ts-config
import App from '@/App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from './store'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app')
