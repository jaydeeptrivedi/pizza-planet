<template>
  <div id="app">
    <div clas="container">
      <pp-header></pp-header>
    </div>
    <div clas="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <router-view name="ordering-guide"></router-view>
        </div>
        <div class="col-md-4 col-sm-12">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-md-4 col-sm-12">
            <router-view name="history"></router-view>
        </div>
      </div>
    </div>
    <div clas="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    ppHeader : Header,
    ppFooter : Footer
  }
}
</script>

<style>
</style>
