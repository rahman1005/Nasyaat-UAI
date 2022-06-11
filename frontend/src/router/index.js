import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboardview from '../views/DashboardView.vue'
import inputPostView from '../views/inputPost.vue'
import AllEventsview from '../views/AllEvents.vue'
import AboutView from '../views/AboutView.vue'
import postLembaga from '../views/post-lembaga.vue'
import formput from '../views/from-PutLembaga.vue'
import loginadmin from"../views/login.vue"
import detailEvent from '../views/eventdetail.vue'
import eventuai from '../views/eventUAI.vue'
import eventOrmawa from '../views/eventOrmawa.vue'
import eventUkkm from '../views/eventUkkm.vue'
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
    path:'/eventsuai',
    name: 'eventsuai',
    component:eventuai
  },
  {
    path:'/eventsormawa',
    name: 'eventsormawa',
    component:eventOrmawa
  },
  {
    path:'/eventsukkm',
    name: 'eventsukkm',
    component:eventUkkm
  },
  {
    path:'/about',
    name: 'about',
    component:AboutView
  },
  {
    path:'/detailevent/:id',
    name: 'detailevent',
    component:detailEvent
  },
  {
    path:'/putevent/:id',
    name: 'putevent',
    component:formput
  },
  {
    path:'/login',
    name: 'login-admin',
    component:loginadmin
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
