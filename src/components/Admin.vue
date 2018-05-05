<template>
  <div class="row">
    <div class="col-8">
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-4">
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for = "item in getMenuItems" :key = 'item.id'>
            <td>{{item.name}}</td>
            <td><button @click="deleteData(item)" class="btn btn-sm btn-outline-danger">&times;</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza.vue'
export default {
  data () {
    return {
      // getMenuItems: []
    }
  },
  components: {
    'app-new-pizza': NewPizza
  },
  methods: {
    deleteData (item) {
      fetch('https://wd6121334790obzfmc.wilddogio.com/menu/' + item.id + '/.json', {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          this.$store.commit('deleteMenuItems', item)
        })
        .catch(err => console.log(err))
    }
  },
  computed: {
    getMenuItems: {
      // 在vuex中获取数据
      get () {
        // return this.$store.state.menuItems
        // 通过$store中的getters方法在vuex中获取数据
        return this.$store.getters.getMenuItems
      },
      set () {}
    }
  },
  created () {
    // fetch('https://wd6121334790obzfmc.wilddogio.com/menu.json')
    this.http.get('/menu.json')
      .then(res => {
        let menuArray = []
        for (let key in res.data) {
          res.data[key].id = key
          menuArray.push(res.data[key])
        }
        // this.getMenuItems = menuArray
        this.$store.commit('setMenuItems', menuArray)
      })
      .catch(err => console.log(err))
  },
  beforeRouteEnter (to, from, next) {
    // alert('hello')
    next()
    // next(vm => {
    // alert('hello,' + vm.name)
    // })
  },
  beforeRouteLeave (to, from, next) {
    // if (confirm('确定离开吗？')) {
    next()
    // } else {
    // next(false)
    // }
  }
}
</script>
