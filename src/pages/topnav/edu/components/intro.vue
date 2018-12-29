<template>
  <div class="introWrapper">
    <swiper class="bgSwiper" :options="swiperOption">
      <!-- slides -->
      <swiper-slide class="slide" v-for="(item,index) of bgSwiperList" :key="index">
        <div class="swipe-img" :style="item"></div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'intro',
  data () {
    return {
      bgSwiperList:[
        { backgroundImage:"url(" + require("@/assets/img/topnav/edu/bgSwiper/swiperImg1.jpg") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        { backgroundImage:"url(" + require("@/assets/img/topnav/edu/bgSwiper/swiperImg2.jpg") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        { backgroundImage:"url(" + require("@/assets/img/topnav/edu/bgSwiper/swiperImg3.jpg") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        { backgroundImage:"url(" + require("@/assets/img/topnav/edu/bgSwiper/swiperImg4.jpg") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        { backgroundImage:"url(" + require("@/assets/img/topnav/edu/bgSwiper/swiperImg5.jpg") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }
      ],
      swiperOption:{
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        autoplay:true,
        loop:true
      },
    }
  }
}
</script>

<style lang="stylus" scoped>
.introWrapper
  width 100%
  height 400px
  .bgSwiper
    width 100%
    height 400px
    position relative
    left 0
    top 0
    z-index:0
    .slide
      width 100%
      height 400px
      .swipe-img
        width 100%
        height 400px
    .swiper-pagination
      position absolute
      bottom 20px
      &>>> .swiper-pagination-bullet
        background #fff
        opacity 1
        width 20px
        height:6px
        border-radius 2px
        margin-right 12px
      &>>> .swiper-pagination-bullet-active
        width 20px
        height:6px
        background #ee5e53
</style>
