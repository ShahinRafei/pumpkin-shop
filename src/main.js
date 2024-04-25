import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css';
import '@/assets/Scss/main.scss';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faSearch, faShoppingCart, faUser, faTruck, faCreditCard, faBoxOpen, faShop, faPlus, faMinus, faShield, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faInstagram, faWhatsapp, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faSearch, faShoppingCart, faUser, faTruck, faCreditCard, faBoxOpen, faTelegram, faInstagram, faWhatsapp, faLinkedin, faXTwitter, faShop, faPlus, faMinus, faShield, faXmark)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
