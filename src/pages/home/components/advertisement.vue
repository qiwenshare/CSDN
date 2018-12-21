<template>
  <div class="advWrapper">
      <div class="advLeft">
        <img src="@/assets/img/homepage/adv1.jpg" />
      </div>
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
      //投票背景图片
      img2:{
        backgroundImage:"url(" + require("@/assets/img/homepage/adv2.jpg") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      img3:{
        backgroundImage:"url(" + require("@/assets/img/homepage/adv3.jpg") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl"
.advWrapper
  display flex
  margin:0 auto 8px
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
