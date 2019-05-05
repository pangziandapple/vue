import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'

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
    }, {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
