import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import FontAwesomeIcon from './fontAwesomeIcons'

createApp(App)
  .use(router)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app')
