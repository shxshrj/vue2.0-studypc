<template>
  <div >
    <div class="row mb-5">
      <div class="col-4">
        <ul class="list-group mb-5">
          <li class="nav-link">
            <router-link class="list-group-item list-group-item-action redred" :to="{name:'history'}">历史订单</router-link>
          </li>
          <li class="nav-link">
            <router-link class="list-group-item list-group-item-action" :to="{name:'about/contact'}">联系我们</router-link>
          </li>
          <li class="nav-link">
            <router-link class="list-group-item list-group-item-action" :to="{name:'orderingGuide'}">点餐文档</router-link>
          </li>
          <li class="nav-link">
            <router-link class="list-group-item list-group-item-action" :to="{name:'delivery'}">快递信息</router-link>
          </li>
        </ul>
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
