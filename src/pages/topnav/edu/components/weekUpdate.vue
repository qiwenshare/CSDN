<template>
  <div class="weekUpdateWrapper">
    <div class="title">
      <div class="titleLeft">
        <span class="icon iconfont">&#xe663;</span>
        <span class="text">每周上新</span>
        <span class="split">&nbsp;|&nbsp;</span>
      </div>
      <div class="titleRight">
        <ul>
          <li class="week1 active" @click="weekTabDisplay(weekTab1)">
            <span>优选课</span>
          </li>
          <li class="week2" @click="weekTabDisplay(weekTab2)">
            <span>限时挑战2期 A组</span>
          </li>
          <li class="week3" @click="weekTabDisplay(weekTab3)">
            <span>限时挑战2期 B组</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <ul class="weekListWrapper" v-show="week1">
        <li class="weekItem" v-for="(item,index) of weekUpdateList1" :key="index">
          <a class="weekLink" :href="item.link" target="_blank">
            <img class="weekImg" :src="item.img" />
            <p class="weekDesc">{{item.desc}}</p>
            <div class="weekTeacher">{{item.teacher}}</div>
            <div class="weekPrice">{{item.price}}</div>
          </a>
        </li>
      </ul>
      <ul class="weekListWrapper" v-show="week2">
        <li class="weekItem" v-for="(item,index) of weekUpdateList2" :key="index">
          <a class="weekLink" :href="item.link" target="_blank">
            <img class="weekImg" :src="item.img" />
            <p class="weekDesc">{{item.desc}}</p>
            <div class="weekTeacher">{{item.teacher}}</div>
            <div class="weekPrice">{{item.price}}</div>
          </a>
        </li>
      </ul>
      <ul class="weekListWrapper" v-show="week3">
        <li class="weekItem" v-for="(item,index) of weekUpdateList3" :key="index">
          <a class="weekLink" :href="item.link" target="_blank">
            <img class="weekImg" :src="item.img" />
            <p class="weekDesc">{{item.desc}}</p>
            <div class="weekTeacher">{{item.teacher}}</div>
            <div class="weekPrice">{{item.price}}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weekUpdate',
  data () {
    return {
      weekUpdateList1: [
        {
          link: 'https://edu.csdn.net/course/detail/9920',
          img: require('@/assets/img/topnav/edu/weekUpdate/img1.jpg'),
          desc: '【10天企业定制课】2019年PS软件photoshop/CC应用计划学习视频',
          teacher: '讲师：孙伟',
          price: '￥55.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/9920',
          img: require('@/assets/img/topnav/edu/weekUpdate/img1.jpg'),
          desc: '【10天企业定制课】2019年PS软件photoshop/CC应用计划学习视频',
          teacher: '讲师：孙伟',
          price: '￥55.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/9920',
          img: require('@/assets/img/topnav/edu/weekUpdate/img1.jpg'),
          desc: '【10天企业定制课】2019年PS软件photoshop/CC应用计划学习视频',
          teacher: '讲师：孙伟',
          price: '￥55.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/9920',
          img: require('@/assets/img/topnav/edu/weekUpdate/img1.jpg'),
          desc: '【10天企业定制课】2019年PS软件photoshop/CC应用计划学习视频',
          teacher: '讲师：孙伟',
          price: '￥55.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/9920',
          img: require('@/assets/img/topnav/edu/weekUpdate/img1.jpg'),
          desc: '【10天企业定制课】2019年PS软件photoshop/CC应用计划学习视频',
          teacher: '讲师：孙伟',
          price: '￥55.00'
        }
      ],
      weekUpdateList2: [
        {
          link: 'https://edu.csdn.net/course/detail/6253',
          img: require('@/assets/img/topnav/edu/weekUpdate/img2.jpg'),
          desc: 'Unity游戏文本自动化生成脚本工具必学精讲',
          teacher: '讲师：姜雪伟',
          price: '￥43.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/6253',
          img: require('@/assets/img/topnav/edu/weekUpdate/img2.jpg'),
          desc: 'Unity游戏文本自动化生成脚本工具必学精讲',
          teacher: '讲师：姜雪伟',
          price: '￥43.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/6253',
          img: require('@/assets/img/topnav/edu/weekUpdate/img2.jpg'),
          desc: 'Unity游戏文本自动化生成脚本工具必学精讲',
          teacher: '讲师：姜雪伟',
          price: '￥43.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/6253',
          img: require('@/assets/img/topnav/edu/weekUpdate/img2.jpg'),
          desc: 'Unity游戏文本自动化生成脚本工具必学精讲',
          teacher: '讲师：姜雪伟',
          price: '￥43.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/6253',
          img: require('@/assets/img/topnav/edu/weekUpdate/img2.jpg'),
          desc: 'Unity游戏文本自动化生成脚本工具必学精讲',
          teacher: '讲师：姜雪伟',
          price: '￥43.00'
        }
      ],
      weekUpdateList3: [
        {
          link: 'https://edu.csdn.net/course/detail/6631',
          img: require('@/assets/img/topnav/edu/weekUpdate/img3.jpg'),
          desc: '35讲-进阶基于Python3.X的Selenium自动化测试',
          teacher: '讲师：李晓鹏',
          price: '￥440.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/6631',
          img: require('@/assets/img/topnav/edu/weekUpdate/img3.jpg'),
          desc: '35讲-进阶基于Python3.X的Selenium自动化测试',
          teacher: '讲师：李晓鹏',
          price: '￥440.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/6631',
          img: require('@/assets/img/topnav/edu/weekUpdate/img3.jpg'),
          desc: '35讲-进阶基于Python3.X的Selenium自动化测试',
          teacher: '讲师：李晓鹏',
          price: '￥440.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/6631',
          img: require('@/assets/img/topnav/edu/weekUpdate/img3.jpg'),
          desc: '35讲-进阶基于Python3.X的Selenium自动化测试',
          teacher: '讲师：李晓鹏',
          price: '￥440.00'
        },
        {
          link: 'https://edu.csdn.net/course/detail/6631',
          img: require('@/assets/img/topnav/edu/weekUpdate/img3.jpg'),
          desc: '35讲-进阶基于Python3.X的Selenium自动化测试',
          teacher: '讲师：李晓鹏',
          price: '￥440.00'
        }
      ],
      weekTab1: 'weekTab1',
      weekTab2: 'weekTab2',
      weekTab3: 'weekTab3',
      week1: true,
      week2: false,
      week3: false
    }
  },
  methods: {
    weekTabDisplay (param) {
      if (param === 'weekTab1') {
        this.week1 = true
        this.week2 = false
        this.week3 = false
        $('.week1').addClass('active')
        $('.week2').removeClass('active')
        $('.week3').removeClass('active')
      }
      if (param === 'weekTab2') {
        this.week1 = false
        this.week2 = true
        this.week3 = false
        $('.week1').removeClass('active')
        $('.week2').addClass('active')
        $('.week3').removeClass('active')
      }
      if (param === 'weekTab3') {
        this.week1 = false
        this.week2 = false
        this.week3 = true
        $('.week1').removeClass('active')
        $('.week2').removeClass('active')
        $('.week3').addClass('active')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.weekUpdateWrapper
  width 1140px
  padding 0 15px
  margin 0 auto 30px auto
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
    .titleRight
      position absolute
      left 130px
      font-size 14px
      height 31px
      ul
        height 31px
        line-height 31px
        li
          display inline-block
          margin 0 16px
          padding 0 8px
          font-size 14px
          position relative
        .active
          span:before
            content ''
            width 100%
            height 3px
            position absolute
            bottom 0
            left 0
            background #e44859
  .content
    margin 16px 0
    .weekListWrapper
      .weekItem:nth-child(5)
        margin-right 0
      .weekItem
        position relative
        width 208px
        height 267px
        float left
        font-size 14px
        margin-right 22.5px
        border 1px solid #e4e4e4
        border-radius 3px
        .weekLink
          display block
          height 100%
          width 100%
          color #333
          text-decoration none
          .weekImg
            width 100%
            height auto
          .weekDesc
            height 44px
            margin 10px 0
            padding 0 10px
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            overflow hidden
          &:hover
            color #cc0000
          .weekTeacher
            padding 0 10px
            margin-bottom 10px
            font-size 14px
            color #999
          .weekPrice
            position absolute
            bottom 10px
            left 0
            width 100%
            padding 0 10px
            font-size 18px
            color #e44859
</style>
