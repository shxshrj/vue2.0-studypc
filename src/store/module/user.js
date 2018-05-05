const state = {
  currentUser: null
}
const getters = {
  currentUser: state => state.currentUser
}
const mutations = {
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
}

const actions = {
  // 不直接操作，应用mutations
  setUser ({commit}, user) {
    commit('userStates', user)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
