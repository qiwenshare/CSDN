<template>
  <div class="blogWrapper">
      <Header></Header>
      <div class="contentSidebar">
        <sidebar id="sidebar"></sidebar>
        <div class="contentWrapper">
          <recommend-top :list="recommendTopList"></recommend-top>
          <div class="contentMain">
            <div class="mainAdv">
              <main-adv></main-adv>
              <new-info></new-info>
              <homepage-main></homepage-main>
            </div>
            <recommend-right id="recommendRight" :fromLink="fromLink"></recommend-right>
          </div>
        </div>
      </div>
      <go-top-icon id="goTop"></go-top-icon>
      <free-vip-icon id="freeVip"></free-vip-icon>
  </div>
</template>

<script>
import Header from '@/pages/common/header'
import sidebar from '@/pages/common/sidebar'
import recommendTop from '@/pages/common/recommend/top'
import recommendRight from '@/pages/common/recommend/right'
import mainAdv from './components/advertisement'
import newInfo from './components/newInfo'
import homepageMain from './components/main'
import goTopIcon from '@/pages/common/goTop'
import freeVipIcon from '@/pages/common/freeVIP'

export default {
  name: 'blog',
  components: {
    Header,
    sidebar,
    recommendTop,
    recommendRight,
    mainAdv,
    newInfo,
    homepageMain,
    goTopIcon,
    freeVipIcon,
  },
  data () {
    return {
      recommendTopList:[
        { name:'img1',
          imgUrl:require("@/assets/img/topnav/blog/topAdv/adv1.jpg")
        },
        { name:'img2',
          imgUrl:require("@/assets/img/topnav/blog/topAdv/adv2.png")
        }
      ],
      fromLink:'blog'
    }
  },
  mounted () {//给window添加一个滚动滚动监听事件
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () { //改变元素#searchBar的top值
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var offsetTop = document.querySelector('#recommendRight').offsetTop;
      //右侧：回到顶部图标,免费vip图标
      if(scrollTop == 0){
        document.querySelector('#goTop').style.display = 'none';
        document.querySelector('#freeVip').style.top = '500px';
      }else{
        document.querySelector('#goTop').style.display = 'block';
        document.querySelector('#freeVip').style.top = '430px';
      }
      //左侧：侧边导航栏
      if(scrollTop <= 128){
        offsetTop = 50-Number(scrollTop);
        document.querySelector('#sidebar').style.top = offsetTop+'px';
      }else{
        document.querySelector('#sidebar').style.top = '-128px';
      }
      //右侧：推荐信息模块
      if(scrollTop <= 2845){
        offsetTop = 148-Number(scrollTop);
        document.querySelector('#recommendRight').style.top = offsetTop+'px';
      }else{
        document.querySelector('#recommendRight').style.top = '-2697px';
      }
    },
  },
  destroyed () {//离开该页面需要移除这个监听的事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.blogWrapper
  position relative
  top:0
  left:0
  .contentSidebar
    width: 1184px;
    padding-left: 22px;
    padding-right: 22px;
    padding-top: 10px;
    margin:0 auto
    display flex
    position relative
    top:0
    right:0
    .contentWrapper
      width:1074px
      position relative
      left:110px
      .contentMain
        display flex
        .mainAdv
          width:760px
          margin-right 14px
        #recommendRight
          top:148px;
</style>
