import Vue from 'vue'
import router from './router'
import App from './App.vue'
import '@/assets/styles/css/base.css'
import '@/assets/styles/css/border.css'
import '@/assets/styles/iconfont/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
