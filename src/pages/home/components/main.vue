<template>
  <div class="mainWrapper">
      <main-adv></main-adv>
      <div v-if="newRecommendFlag" class="newRecommendInfoWrapper">
        <a class="tip">您有新的推荐内容，点击查看</a>
        <span class="iconfont deleteIcon">&#xe621;</span>
      </div>
      <content-list></content-list>
  </div>
</template>

<script>
import mainAdv from './advertisement'
import contentList from '@/pages/common/contentList'

export default {
  name:'homepageMain',
  components:{
    mainAdv,
    contentList
  },
  data () {
    return {
      //是否有新的推荐消息-以后作为和后台交互的标志变量，现在暂不处理
      newRecommendFlag:true
    }
  }
}
</script>

<style lang="stylus" scoped>
.mainWrapper
  width:760px
  margin-right 14px
  .newRecommendInfoWrapper
    position sticky
    top:0
    left:0
    background-color rgba(244,68,68,0.9)
    font-size:14px
    z-index:999
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
