<template>
  <div>
    <div class="advPopupWrapper" @mouseenter="advActive()" v-show="isClose">
      <img src="@/assets/img/common/popup/adv.png" />
    </div>
    <div class="closeAll" @click="closeAll()" v-show="isClose">关闭</div>
    <div class="advPopupActiveWrapper" v-show="isClose">
      <div class="close" @click="advDefault()">
        <span class="iconfont closeIcon">&#xe621;</span>
      </div>
      <img src="@/assets/img/common/popup/advActive.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'advPopup',
  data () {
    return {
      isClose: true
    }
  },
  methods: {
    advActive: function () {
      $('.advPopupActiveWrapper').css('display', 'block')
    },
    advDefault: function () {
      $('.advPopupActiveWrapper').css('display', 'none')
    },
    closeAll: function () {
      this.isClose = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.advPopupWrapper
  position fixed
  bottom 200px
  right 8px
  border-radius 2px
  width 44px
  height 300px
  z-index 99
.closeAll
  position fixed
  bottom 178px
  right 8px
  border 1px solid #000
  border-radius 2px
  width 42px
  height 20px
  line-height 20px
  fon-size 12px
  z-index 99
  text-align center
.advPopupActiveWrapper
  display none
  position fixed
  bottom 200px
  right 60px
  border-radius 2px
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
