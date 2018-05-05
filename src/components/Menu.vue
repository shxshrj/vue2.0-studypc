<template>
  <div class="row">
    <div class="col-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for = "item in getMenuItems" :key = 'item.name'>
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for = "option in item.options" :key = 'option.price'>
            <td>{{option.size}}寸</td>
            <td>{{option.price}}RMB</td>
            <td><button @click="addToBasket(item, option)" class="btn btn-sm btn-outline-success">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-4">
      <div v-if = "baskets.length < 1">{{basketText}}</div>
      <div v-else>
      <table class="table" >
        <thead class="thead-default">
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for = "(item, index) in baskets" :key = "index">
            <td>
              <button class="btn btn-sm" @click="sub(item)">-</button>
              <span>{{item.quantity}}</span>
              <button @click="add(item)" class="btn btn-sm">+</button>
            </td>
            <td>{{item.name}}{{item.size}}寸</td>
            <td>{{item.price * item.quantity}}</td>
          </tr>
        </tbody>
      </table>
      <p>总价：{{totel}}RMB</p>
     <button class="btn btn-success btn-block">提交</button>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      baskets: [],
      basketText: '购物车没有任何商品'
      // getMenuItems: []
    }
  },
  computed: {
    getMenuItems () {
      // 在vuex中获取数据
      // return this.$store.state.menuItems
      // 通过$store中的getters方法在vuex中获取数据
      return this.$store.getters.getMenuItems
    },
    totel () {
      let totalCost = 0
      for (let index in this.baskets) {
        let individualItem = this.baskets[index]
        totalCost += individualItem.quantity * individualItem.price
      }
      return totalCost
    }
  },
  created () {
    /* fetch('https://wd6121334790obzfmc.wilddogio.com/menu.json')
      .then(res => { return res.json() })
      .then(data => {
        let menuArray = []
        for (let key in data) {
          data[key].id = key
          menuArray.push(data[key])
        }
        this.getMenuItems = menuArray
      })
      .catch(err => console.log(err)) */
    this.fetchData()
  },
  methods: {
    addToBasket (item, option) {
      let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      }
      if (this.baskets.length > 0) {
        let retult = this.baskets.filter((baskett) => {
          return baskett.name === item.name && baskett.size === option.size
        })
        if (retult != null && retult.length > 0) {
          retult[0].quantity++
        } else {
          this.baskets.push(basket)
        }
      } else {
        this.baskets.push(basket)
      }
    },
    add (item) {
      item.quantity++
    },
    fetchData () {
      // 将请求下来的数据存储到vuex中
      console.log(3333)
      this.http.get('menu.json')
        .then(res => this.$store.commit('setMenuItems', res.data))
    },
    sub (item) {
      item.quantity--
      if (item.quantity <= 0) {
        this.remomveFromBasket(item)
      }
    },
    remomveFromBasket (item) {
      this.baskets.splice(this.baskets.indexOf(item), 1)
    }
  }
}
</script>
