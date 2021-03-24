import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css/animate.css'
import { faHome, faHands,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGoogle} from '@fortawesome/free-brands-svg-icons'
import router from './assets/js/routes'
// import VueRouter from 'vue-router';

library.add(faHome, faPhone, faHands)
library.add(faFacebook, faTwitter, faGoogle)

// import Home from "./components/Home.vue"
// import About from "./components/About.vue"
// import Contact from "./components/Contact.vue"

// VueRouter.use(VueRouter);
// const router = new VueRouter({
//     routes: [
//         {
//             path: "/Home", 
//             component: Home
//         },
//         {
//             path: "/About", 
//             component: About  
//         },
//         {
//             path: "/Contact", 
//             component: Contact
//         }
//     ]
// })
export const eventBus = createApp(App)

createApp(App).use(router).mount('#app')
