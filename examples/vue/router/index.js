// router/index

import { createRouter, createWebHistory } from 'vue-router'

const Home = ()=> import("../views/home/index.vue")
const About = ()=> import('../views/about/index.vue')
const Machinery = ()=> import('../views/machinery/index.vue')
const routes= [ 
    {    path: '/',    name: '/',  redirect: '/home' , }, 
    {    path: '/home',    name: 'home',    component: Home,  }, 
    {    path: '/about',    name: 'about',    component: About  },
    {    path: '/machinery',    name: 'machinery',    component: Machinery  },
]
const router = createRouter({  
    history: createWebHistory(),  
    routes
})

export default router

