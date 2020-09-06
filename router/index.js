import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../src/components/button/demo'
import Login from '../src/components/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = new VueRouter({
  routes
})

export default router