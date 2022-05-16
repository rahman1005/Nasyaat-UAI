import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboardview from '../views/DashboardView.vue'
import inputPostView from '../views/inputPost.vue'
import AllEventsview from '../views/AllEvents.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/dashboard',
    name: 'dashboard',
    component:Dashboardview
  },
  {
    path:'/inputpost',
    name: 'inputpost',
    component:inputPostView
  },
  {
    path:'/allevents',
    name: 'allevents',
    component:AllEventsview
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
