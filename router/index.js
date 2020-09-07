import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../src/components/main'
import Button from '../src/components/button/demo'
import Cell from '../src/components/cell/demo'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: Main,
    children: [
      {
        path: '/button',
        component: Button,
      },
      {
        path: '/cell',
        component: Cell,
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router