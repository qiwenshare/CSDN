<template>
    <div class="homepageWrapper">
        <Header></Header>
        <div class="contentSidebar">
          <sidebar id="sidebar"></sidebar>
          <div class="contentWrapper">
            <commend-top></commend-top>
            <div class="contentMain">
              <homepage-main></homepage-main>
              <commend-right></commend-right>
            </div>
          </div>
        </div>
        <go-top-icon id="goTop"></go-top-icon>
    </div>
</template>

<script>
import Header from '@/pages/common/header'
import sidebar from '@/pages/common/sidebar'
import commendTop from '@/pages/common/recommend/top'
import commendRight from '@/pages/common/recommend/right'
import homepageMain from './components/main'
import goTopIcon from '@/pages/common/goTop'

$(document).ready(function(){
  var body = document.getElementsByTagName("body")[0];
  body.onscroll = function () {
    var netScrollTop = $(window).scrollTop();
    //回到顶部图标
    if(netScrollTop != 0){
      $("#goTop").css("display",'block');
    }
    if(netScrollTop == 0){
      $("#goTop").css("display",'none');
    }
    //左侧导航栏固定图标
    if(netScrollTop >= 128) {
      $("#sidebar").css("position",'sticky');
      $("#sidebar").css("top",'-70px');
    }
    if(netScrollTop < 128) {
      $("#sidebar").css("position",'relative');
      $("#sidebar").css("top",'0');
    }
  }
});

export default {
  name: 'home',
  components: {
    Header,
    sidebar,
    commendTop,
    commendRight,
    homepageMain,
    goTopIcon
  }
}
</script>

<style lang="stylus" scoped>
.homepageWrapper
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
      .contentMain
        display flex
</style>
