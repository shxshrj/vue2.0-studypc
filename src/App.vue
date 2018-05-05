<template>
  <div id="app" >
    <div class="container">
      <appHeader></appHeader>
      <router-view/>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header'
export default {
  components: {
    appHeader: Header
  }
}
</script>
<style>
@import '../static/css/style.css';
</style>
