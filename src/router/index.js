import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '@/components/login/LoginComponent'
import HomeComponent from '@/components/home/HomeComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginComponent
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeComponent
    }
  ]
})
