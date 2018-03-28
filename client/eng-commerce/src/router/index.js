import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/Shop'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Admin from '@/components/Admin'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.auth)) {
//     if (localStorage.getItem('token')) {
//       next()
//     } else {
//       next({name: 'Login'})
//     }
//   } else {
//     next()
//   }
// })

export default router
