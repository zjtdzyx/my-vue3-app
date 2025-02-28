import { createApp } from 'vue'
import './style.scss' // 引入自定义样式
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
