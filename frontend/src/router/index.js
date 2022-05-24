import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboardview from '../views/DashboardView.vue'
import inputPostView from '../views/inputPost.vue'
import AllEventsview from '../views/AllEvents.vue'
import AboutView from '../views/AboutView.vue'
import postLembaga from '../views/post-lembaga.vue'
import formput from '../views/from-PutLembaga.vue'
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
    path:'/postlembaga',
    name: 'postlembaga',
    component:postLembaga
  },
  {
    path:'/allevents',
    name: 'allevents',
    component:AllEventsview
  },
  {
    path:'/about',
    name: 'about',
    component:AboutView
  },
  {
    path:'/putevent/:eventId',
    name: 'putevent',
    component:formput
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
