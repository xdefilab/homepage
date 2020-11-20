import './css/tailwind.css'
import './css/main.css'
import { createApp, h } from 'vue'
import App from './components/App.vue'

const app = createApp({
  render: () => h(App),
})

app.mount('#root')
