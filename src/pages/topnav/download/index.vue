<template>
  <div class="downloadWrapper">
      <Header></Header>
      <div class="downloadContent">
        <download-nav></download-nav>
      </div>
      <go-top-icon id="goTop"></go-top-icon>
  </div>
</template>

<script>
import Header from '@/pages/common/header'
import downloadNav from './components/downloadNav'
import goTopIcon from '@/pages/common/goTop'

export default {
  name: 'download',
  components: {
    Header,
    downloadNav,
    goTopIcon
  },
  data () {
    return {

    }
  },
  mounted () {//给window添加一个滚动滚动监听事件
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () { //改变元素#searchBar的top值
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //右侧：回到顶部图标,免费vip图标
      if(scrollTop == 0){
        document.querySelector('#goTop').style.display = 'none';
      }else{
        document.querySelector('#goTop').style.display = 'block';
      }
    },
  },
  destroyed () {//离开该页面需要移除这个监听的事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.downloadWrapper
  position relative
  top:0
  left:0
  background-color #fff
  .downloadContent
    width: 100%;
</style>
