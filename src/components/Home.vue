<template>
  <div class="row">
    <div id="home" class="col-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza！</h1>
        <h2>这里有你非常喜欢的pizza！</h2>
        <button @click="goToMenu" class="btn btn-success"> let's order</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goToMenu () {
      // 跳转到上一次浏览的页面
      // this.$router.go(-1)
      // 指定跳转的地址
      // this.$router.replace('/about')
      // 指定跳转路由的名字下的地址
      // this.$router.replace({name: 'menu'})
      // 常用的push跳转
      // this.$router.push({name: 'menu'})
      this.$router.push('/about')
    }
  }
}
</script>
<style type="text/css">
  #home{background: url(../assets/logo.png); height: 85vh; padding: 10%;}
  h1,h2{margin: 6%;}
  .background{background: #eeeeee;opacity: 0.8; max-width: 70vm; margin: 0 auto; padding: 20px 0;}
</style>
