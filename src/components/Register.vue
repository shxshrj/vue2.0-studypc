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
                 <div class="form-froup">
                    <label for="confirmPassword">确认密码</label>
                    <input type="password" class="form-control" v-model="confirmPassword" />
                 </div>
                 <button type="submit" class="btn btn-block btn-success mt-5">注册</button>
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
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.password === this.confirmPassword) {
        const formData = {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        }
        axios.post('users.json', formData).then(
          res => {
            this.$router.push({name: 'login'})
          }
        )
      } else {
        alert('两次密码不一样')
      }
    }
  }
}
</script>
<style type="text/css">
  .code {
    padding: 2px 3px;
    position: absolute;
    top: 15px;
    right: 4px;
    margin-top: -11px;
    z-index: 999;
    height: 35px;
  }
</style>
