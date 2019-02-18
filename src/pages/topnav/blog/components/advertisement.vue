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
  </div>
</template>

<script>

export default {
  name:'mainAdv',
  data () {
    return {
      img2:{
        backgroundImage:"url(" + require("@/assets/img/topnav/blog/swiperRight/adv1.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      img3:{
        backgroundImage:"url(" + require("@/assets/img/topnav/blog/swiperRight/adv2.png") + ") ",
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
        { imgUrl:require("@/assets/img/topnav/blog/swiper/adv1.png"),
          text:'GitChat 陪你一起经历不平凡'
        },
        { imgUrl:require("@/assets/img/topnav/blog/swiper/adv2.png"),
          text:'大数据预测CSDN2018博客之星评选结果分享 沉淀 ！CSDN 2018博客之星年度评选正式上线'
        },
        { imgUrl:require("@/assets/img/topnav/blog/swiper/adv3.jpg"),
          text:'CSDN博文周刊第2期 |让Elasticsearch飞起来!——性能优化实践干货'
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
  margin:0 auto 8px
  .advLeft
    width 100%
    height 206px
    .slide
      width 760px
      height 100%
      position relative
      left 0
      top 0
      .swipe-img
        width 760px
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
</style>
