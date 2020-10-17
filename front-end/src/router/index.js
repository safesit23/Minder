import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  routes,
});

export default router
