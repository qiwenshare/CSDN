import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import newArticles from '@/pages/sidenav/newArticles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/nav/newArticles',
      name: 'newArticles',
      component: newArticles
    }
  ]
})
