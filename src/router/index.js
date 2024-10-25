import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProgram from "@/views/AddProgram.vue";
import programing from "@/views/programing.vue";
import profile from "@/views/profile/profile.vue";
import editProfile from "@/views/profile/editProfile.vue";
import foodTrainProgram from "@/views/profile/foodTrainProgram.vue";
import log from "@/views/log.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/AddProgram',
      name: 'AddProgram',
      component: AddProgram
    },
    {
      path:'/programing',
      name:'Programing',
      component: programing
    },
    {
      path:'/profile',
      name:'Profile',
      component: profile
    },
    {
      path:'/profile/editProfile',
      name:'ProfileEdit',
      component:editProfile
    },
    {
      path:'/profile/foodTrainProgram',
      name:'foodTrainProgram',
      component:foodTrainProgram
    },
    {
      path: '/Log',
      name: 'Log',
      component: log
    }
  ]
})

export default router
