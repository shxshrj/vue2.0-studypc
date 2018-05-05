<template>
  <form>
    <h3 class="text-muted my-5">添加新约Pizza</h3>
    <div class="from-group row mb-5">
      <label class="col-1">品种</label>
      <div class="col-11">
        <input type="text" class="form-control" v-model="newPizza.name" />
      </div>
    </div>
    <div class="from-group row">
      <label class="col-1">描述</label>
      <div class="col-11">
        <textarea rows="5" class="form-control" v-model="newPizza.description" ></textarea>
      </div>
    </div>
    <p><strong>选项1</strong></p>
    <div class="from-group row mb-5">
      <label class="col-1">尺寸</label>
      <div class="col-11">
        <input type="number" class="form-control" v-model="newPizza.size1" />
      </div>
    </div>
    <div class="from-group row">
      <label class="col-1">价格</label>
      <div class="col-11">
        <input type="number" class="form-control" v-model="newPizza.price1" />
      </div>
    </div>
    <p><strong>选项2</strong></p>
    <div class="from-group row mb-5">
      <label class="col-1">尺寸</label>
      <div class="col-11">
        <input type="number" class="form-control" v-model="newPizza.size2" />
      </div>
    </div>
    <div class="from-group row">
      <label class="col-1">价格</label>
      <div class="col-11">
        <input type="number" class="form-control" v-model="newPizza.price2" />
      </div>
    </div>
    <div class="from-group row mt-5">
      <button @click="addMenuItem" type="button" class="btn btn-block btn-success">添加</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      newPizza: {}
    }
  },
  methods: {
    addMenuItem: function () {
      let data = {
        'name': this.newPizza.name,
        'description': this.newPizza.description,
        'options': [{
          'size': this.newPizza.size1,
          'price': this.newPizza.price1
        }, {
          'size': this.newPizza.size2,
          'price': this.newPizza.price2
        }]
      }
      /* fetch('https://wd6121334790obzfmc.wilddogio.com/menu.json', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => this.$router.push({name: 'menu'}))
        .catch(err => console.log(err)) */
      // 数据同步到vuex当中
      this.http.post('menu.json', data)
        .then(res => this.$store.commit('pushToMenuItems', data))
    }
  }
}
</script>
