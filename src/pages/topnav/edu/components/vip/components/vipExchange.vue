<template>
  <div class="vipExchangeWrapper">
    <div class="title">
      <div class="titleLeft">
        <span class="icon iconfont">&#xe663;</span>
        <span class="text">会员兑换</span>
        <span class="split">&nbsp;|&nbsp;</span>
        <a class="vipExchangeAll" href="https://edu.csdn.net/courses/e1_k" target="_blank">全部会员兑换</a>
      </div>
      <div class="titleRight">
        <div class="mem">会员免费兑换</div>
        <div class="be">立即开通</div>
      </div>
    </div>
    <div class="content">
      <ul class="contentList">
        <li class="item" v-for="(item,index) of vipExchangeList" :key="index">
          <a class="itemLink" :href="item.link">
            <img class="itemImg" :src="item.imgUrl" />
            <div class="itemTitle">{{item.title}}</div>
            <div class="itemPrice">
              {{item.price}}
              <div class="tag">Max会员免费兑换</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vipExchange',
  data () {
    return {
      vipExchangeList: [
        {
          link: 'https://edu.csdn.net/course/detail/5383',
          imgUrl: require('@/assets/img/topnav/edu/vip/vipExchange/img1.jpg'),
          title: 'Python全栈视频教程',
          price: '￥154.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/3310',
          imgUrl: require('@/assets/img/topnav/edu/vip/vipExchange/img2.jpg'),
          title: '大数据Spark实战视频教程',
          price: '￥208.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/5024',
          imgUrl: require('@/assets/img/topnav/edu/vip/vipExchange/img3.jpg'),
          title: 'Redis入门到项目实战视频教程',
          price: '￥59.00'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.vipExchangeWrapper
  width 750px
  height 354px
  padding 0 15px
  .title
    height 32px
    padding-bottom 12px
    font-weight 400
    position relative
    top 0
    left 0
    right 0
    .titleLeft
      position absolute
      left 0
      .icon
        color #e44859
        font-size 28px
        margin-right 8px
      .text
        color #333
        font-size 18px
      .split
        color #d0d0d0
        font-size 14px
        vertical-align text-top
      .vipExchangeAll
        color #e54858
        font-size 14px
        vertical-align text-top
        &:link
          text-decoration none
    .titleRight
      position absolute
      right 0
      display flex
      font-size 14px
      height 27px
      line-height 26px
      .mem
        border 1px solid #dfdfdf
        border-right 0
        padding 0 8px
        border-top-left-radius 2px
        border-bottom-left-radius 2px
        color #666
        &:before
          content ''
          width 6px
          height 6px
          background #fff
          transform rotate(45deg)
          position absolute
          z-index 1
          top 10px
          left -3px
          border-radius 1px
          border-left 1px solid #ccc
          border-bottom 1px solid #ccc
      .be
        padding 0 8px
        background #5cb85c
        color #fff
        border 1px solid #5cb85c
  .content
    .contentList
      display flex
      .item
        width 228px
        height 258px
        margin-right 30px
        border-radius 3px
        border 1px solid #e4e4e4
        &:last-child
          margin-right 0
        .itemLink
          width 100%
          height 258px
          display block
          &:link
            text-decoration none
          .itemImg
            width 100%
            border-radius 3px
          .itemTitle
            height 42px
            margin 16px 0
            padding 0 10px
            font-size 14px
            color #666
            &:hover
              color #e44859
          .itemPrice
            margin 10px 0
            padding 0 10px
            font-size 18px
            color #e44859
            height 20px
            line-height 20px
            position relative
            left 0
            top 0
            .tag
              font-size 12px
              color #1da40a
              border 1px solid #dadada
              border-radius 3px
              border-top-left-radius 2px
              border-bottom-left-radius 2px
              border-left 0
              position absolute
              right 10px
              top 0
              height 18px
              line-height 16px
              padding 0 4px 0 8px
              &:before
                content ''
                display block
                position absolute
                border-top 1px solid #dadada
                border-left 1px solid #dadada
                width 14px
                height 14px
                border-radius 3px
                border-top-right-radius 2px
                border-bottom-left-radius 2px
                transform rotate(-45deg)
                left -9.5px
                top 9px
                transform-origin 0 0
              &:after
                content ''
                border-radius 50%
                width 4px
                height 4px
                display block
                background #dadada
                position absolute
                left -1px
                top 7px
</style>
