<template>
    <div class="homepageWrapper">
        <Header></Header>
        <div class="contentSidebar">
          <sidebar id="sidebar"></sidebar>
          <div class="contentWrapper">
            <commend-top></commend-top>
            <div class="contentMain">
              <homepage-main></homepage-main>
              <recommend-right id="recommendRight"></recommend-right>
            </div>
          </div>
        </div>
        <go-top-icon id="goTop"></go-top-icon>
        <free-vip-icon id="freeVip"></free-vip-icon>
        <adv-popup></adv-popup>
    </div>
</template>

<script>
import Header from '@/pages/common/header'
import sidebar from '@/pages/common/sidebar'
import commendTop from '@/pages/common/recommend/top'
import recommendRight from '@/pages/common/recommend/right'
import homepageMain from './components/main'
import goTopIcon from '@/pages/common/goTop'
import freeVipIcon from '@/pages/common/freeVIP'
import advPopup from '@/pages/common/advPopup'

$(document).ready(function(){
  var body = document.getElementsByTagName("body")[0];
  body.onscroll = function () {
    var netScrollTop = $(window).scrollTop();
    //回到顶部图标
    if(netScrollTop != 0){
      $("#goTop").css("display",'block');
      $("#freeVip").css("top",'430px');
    }
    if(netScrollTop == 0){
      $("#goTop").css("display",'none');
      $("#freeVip").css("top",'500px');
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
    //右侧推荐固定
    if(netScrollTop >= 2835) {
    //       position: fixed;
    // bottom: 0;
    // top: auto;
    // left: 967.5;
    // left: 967.5px;
      $("#recommendRight").css("position",'fixed');
      $("#recommendRight").css("bottom",'0');
      $("#recommendRight").css("top",'auto');
      $("#recommendRight").css("left",'966.5px');
    }
    if(netScrollTop < 2835) {
      $("#recommendRight").css("position",'relative');
      $("#recommendRight").css("bottom",'0');
      $("#recommendRight").css("left",'0');
      $("#recommendRight").css("top",'0');
    }
  }
});

export default {
  name: 'home',
  components: {
    Header,
    sidebar,
    commendTop,
    recommendRight,
    homepageMain,
    goTopIcon,
    freeVipIcon,
    advPopup
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
