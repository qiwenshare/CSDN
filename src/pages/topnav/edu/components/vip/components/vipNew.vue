<template>
  <div class="vipNewWrapper">
    <div class="title">
      <span class="icon iconfont">&#xe663;</span>
      <span class="text">会员上新</span>
    </div>
    <div class="content">
      <ul class="contentList">
        <li class="item" v-for="(item,index) of contentList" :key="index">
          <a class="itemLink" :href="item.link" target="_blank">
            <img class="itemImg" :src="item.imgUrl" />
            <div class="itemDesc">
              <p class="itemTitle">{{item.title}}</p>
              <span class="itemPrice">{{item.price}}</span>
              <span class="itemOldPrice">{{item.oldPirce}}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vipNew',
  data () {
    return {
      contentList: [
        {
          link: 'https://edu.csdn.net/course/detail/6025',
          imgUrl: require('@/assets/img/topnav/edu/vip/vipNew/img1.jpg'),
          title: 'Java从小白到大牛第3篇 【进阶篇】',
          price: '￥181.00',
          oldPirce: '￥181.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/8099',
          imgUrl: require('@/assets/img/topnav/edu/vip/vipNew/img2.jpg'),
          title: '机器学习核心算法实战50讲视频教程',
          price: '￥154.00',
          oldPirce: '￥154.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/2741',
          imgUrl: require('@/assets/img/topnav/edu/vip/vipNew/img3.jpg'),
          title: 'Android基础入门视频培训教程',
          price: '￥208.00',
          oldPirce: '￥208.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/6297',
          imgUrl: require('@/assets/img/topnav/edu/vip/vipNew/img4.jpg'),
          title: 'Docker技术进阶与应用实战视频教程',
          price: '￥136.00',
          oldPirce: '￥136.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/474',
          imgUrl: require('@/assets/img/topnav/edu/vip/vipNew/img5.jpg'),
          title: 'C++语言基础视频教程',
          price: '￥79.00',
          oldPirce: '￥79.00'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.vipNewWrapper
  width 360px
  height 708px
  border 1px solid #e4e4e4
  border-radius 4px
  position absolute
  top 0
  right 15px
  .title
    height 44px
    line-height 44px
    background #f9f9f9
    border-bottom 1px solid #e4e4e4
    padding 0 0 0 16px
    .icon
      color #e44859
      font-size 28px
      margin-right 8px
    .text
      color #333
      font-size 18px
      font-weight 400
      vertical-align top
  .content
    padding 0 16px
    .contentList
      .item
        .itemLink
          display block
          padding 16px 0
          border-bottom 1px solid #e4e4e4
          height 100px
          font-size 14px
          display flex
          &:link
            text-decoration none
          .itemImg
            width 152px
            height 103px
          .itemDesc
            margin-left 16px
            .itemTitle
              max-height 66px
              margin-bottom 16px
              color #333
              &:hover
                color #cc0000
            .itemPrice
              font-size 18px
              color #f12c2c
            .itemOldPrice
              font-size 12px
              color #999
              text-decoration line-through
        &:last-child
          .itemLink
            border-bottom 1px solid transparent
</style>
