import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../src/components/main'
import Button from '../src/components/button/demo'
import Cell from '../src/components/cell/demo'
import Icon from '../src/components/icon/demo'
import Image from '../src/components/image/demo'

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
      {
        path: '/icon',
        component: Icon,
      },
      {
        path: '/image',
        component: Image,
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router