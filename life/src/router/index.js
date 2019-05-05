import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  /** 项目名 */
  mode: 'history',
  base: '/life/',
  /** 项目名 */
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
