import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '@/components/login/LoginComponent'
import HomeComponent from '@/components/home/HomeComponent'
import LayoutAuth from '@/components/LayoutAuth'
import Layout from '@/components/Layout'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginComponent     
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '*', 
      redirect: { name: 'Login' }
    }
  ]
})
