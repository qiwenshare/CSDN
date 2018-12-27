<template>
  <div class="advWrapper" @mouseenter="pagiActive()" @mouseleave="pagiDefault()">
    <swiper class="advLeft" :options="swiperOption">
      <!-- slides -->
      <swiper-slide class="slide" v-for="(item,index) of swiperImgList" :key="index">
        <img class="swipe-img" :src="item.imgUrl">
        <div class="swipe-text">{{item.text}}</div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button" slot="button-next"></div>
    </swiper>
    <div class="advRight">
      <div :style="img2">
        <a>
          <p>今日头条能干掉微信么？</p>
        </a>
      </div>
      <div :style="img3"> 
        <a>
          <p>“深度学习之父”大谈AI：寒冬不会出现，论文评审机制有损创新</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'mainAdv',
  data () {
    return {
      img2:{
        backgroundImage:"url(" + require("@/assets/img/sidenav/blockchain/adv/adv1.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      img3:{
        backgroundImage:"url(" + require("@/assets/img/sidenav/blockchain/adv/adv2.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      swiperOption:{
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        autoplay:true,
        loop:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      swiperImgList:[
        { imgUrl:require("@/assets/img/sidenav/blockchain/swiper/swiper1.png"),
          text:'猜对今年ICO大溃败与BCH算力战，能猜对明年的区块链吗'
        },
        { imgUrl:require("@/assets/img/sidenav/blockchain/swiper/swiper2.png"),
          text:'16岁开发者从辍学歧视，到开发爆款应用，其人生远非成人想象'
        }
      ]
    }
  },
  methods:{
    pagiActive () {
      $(".swiper-button").css("display","block");
    },
    pagiDefault () {
      $(".swiper-button").css("display","none");
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl"
.advWrapper
  display flex
  margin:0 auto
  .advLeft
    width 508px
    height 206px
    .slide
      width 100%
      height 100%
      position relative
      left 0
      top 0
      .swipe-img
        width 100%
        height 100%
      .swipe-text
        width 95%
        height:20px
        line-height 20px
        color #fff
        position absolute
        bottom:25px
        left:13px
        ellipsis()
    .swiper-pagination
      text-align:left
      text-indent:10px
      &>>> .swiper-pagination-bullet
        background #ccc
        opacity 1
        width 6px
        height:6px
      &>>> .swiper-pagination-bullet-active
        width 22px
        border-radius 3px
        transition:width 0.5s;
	      -webkit-transition:width 0.5s; /* Safari */
    .swiper-button
      display nonne
    .swiper-button-prev
      background url('/static/mainAdvSwiper/prev.png') no-repeat
    .swiper-button-next
      background url('/static/mainAdvSwiper/next.png') no-repeat
  .advRight
    padding-left: 2px;
    width: 250px;
    height: 206px;
    div
      position relative
      left 0
      top 0
      height 102px
      a
        display block
        width 100%
        height 100%
        overflow hidden
        background: linear-gradient(to top, #00000033 , #ffffff33)
        p
          width 90%
          height 16px
          line-height 16px
          position:absolute
          bottom:5px
          left:5px
          color:#fff
          font-size:10px
          text-shadow: 0 1px 2px rgba(0,0,0,0.6);
          ellipsis()
      &:last-child
        margin-top:2px
</style>
