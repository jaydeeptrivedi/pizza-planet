import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './route'
import {store} from './store/store.js'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if(to.hash){
      return {selector:to.hash}
    }
  }
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
