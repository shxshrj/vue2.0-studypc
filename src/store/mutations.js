// 更改“state”中的属性的一些状态
export const setMenuItems = (state, data) => {
  state.menuItems = data
}
// 将匹配到的数据在state.menuItems中删除
export const deleteMenuItems = (state, data) => {
  state.menuItems.forEach((item, index) => {
    if (item === data) {
      state.menuItems.splice(index, 1)
    }
  })
}
// 将新添加的Pizza，push到state.menuItems中
export const pushToMenuItems = (state, data) => {
  state.menuItems.push(data)
}
// 更改用户登录的状态
export const userStates = (state, user) => {
  if (user) {
    state.currentUser = user
    state.isLogin = true
  } else {
    state.currentUser = null
    state.isLogin = false
  }
}
