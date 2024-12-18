import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import  {VBtn} from 'vuetify/components'
const vuetify = createVuetify({
  components:{
    VBtn
  }
})
createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
