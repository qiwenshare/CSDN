import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import ai from '@/pages/sidenav/ai'
import arch from '@/pages/sidenav/arch'
import avi from '@/pages/sidenav/avi'
import career from '@/pages/sidenav/career'
import cloud from '@/pages/sidenav/cloud'
import blockchain from '@/pages/sidenav/blockchain/index'
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
import blockchainActivity from '@/pages/sidenav/blockchain/activity'
import blockchainBbs from '@/pages/sidenav/blockchain/bbs'
import blockchainBlog from '@/pages/sidenav/blockchain/blog'
import blockchainDownload from '@/pages/sidenav/blockchain/download'
import blockchainEdu from '@/pages/sidenav/blockchain/edu'
import blockchainGitchat from '@/pages/sidenav/blockchain/gitchat'
import blockchainTheme from '@/pages/sidenav/blockchain/theme'
import blog from '@/pages/topnav/blog/index'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉路径中的#
  routes: [
    {
      path: '/',
      redirect: '/index' // 路由重定向
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
      path: '/nav/blockchain/index',
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
    },
    {
      path: '/nav/blockchain/activity',
      name: 'blockchainActivity',
      component: blockchainActivity
    },
    {
      path: '/nav/blockchain/bbs',
      name: 'blockchainBbs',
      component: blockchainBbs
    },
    {
      path: '/nav/blockchain/blog',
      name: 'blockchainBlog',
      component: blockchainBlog
    },
    {
      path: '/nav/blockchain/download',
      name: 'blockchainDownload',
      component: blockchainDownload
    },
    {
      path: '/nav/blockchain/edu',
      name: 'blockchainEdu',
      component: blockchainEdu
    },
    {
      path: '/nav/blockchain/gitchat',
      name: 'blockchainGitchat',
      component: blockchainGitchat
    },
    {
      path: '/nav/blockchain/theme',
      name: 'blockchainTheme',
      component: blockchainTheme
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    }
  ]
})
