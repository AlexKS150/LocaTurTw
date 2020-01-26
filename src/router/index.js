import Vue from 'vue'
import Router from 'vue-router'
import LocalHome from '@/pages/localHome/Home'
import LocalCity from '@/pages/localCity/City'
import Detail from '@/pages/detail/Detail'

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
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
