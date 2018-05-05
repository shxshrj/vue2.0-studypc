<template>
 <div >
   <div class="row mt-3">
     <div class="col-12">
        <div class="card">
           <div class="card-body">
              <img class="mx-auto d-block" src="../assets/logo.png"/>
              <form @submit.prevent="onSubmit">
                 <div class="form-froup">
                    <label for="email">邮箱</label>
                    <input type="email" class="form-control" v-model="email" />
                 </div>
                 <div class="form-froup">
                    <label for="password">密码</label>
                    <input type="password" class="form-control" v-model="password" />
                 </div>
                 <button type="submit" class="btn btn-block btn-success mt-5">登录</button>
              </form>
           </div>
        </div>
     </div>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  // 导航守卫，组件内的守卫
  beforeRouteEnter (to, from, next) {
    // alert('hello')
    next(vm => vm.$store.dispatch('setUser', null))
    // next(vm => {
    // alert('hello,' + vm.name)
    // })
  },
  methods: {
    onSubmit () {
      axios.get('users.json').then(res => {
        const data = res.data
        const users = []
        for (let key in data) {
          const user = data[key]
          users.push(user)
        }
        // 实现过滤
        let result = users.filter((user) => {
          return user.email === this.email && user.password === this.password
        })
        if (result != null && result.length > 0) {
          // 应用在$store的actions当中的
          this.$store.dispatch('setUser', result[0].email)
          this.$router.push({name: 'home'})
        } else {
          this.$store.dispatch('setUser', null)
        }
      })
    }
  }
}
</script>
