import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'//全局引入ElementUI
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import api from "@/api/http.js"

Vue.config.productionTip = false
Vue.use(ElementUI);//注册ElementUI

//事件总线,用于跨组件传数据
Vue.prototype.$bus = new Vue()
//用于向服务端请求的api
Vue.prototype.$api = api;

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vue
