import { createApp } from 'vue'
import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue'
import {library} from "@fortawesome/fontawesome-svg-core"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import "bootstrap/dist/css/bootstrap.css"
import "animate.css/animate.css"
import {faHome, faHands,faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGoogle} from '@fortawesome/free-brands-svg-icons'
library.add(faHome, faPhone, faHands)
library.add(faFacebook, faTwitter, faGoogle)
// import Router from 'vue-router'


// import  {FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
// Vue.component('font-awesome-icon', FontAwesomeIcon);

export const eventBus = createApp(App)

createApp(App).mount('#app')
