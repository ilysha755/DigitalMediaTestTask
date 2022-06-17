import Main from '@/views/HomeViev';
import About from '@/views/aboutViev'
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { 
        path:'/',
        component: Main,
        props: true,
    },
    { 
        path:'/about/:id',
        component: About,
        name:'about',
        props: true,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes, 
  })
  export default router;