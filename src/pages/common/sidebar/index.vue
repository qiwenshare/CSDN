<template>
  <div class="sidebarWrapper">
    <nav class="sidebar">
      <ul class="sidebarList">
        <li v-for="(item,index) of sidebarList" :key="index">
          <router-link :to="item.sidebarLink" class="sidebarItem" tag="div">
            {{item.name}}
          </router-link>
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
        { name:'推荐',
          isActive:false,
          sidebarLink:'/index' 
        },
        { name:'最新文章',
          isActive:false,
          sidebarLink:'/nav/newArticles' 
        },
        { name:'关注',
          isActive:false,
          sidebarLink:'/nav/watchers' 
        },
        { name:'资讯',
          isActive:false,
          sidebarLink:'/nav/news' 
        },
        { name:'人工智能',
          isActive:false,
          sidebarLink:'/nav/ai' 
        },
        { name:'云计算/大数据',
          isActive:false,
          sidebarLink:'/nav/cloud' 
        },
        { name:'区块链',
          isActive:false,
          sidebarLink:'/nav/blockchain' 
        },
        { name:'数据库',
          isActive:false,
          sidebarLink:'/nav/database' 
        },
        { name:'程序人生',
          isActive:false,
          sidebarLink:'/nav/career' 
        },
        { name:'游戏开发',
          isActive:false,
          sidebarLink:'/nav/game' 
        },
        { name:'研发管理',
          isActive:false,
          sidebarLink:'/nav/engineering'
        },
        { name:'前端',
          isActive:false,
          sidebarLink:'/nav/web' 
        },
        { name:'移动开发',
          isActive:false,
          sidebarLink:'/nav/mobile' 
        },
        { name:'物联网',
          isActive:false,
          sidebarLink:'/nav/iot' 
        },
        { name:'运维',
          isActive:false,
          sidebarLink:'/nav/ops'
        },
        { name:'计算机基础',
          isActive:false,
          sidebarLink:'/nav/fund' 
        },
        { name:'编程语言',
          isActive:false,
          sidebarLink:'/nav/lang' 
        },
        { name:'架构',
          isActive:false,
          sidebarLink:'/nav/arch' 
        },
        { name:'音视频开发',
          isActive:false,
          sidebarLink:'/nav/avi' 
        },
        { name:'安全',
          isActive:false,
          sidebarLink:'/nav/sec' 
        },
        { name:'其他',
          isActive:false,
          sidebarLink:'/nav/other' 
        },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.router-link-active
  background: #f44444;
  color: #fff
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
  .sidebarItem
    display block
    width 100%
    height 98%
    margin-bottom 1px
    &:hover
      background-color:#f44444
      color #fff
</style>
