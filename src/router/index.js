import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Item from '../views/Item.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: Item,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
