import { createApp } from 'vue'
import 'lib-flexible/flexible'
import './assets/stylus/reset.styl'
import router from'./router/index'
import store from'./store/index'
import App from './App.vue'


const  app = createApp(App)
// 通过use 将 路由插件安装到 app 中
app.use(router)
app.use(store)
app.mount('#app')

// app.config.productionTip = false

// createApp(App).mount('#app')
