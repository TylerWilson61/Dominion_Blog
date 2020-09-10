import Vue from 'vue'
import App from './App.vue'
import VueCookie from 'vue-cookies'
import VueRouter from 'vue-router'
import Routes from './routes'
Vue.config.productionTip = false

//cookie config
Vue.use(VueCookie);
Vue.$cookies.config('1d')


//router config
Vue.use(VueRouter);
const routes = Routes
const router = new VueRouter({
  routes:routes,
  mode:'history'
})



//initialize
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

