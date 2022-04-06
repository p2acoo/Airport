import { createRouter, createWebHistory } from 'vue-router'
import MyDepart from '../components/Departure.vue'
import MyArrive from '../components/Arrival.vue'
import MyHome from '../components/Home.vue'
const routes = [
  {
    
    path: '/departure/:airport', 
    name: 'MyDepart',
    component: MyDepart
  },
  {
    path: '/',
    name: 'MyHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MyHome
  },
  {
    path: '/arrival/:airport',
    name: 'Arrival',
    component: MyArrive
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
