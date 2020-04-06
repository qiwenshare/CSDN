<template>
  <div class="sidebarWrapper">
    <nav class="sidebar">
      <ul class="sidebarList">
        <li v-for="(item,index) of sidebarList" :key="index">
          <router-link :to="item.sidebarLink" class="sidebarItem" tag="div">{{item.name}}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      sidebarList: [
        { name: '推荐', sidebarLink: '/index' },
        { name: '最新文章', sidebarLink: '/nav/newArticles' },
        { name: '关注', sidebarLink: '/nav/watchers' },
        { name: '资讯', sidebarLink: '/nav/news' },
        { name: '人工智能', sidebarLink: '/nav/ai' },
        { name: '云计算/大数据', sidebarLink: '/nav/cloud' },
        { name: '区块链', sidebarLink: '/nav/blockchain/index' },
        { name: '数据库', sidebarLink: '/nav/database' },
        { name: '程序人生', sidebarLink: '/nav/career' },
        { name: '游戏开发', sidebarLink: '/nav/game' },
        { name: '研发管理', sidebarLink: '/nav/engineering' },
        { name: '前端', sidebarLink: '/nav/web' },
        { name: '移动开发', sidebarLink: '/nav/mobile' },
        { name: '物联网', sidebarLink: '/nav/iot' },
        { name: '运维', sidebarLink: '/nav/ops' },
        { name: '计算机基础', sidebarLink: '/nav/fund' },
        { name: '编程语言', sidebarLink: '/nav/lang' },
        { name: '架构', sidebarLink: '/nav/arch' },
        { name: '音视频开发', sidebarLink: '/nav/avi' },
        { name: '安全', sidebarLink: '/nav/sec' },
        { name: '其他', sidebarLink: '/nav/other' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.router-link-active
  background #f44444
  color #fff
.sidebarWrapper
  width 96px
  height 710px
  background-color #fff
  color #707070
  margin-right 14px
  text-align center
  line-height 32px
  font-size 14px
  position sticky
  top 0
  z-index 2
  box-sizing border-box
  padding 6px 0
  -webkit-box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
  box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
  .sidebarItem
    display block
    width 100%
    height 98%
    margin-bottom 1px
    cursor pointer
    &:hover
      background-color #f44444
      color #fff
</style>
