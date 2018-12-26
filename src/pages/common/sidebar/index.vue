<template>
  <div class="sidebarWrapper">
    <nav class="sidebar">
      <ul class="sidebarList">
        <li v-for="(item,index) of sidebarList" :key="index">
          <a :href="item.sidebarLink">{{item.name}}</a>
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
      sidebarList:[
        { name:'推荐',sidebarLink:'/' },
        { name:'最新文章',sidebarLink:'/nav/newArticles' },
        { name:'关注',sidebarLink:'/nav/newArticles' },
        { name:'资讯',sidebarLink:'/nav/newArticles' },
        { name:'人工智能',sidebarLink:'/nav/newArticles' },
        { name:'云计算/大数据',sidebarLink:'/nav/newArticles' },
        { name:'区块链',sidebarLink:'/nav/newArticles' },
        { name:'数据库',sidebarLink:'/nav/newArticles' },
        { name:'程序人生',sidebarLink:'/nav/newArticles' },
        { name:'游戏开发',sidebarLink:'/nav/newArticles' },
        { name:'研发管理',sidebarLink:'/nav/newArticles' },
        { name:'前端',sidebarLink:'/nav/newArticles' },
        { name:'移动开发',sidebarLink:'/nav/newArticles' },
        { name:'物联网',sidebarLink:'/nav/newArticles' },
        { name:'运维',sidebarLink:'/nav/newArticles' },
        { name:'计算机基础',sidebarLink:'/nav/newArticles' },
        { name:'编程语言',sidebarLink:'/nav/newArticles' },
        { name:'架构',sidebarLink:'/nav/newArticles' },
        { name:'音视频开发',sidebarLink:'/nav/newArticles' },
        { name:'安全',sidebarLink:'/nav/newArticles' },
        { name:'其他',sidebarLink:'/nav/newArticles' },
      ]
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
    color #707070
    &:hover
      background-color:#f44444
      color #fff
</style>
