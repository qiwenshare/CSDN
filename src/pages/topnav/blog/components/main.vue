<template>
  <div class="mainWrapper">
    <ul class="contentList">
      <li class="contentItem border-bottom" v-for="(item,index) of essayList" :key="index">
        <div class="titleWrapper">
          <a class="link" :href="item.link" target="_blank">
            <h3 class="title">{{item.title}}</h3>
          </a>
          <div class="userBar">
            <img class="headImg" :src="item.imgUrl" />
            <div class="userName">{{item.userName}}</div>
            <div class="otherComment">
              <span>其他</span>
              <span class="split">|</span>
              <span>评论</span>
            </div>
            <div class="iconfont closeIcon" @click="deleteEssayItem(index)">&#xe621;</div>
          </div>
        </div>
        <div class="summary">{{item.summary}}</div>
        <div class="operateLine">
          <span class="date">{{item.date}}</span>
          <div class="operate">
            <span>点赞</span>
            <span class="split">|</span>
            <span>收藏</span>
            <span class="split">|</span>
            <span>分享</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homepageMain',
  data () {
    return {
      essayList: [
        {
          link: 'https://blog.csdn.net/weixin_34026484?utm_source=feed',
          imgUrl: require('@/assets/img/topnav/blog/contentList/headImg.jpg'),
          userName: 'weixin_34026484',
          title: 'Java基础——调用CMD命令1',
          summary:
            '1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ',
          date: '10月16日'
        },
        {
          link: 'https://blog.csdn.net/weixin_34026484?utm_source=feed',
          imgUrl: require('@/assets/img/topnav/blog/contentList/headImg.jpg'),
          userName: 'weixin_34026484',
          title: 'Java基础——调用CMD命令2',
          summary:
            '1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ',
          date: '10月16日'
        },
        {
          link: 'https://blog.csdn.net/weixin_34026484?utm_source=feed',
          imgUrl: require('@/assets/img/topnav/blog/contentList/headImg.jpg'),
          userName: 'weixin_34026484',
          title: 'Java基础——调用CMD命令3',
          summary:
            '1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ',
          date: '10月16日'
        },
        {
          link: 'https://blog.csdn.net/weixin_34026484?utm_source=feed',
          imgUrl: require('@/assets/img/topnav/blog/contentList/headImg.jpg'),
          userName: 'weixin_34026484',
          title: 'Java基础——调用CMD命令4',
          summary:
            '1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ',
          date: '10月16日'
        },
        {
          link: 'https://blog.csdn.net/weixin_34026484?utm_source=feed',
          imgUrl: require('@/assets/img/topnav/blog/contentList/headImg.jpg'),
          userName: 'weixin_34026484',
          title: 'Java基础——调用CMD命令5',
          summary:
            '1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ',
          date: '10月16日'
        },
        {
          link: 'https://blog.csdn.net/weixin_34026484?utm_source=feed',
          imgUrl: require('@/assets/img/topnav/blog/contentList/headImg.jpg'),
          userName: 'weixin_34026484',
          title: 'Java基础——调用CMD命令6',
          summary:
            '1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ',
          date: '10月16日'
        },
        {
          link: 'https://blog.csdn.net/weixin_34026484?utm_source=feed',
          imgUrl: require('@/assets/img/topnav/blog/contentList/headImg.jpg'),
          userName: 'weixin_34026484',
          title: 'Java基础——调用CMD命令7',
          summary:
            '1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ',
          date: '10月16日'
        },
        {
          link: 'https://blog.csdn.net/weixin_34026484?utm_source=feed',
          imgUrl: require('@/assets/img/topnav/blog/contentList/headImg.jpg'),
          userName: 'weixin_34026484',
          title: 'Java基础——调用CMD命令8',
          summary:
            '1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ',
          date: '10月16日'
        },
        {
          link: 'https://blog.csdn.net/weixin_34026484?utm_source=feed',
          imgUrl: require('@/assets/img/topnav/blog/contentList/headImg.jpg'),
          userName: 'weixin_34026484',
          title: 'Java基础——调用CMD命令9',
          summary:
            '1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ',
          date: '10月16日'
        },
        {
          link: 'https://blog.csdn.net/weixin_34026484?utm_source=feed',
          imgUrl: require('@/assets/img/topnav/blog/contentList/headImg.jpg'),
          userName: 'weixin_34026484',
          title: 'Java基础——调用CMD命令10',
          summary:
            '1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ',
          date: '10月16日'
        }
      ]
    }
  },
  methods: {
    deleteEssayItem (index) {
      this.essayList.splice(index, 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
@import '~@/assets/styles/varibles.styl'
.mainWrapper
  .contentList
    margin 10px 0
    background #fff
    .contentItem
      padding 18px 24px
      color $dartTextColor
      &:hover
        background #fafafa
      .titleWrapper
        margin-bottom 10px
        height 30px
        line-height 30px
        display flex
        justify-content space-between
        .link
          display block
          color $dartTextColor
          .title
            height 30px
            &:hover
              color #ca0c16
        .userBar
          display flex
          font-size 14px
          .headImg
            border-radius 50%
            width 30px
            height 30px
          .userName
            margin 0 10px
          .otherComment
            display flex
            color #3399ea
            .split
              margin 0 4px
              color #ccc
          .iconfont
            margin-left 16px
            line-height 30px
            font-size 12px
            color #ccc
            cursor pointer
      .summary
        line-height 24px
        margin-bottom 10px
        color #8a8a8a
        font-size 14px
      .operateLine
        display flex
        justify-content space-between
        font-size 14px
        .operate
          color #f44444
          .split
            margin 0 4px
            color #ccc
</style>
