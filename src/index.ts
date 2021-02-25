import './css/tailwind.css'
import './css/main.css'
import Vue,{createApp,h} from 'vue'
import App from './components/App.vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDiscord, faTelegramPlane, faGithub, faTwitter, faMediumM, faWeixin } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

config.autoAddCss = false
library.add(faDiscord, faTelegramPlane, faGithub, faTwitter, faMediumM, faWeixin)
const app = createApp({  
	ElementPlus,
	render: () => h(App),	
})
app.component('font-awesome-icon', FontAwesomeIcon).mount('#root')
