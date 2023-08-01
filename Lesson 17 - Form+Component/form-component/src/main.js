import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle)
library.add(faExclamationCircle)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import 'bootstrap/dist/css/bootstrap.min.css'