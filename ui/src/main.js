/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import {loadFonts} from '@/plugins/webfontloader'
import router from '@/router/index'
import '@/styles/styles.scss'
//import '@/@core/scss/index.scss'
import {createPinia} from 'pinia'
import {createApp} from 'vue'

loadFonts()

// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})
const app = createApp(App)
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.mount('#app')
