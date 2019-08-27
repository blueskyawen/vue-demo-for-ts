import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Help from './views/Help.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: Help
  }
]

export default new Router({
  routes: routes
})
