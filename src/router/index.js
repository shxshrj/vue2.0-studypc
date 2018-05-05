import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Menu from '@/components/Menu'
import Register from '@/components/Register'
import About from '@/components/about/About'
// 二级路由
import Contact from '@/components/about/Contact'
import History from '@/components/about/History'
import OrderingGuide from '@/components/about/OrderingGuide'
import Delivery from '@/components/about/Delivery'
// 三级路由
import Phone from '@/components/about/contact/Phone'
import Person from '@/components/about/contact/Person'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/home',
      name: 'home',
      components: {
        default: Home,
        'orderingGuide': OrderingGuide,
        'delivery': Delivery,
        'history': History
      }
    },
    {path: '/admin',
      name: 'admin',
      component: Admin
      // beforeEnter: (to, from, next) => {
      // 路由独享的守卫
      // alert('非登录状态，不能访问词页面')
      // next(false)
    // }
    },
    {path: '/login', name: 'login', component: Login},
    {path: '/menu', name: 'menu', component: Menu},
    {path: '/register', name: 'register', component: Register},
    {path: '/about',
      name: 'about',
      component: About,
      redirect: '/about/contact',
      children: [
        {path: '/about/contact',
          name: 'about/contact',
          component: Contact,
          redirect: '/about/contact/person',
          children: [
            {path: '/about/contact/phone', name: 'about/contact/phone', component: Phone},
            {path: '/about/contact/person', name: 'about/contact/person', component: Person}
          ]
        },
        {path: '/about/history', name: 'history', component: History},
        {path: '/about/orderingGuide', name: 'orderingGuide', component: OrderingGuide},
        {path: '/delivery', name: 'delivery', component: Delivery}
      ]},
    {path: '*', redirect: '/home'}
  ],
  scrollBehavior (to, from, savedPosition) {
    // return {x: 0, y: 100}
    // return {selector: '.btn'}
  }
})
