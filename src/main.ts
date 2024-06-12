import { createApp } from 'vue'
import axios from 'axios'
import router from './router' // 引入router.ts文件
import store from './store'

import App from './App.vue'
axios.defaults.baseURL = 'http://apis.imooc.com/api/'
axios.interceptors.request.use(config => {
  config.params = { ...config.params, icode: 'C6A6C4086133360B' }
  return config
})
axios.get('/columns').then(resp => {
  console.log(resp.data)
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
