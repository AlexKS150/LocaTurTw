import Vue from 'vue'
import Router from 'vue-router'
import LocalHome from '@/pages/localHome/Home'
import LocalCity from '@/pages/localCity/City'
import LocalDetail from '@/pages/localDetail/Detail'

Vue.use(Router)

export default new Router({

  routes: [{
    path: '/',
    name: 'LocalHome',
    component: LocalHome
  }, {
    path: '/localCity',
    name: 'LocalCity',
    component: LocalCity
  }, {
    path: '/localDetail/:id',
    name: 'LocalDetail',
    component: LocalDetail
  }],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
