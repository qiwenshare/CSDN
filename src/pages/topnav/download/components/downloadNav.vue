<template>
  <div class="downloadWrapper">
    <ul class="downloadNavList">
      <li v-for="(item,index) of downloadNavList" :key="index" class="downloadItem">
        <a class="downloadLink">{{item.name}}</a>
      </li>
      <div class="myDownloadWrapper">
        <div class="myDownload">
          <span class="iconfont myDownloadIcon">&#xe77c;</span>
          <span class="myDownloadName">下载帮助</span>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name:'downloadNav',
  data () {
    return {
      downloadNavList:[
        { name:'下载首页'

        },
        { name:'精品专辑'

        },
        { name:'我的资源'

        },
        { name:'上传资源赚积分'

        },
        { name:'已下载'

        },
        { name:'我的收藏'

        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl"
downloadNavBefore()
  content: '';
  position: absolute;
  bottom: 2px;
  width: 0;
  height: 0;
  left: 40%;
  right: 0;
  border-top: none;
  border-left: solid 4px transparent;
  border-right: solid 4px transparent;
  border-bottom: solid 4px #ca0c16;
downloadNavAfter()
  content: '';
  position: absolute;
  bottom: 0;
  height: 2px;
  left: 0;
  right: 0;
  background-color: #ca0c16;
.downloadWrapper
  width 100%
  height 40px
  background: #e4e9ec;
  position sticky 
  top:0
  z-index 1
  .downloadNavList
    height 100%
    width 1200px
    margin 0 auto 
    display flex
    position relative
    left 0
    right 0
    font-size:14px
    .logoWrapper
      padding:13px 0
      margin-right 8px
      verticalMiddle()
      .edulogo
        height:14px
        width 49px
    .downloadItem
      verticalMiddle()
      padding:0 8px
      position relative
      .downloadLink
        display block
        height: 40px;
        line-height: 40px;
        width: 100%;
        &:hover
          &:before
            downloadNavBefore()
          &:after
            downloadNavAfter()
      .linkActive
          &:before
            downloadNavBefore()
          &:after
            downloadNavAfter()
    .myDownloadWrapper
      position absolute
      right:0
      height:100%
      verticalMiddle()
      .myDownload
        .myDownloadIcon
          margin-right 5px
</style>
