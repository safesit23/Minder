import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import WaitingRoom from '../views/WaitingRoom.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
<<<<<<< HEAD
=======
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/waiting',
    name: 'Waiting',
    component: WaitingRoom
>>>>>>> 8268c945a8479ac057bd8594a920e61399644be5
  }
]

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  routes,
});

export default router
