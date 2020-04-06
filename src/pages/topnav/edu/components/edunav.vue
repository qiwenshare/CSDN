<template>
  <div class="edunavWrapper">
    <ul class="edunavList">
      <div class="logoWrapper">
        <img class="edulogo" src="@/assets/img/topnav/edu/edulogo.png" />
      </div>
      <li v-for="(item,index) of edunavList" :key="index" class="edunavItem">{{item.name}}</li>
      <div class="myEduWrapper">
        <div class="myEdu">
          <span class="iconfont myEduIcon">&#xe601;</span>
          <span class="myEduName">我的学院</span>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'edunav',
  data () {
    return {
      edunavList: [
        { name: '视频课' },
        { name: '讲师' },
        { name: '直播' },
        { name: '每日秒杀' },
        { name: '会员' },
        { name: '会员免费' },
        { name: '分享赚佣金' },
        { name: 'TinyMind' },
        { name: '课程答疑' },
        { name: '证书查询' },
        { name: '我要开课' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.edunavWrapper
  width 100%
  height 40px
  background #e4e9ec
  position sticky
  top 0
  z-index 1
  .edunavList
    height 100%
    width 1200px
    margin 0 auto
    display flex
    position relative
    left 0
    right 0
    font-size 14px
    .logoWrapper
      padding 13px 0
      margin-right 8px
      verticalMiddle()
      .edulogo
        height 14px
        width 49px
    .edunavItem
      verticalMiddle()
      padding 0 8px
    .myEduWrapper
      position absolute
      right 0
      height 100%
      verticalMiddle()
      .myEdu
        .myEduIcon
          margin-right 5px
</style>
