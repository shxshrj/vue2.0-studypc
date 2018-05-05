import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import loginStates from './module/loginStates'
import menuItems from './module/menuItems'
/* import * as actions from './actions.js'
import * as getters from './getters.js'
import * as mutations from './mutations.js' */
Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    menuItems,
    loginStates,
    user
  }
  /* state: {
    // 承载属性，接收数据进行存储
    menuItems: {},
    currentUser: null,
    isLogin: false
  },
  getters: {
    // 对应的一些方法，用来获取“state”中的属性的状态
    getMenuItems: state => state.menuItems,
    currentUser: state => state.currentUser,
    isLogin: state => state.isLogin
  },
  mutations: {
    // 更改“state”中的属性的一些状态
    setMenuItems (state, data) {
      state.menuItems = data
    },
    // 将匹配到的数据在state.menuItems中删除
    deleteMenuItems (state, data) {
      state.menuItems.forEach((item, index) => {
        if (item === data) {
          state.menuItems.splice(index, 1)
        }
      })
    },
    // 将新添加的Pizza，push到state.menuItems中
    pushToMenuItems (state, data) {
      state.menuItems.push(data)
    },
    // 更改用户登录的状态
    userStates (state, user) {
      if (user) {
        state.currentUser = user
        state.isLogin = true
      } else {
        state.currentUser = null
        state.isLogin = false
      }
    }
  },
  actions: {
    // 不直接操作，应用mutations
    setUser ({commit}, user) {
      commit('userStates', user)
    }
  } */
})
