<template>
  <div >
    <div class="bg-light card text-dark mb-3">
      <div class="card-header">联系我们</div>
      <div class="card-body">
        <h4 card-title>联系我们</h4>
        <p class="card-text">333@qq.com</p>
      </div>
      <div class="list-group mb-5">
        <router-link class=" list-group-item-action" :to="{name:'about/contact/person'}">联系人</router-link>
        <router-link class=" list-group-item-action" :to="{name:'about/contact/phone'}">手机号码</router-link>
      </div>
      <div class="col-8">
        <router-view/>
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
  }
}
</script>
