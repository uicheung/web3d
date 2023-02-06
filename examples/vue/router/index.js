// router/index

import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/home/index.vue");
const About = () => import("../views/about/index.vue");
const Machinery = () => import("../views/machinery/index.vue");
const Room = () => import("../views/room/index.vue");
const routes = [
  { path: "/", name: "/", redirect: "/home" },
  { path: "/home", name: "home", component: Home },
  { path: "/about", name: "about", component: About },

  // 骨骼动画
  { path: "/bone", redirect: "/bone-machinery" },
  { path: "/bone-machinery", name: "boneMachineryaa", component: Machinery },
  { path: "/bone-man", name: "boneMan", component: Machinery },

  // 全景看房
  { path: "/room", name: "room", component: Room },


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
