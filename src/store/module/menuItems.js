const state = {
  menuItems: {}
}
const getters = {
  getMenuItems: state => state.menuItems
}
const mutations = {
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
  }
}

const actions = {
}
export default {
  state,
  getters,
  mutations,
  actions
}
