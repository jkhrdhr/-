import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
// import env from './env'
import './plugins/element.js'
axios.defaults.baseURL = '/api'
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
// 超时时间
axios.defaults.timeout = 8000
// // 响应拦截器
axios.interceptors.response.use(function (response) {
      const res = response.data
      if (res.status === 0) {
            return res.data
      } else if (res.status === 10) {
            window.location.href = '/#/login'
      } else {
            return res.msg
      }
})
Vue.use(VueLazyLoad, {
      loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.use(vueAxios, axios)
Vue.config.productionTip = true

new Vue({
      router,
      store,
      render: h => h(App)
}).$mount('#app')
