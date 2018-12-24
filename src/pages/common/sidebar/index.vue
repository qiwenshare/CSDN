<template>
  <div class="sidebarWrapper">
    <nav class="sidebar">
      <ul class="sidebarList">
        <li v-for="(item,index) of sidebarList" :key="index">
          <a>{{item}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name:'sidebar',
  data () {
    return {
      sidebarList:['推荐','最新文章','关注','资讯','人工智能','云计算/大数据','区块链','数据库','程序人生','游戏开发','研发管理','前端','移动开发','物联网','运维','计算机基础','编程语言','架构','音视频开发','安全','其他']
    }
  }  
}
</script>

<style lang="stylus" scoped>
.sidebarWrapper
  width: 96px
  height:692px
  background-color: #fff
  color: #707070
  margin-right: 14px
  text-align: center
  line-height: 32px
  font-size:14px
  position: relative
  top:0
  left:0
  padding: 6px 0
  -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04)
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04)
  a
    display block
    width:100%
    height 100%
    &:hover
      background-color:#f44444
      color #fff
</style>
