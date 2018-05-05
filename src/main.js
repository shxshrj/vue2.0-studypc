// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/store.js'
axios.defaults.baseURL = 'https://wd6121334790obzfmc.wilddogio.com'
// 配置Vue原型(配置axios的全局变量（this.http.get()或者this.http.post()）)
Vue.prototype.http = axios
// router.beforeEach((to, from, next) => {
// if (to.path === '/login' || to.path === '/register') {
//  next()
// } else {
//  alert('还没有登录，请先登录')
//  next('/login')
// }
// })
// 后置钩子
//  router.afterEach((to, from) => {
//    alert('after each')
//  })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
