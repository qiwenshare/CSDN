<template>
  <div class="goTopWrapper">
    <a href="#" class="goTopLink" title="返回顶部">
      <span class="iconfont goTopIcon">&#xe62c;</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'goTopIcon'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.goTopWrapper
  background-color #ccc
  display none
  position fixed
  top 500px
  right 8px
  border-radius 2px
  &:hover
    background-color #f44444
    transition background 0.5s linear
    -webkit-transition background 0.5s linear
    -moz-transition background 0.5s linear
    -o-transition background 0.5s linear
  .goTopLink
    display block
    color #fff
    width 46px
    height 44px
    text-align center
    verticalMiddle()
    .goTopIcon
      font-size 22px
</style>
