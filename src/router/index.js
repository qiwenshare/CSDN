import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import ai from '@/pages/sidenav/ai'
import arch from '@/pages/sidenav/arch'
import avi from '@/pages/sidenav/avi'
import career from '@/pages/sidenav/career'
import cloud from '@/pages/sidenav/cloud'
import blockchain from '@/pages/sidenav/blockchain'
import database from '@/pages/sidenav/database'
import engineering from '@/pages/sidenav/engineering'
import fund from '@/pages/sidenav/fund'
import game from '@/pages/sidenav/game'
import iot from '@/pages/sidenav/iot'
import lang from '@/pages/sidenav/lang'
import mobile from '@/pages/sidenav/mobile'
import newArticles from '@/pages/sidenav/newArticles'
import news from '@/pages/sidenav/news'
import ops from '@/pages/sidenav/ops'
import other from '@/pages/sidenav/other'
import sec from '@/pages/sidenav/sec'
import watchers from '@/pages/sidenav/watchers'
import web from '@/pages/sidenav/web'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉路径中的#
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/index',
      name: 'home',
      component: home
    },
    {
      path: '/nav/ai',
      name: 'ai',
      component: ai
    },
    {
      path: '/nav/arch',
      name: 'arch',
      component: arch
    },
    {
      path: '/nav/avi',
      name: 'avi',
      component: avi
    },
    {
      path: '/nav/career',
      name: 'career',
      component: career
    },
    {
      path: '/nav/cloud',
      name: 'cloud',
      component: cloud
    },
    {
      path: '/nav/blockchain',
      name: 'blockchain',
      component: blockchain
    },
    {
      path: '/nav/database',
      name: 'database',
      component: database
    },
    {
      path: '/nav/engineering',
      name: 'engineering',
      component: engineering
    },
    {
      path: '/nav/fund',
      name: 'fund',
      component: fund
    },
    {
      path: '/nav/game',
      name: 'game',
      component: game
    },
    {
      path: '/nav/iot',
      name: 'iot',
      component: iot
    },
    {
      path: '/nav/lang',
      name: 'lang',
      component: lang
    },
    {
      path: '/nav/mobile',
      name: 'mobile',
      component: mobile
    },
    {
      path: '/nav/newArticles',
      name: 'newArticles',
      component: newArticles
    },
    {
      path: '/nav/news',
      name: 'news',
      component: news
    },
    {
      path: '/nav/ops',
      name: 'ops',
      component: ops
    },
    {
      path: '/nav/other',
      name: 'other',
      component: other
    },
    {
      path: '/nav/sec',
      name: 'sec',
      component: sec
    },
    {
      path: '/nav/watchers',
      name: 'watchers',
      component: watchers
    },
    {
      path: '/nav/web',
      name: 'web',
      component: web
    }
  ]
})
