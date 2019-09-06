import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLib from 'vue-lib-sh'

Vue.use(vueLib)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
