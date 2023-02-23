import App from '@/App.vue'
import {loadFonts} from '@/plugins/webfontloader'
import router from '@/router/index'
import '@/styles/styles.scss'
import {createPinia} from 'pinia'
import {createApp} from 'vue'
import vuetify from "@/plugins/vuetify/index";

loadFonts()
const app = createApp(App)
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.mount('#app')
