<template>
  <div class="newRecommendInfoWrapper">
    <a class="tip">您有新的推荐内容，点击查看</a>
    <span class="iconfont deleteIcon">&#xe621;</span>
  </div>
</template>

<script>
export default {
  name:'newInfo'
}
</script>

<style lang="stylus" scoped>
.newRecommendInfoWrapper
  position sticky
  top:0
  left:0
  background-color rgba(244,68,68,0.9)
  font-size:14px
  z-index:20
  .tip
    display block
    color:#fff
    text-align center
    height 32px
    line-height 32px
  .deleteIcon
    position absolute
    right 20px
    top:10px
    font-size:12px
    margin-left 16px
    color:#ccc
</style>
