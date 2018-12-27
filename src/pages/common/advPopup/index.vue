<template>
  <div>
    <div class="advPopupWrapper" @mouseenter="advActive()">
      <img src="@/assets/img/common/popup/adv.png"/>
    </div>
    <div class="advPopupActiveWrapper">
      <div class="close" @click="advDefault()">
        <span class="iconfont closeIcon">&#xe621;</span>
      </div>
      <img src="@/assets/img/common/popup/advActive.png" />
    </div>
  </div>
</template>

<script>
export default {
  name:'advPopup',
  methods:{
    advActive:function() {
      $(".advPopupActiveWrapper").css("display",'block')
    },
    advDefault:function() {
      $(".advPopupActiveWrapper").css("display",'none')
    }
  }
}
</script>

<style lang="stylus" scoped>
.advPopupWrapper
  position fixed
  bottom:200px
  right:8px
  border-radius: 2px;
  width 44px
  height 300px
  z-index 99
.advPopupActiveWrapper
  display none
  position fixed
  bottom:200px
  right:60px
  border-radius: 2px;
  width 320px
  height 300px 
  z-index 99
  .close
    background-color #666
    width 16px
    height 20px
    float left
    cursor pointer
    .closeIcon
      color #fff
</style>
