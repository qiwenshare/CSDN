<template>
  <div class="freeVIPWrapper">
  </div>
</template>

<script>
export default {
  name:'freeVipIcon'
}
</script>

<style lang="stylus" scoped>
// @import "~@/assets/styles/mixins.styl"
.freeVIPWrapper
  background: url('/static/popup/freeVipDefault.png') no-repeat;
  background-size: 100% 100%;
  position fixed
  top:500px
  right:8px
  border-radius: 2px;
  width 46px
  height 64px
  &:hover
    background: url('/static/popup/freeVipActive.gif') no-repeat;
    background-size: 100% 100%;
</style>
