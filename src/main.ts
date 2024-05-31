import { createApp } from 'vue'
import router from './router' // 引入router.ts文件
import store from './store'

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
