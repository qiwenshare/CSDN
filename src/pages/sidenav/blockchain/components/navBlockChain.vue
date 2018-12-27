<template>
  <div class="navWrapper">
    <ul class="navList">
      <li class="navLogo">
        <div class="navImgWrapper">
          <img :src="navLogoUrl" />
        </div>
      </li>
      <li v-for="(item,index) of navList" :key="index" class="navItem">
        <router-link :to="item.navLink" tag="div" class="navContent">
          {{item.name}}
          <div class="itemPoint"></div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'navBlockChain',
  data () {
    return {
      navLogoUrl:require("@/assets/img/sidenav/blockchain/nav/logo.png"),
      navList:[
        { name:'资讯',
          navLink:'/nav/blockchain'
        },
        { name:'博客',
          navLink:'/nav/blockchain'
        },
        { name:'专题',
          navLink:'/nav/blockchain'
        },
        { name:'活动',
          navLink:'/nav/blockchain'
        },
        { name:'图文课',
          navLink:'/nav/blockchain'
        },
        { name:'学院',
          navLink:'/nav/blockchain'
        },
        { name:'资源',
          navLink:'/nav/blockchain'
        },
        { name:'社区',
          navLink:'/nav/blockchain'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.router-link-active
  background: #e3635d
  color: #fff
  .itemPoint
    border-top-color: #e3635d !important
.navWrapper
  width 100%
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  margin: -8px 0 8px 0;
  .navList
    display flex
    .navItem
      .navContent
        width 87px
        height 40px
        line-height 40px
        text-align center
        position relative
        top 0
        left 0
        .itemPoint
          border-top-color: inherit;
          border-top-style: solid;
          border-top-width: 5px;
          border-right-color: transparent;
          border-right-style: solid;
          border-right-width: 5px;
          border-bottom-color: transparent;
          border-bottom-style: solid;
          border-bottom-width: 5px;
          border-left-color: transparent;
          border-left-style: solid;
          border-left-width: 5px;
          content: ' ';
          height: 0;
          top: 40px;
          position: absolute;
          width: 0;
          border-width: 5px;
          //#e3635d;
          left: 38px;
    .navLogo
      width 160px
      height 40px
      margin-right 19px
      .navImgWrapper
        padding-top 4px
        img
          width 158px
        
</style>
