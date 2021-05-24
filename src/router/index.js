import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CultureMap from "../views/CultureMap.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/CultureMap",
    name: "CultureMap",
    component : CultureMap,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
