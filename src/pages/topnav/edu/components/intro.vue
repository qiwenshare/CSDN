<template>
  <div class="introWrapper">
    <swiper class="bgSwiper" :options="swiperOption">
      <!-- slides -->
      <swiper-slide class="slide" v-for="(item,index) of bgSwiperList" :key="index">
        <div class="swipe-img" :style="item"></div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="classifyCourse">
      <ul class="courseList">
        <li
          v-for="(item,index) of courseList"
          :key="index"
          class="courseItem"
          :class="item.name"
          @mouseenter="courseActive(item.title)"
          @mouseleave="courseDefault(item.title)"
        >
          <div class="itemContent">
            <h4 class="contentTitle">{{item.title}}</h4>
            <ul class="contentList">
              <li class="contentItem">{{item.content1}}</li>
              <li class="contentItem">{{item.content2}}</li>
              <li class="contentItem">{{item.content3}}</li>
            </ul>
          </div>
          <span class="iconfont forward">&#xe637;</span>
        </li>
      </ul>
    </div>
    <div
      class="courseDetail"
      v-for="(item,index) of courseDetailList"
      :key="index"
      :class="item.name"
      @mouseenter="courseActive(item.title)"
      @mouseleave="courseDefault(item.title)"
    >
      <div class="detailTop">
        <h4 class="title">{{item.title}}</h4>
        <ul class="courseNameList">
          <li class="courseNameItem" v-for="(item,index) of item.courseName" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="detailBottom">
        <h4 class="relatedCourse">相关课程</h4>
        <ul class="essayList">
          <li class="essayItem" v-for="(item,index) of item.courseEssay" :key="index">
            <span class="iconfont essayIcon">&#xe65a;</span>
            {{item}}
          </li>
        </ul>
      </div>
    </div>
    <div class="notice">
      <ul class="noticeTitle">
        <li class="titleLeft titleItem" @click="show(clickLeft)">学院要闻</li>
        <li class="titleRight titleItem active" @click="show(clickRight)">学员优惠</li>
      </ul>
      <ul class="noticeContent">
        <li class="contentLeft" v-show="showLeft">
          <ul class="leftList">
            <li v-for="(item,index) of contentLeftList" class="leftItem" :key="index">
              <span class="iconfont">&#xe637;</span>
              <a class="itemLink" :href="item.itemUrl" target="_blank">{{item.text}}</a>
            </li>
          </ul>
        </li>
        <li class="contentRight" v-show="showRight">
          <h1 class="vipRight">会员特权</h1>
          <ul class="rightList">
            <li v-for="(item,index) of contentRightList" class="rightItem" :key="index">
              <div class="iconWrapper" :class="item.name">
                <span class="iconfont" v-html="item.icon"></span>
              </div>
              <p>{{item.text}}</p>
            </li>
          </ul>
          <div class="vipDetail">会员详情</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
      bgSwiperList: [
        {
          backgroundImage:
            'url(' +
            require('@/assets/img/topnav/edu/bgSwiper/swiperImg1.jpg') +
            ') ',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
        {
          backgroundImage:
            'url(' +
            require('@/assets/img/topnav/edu/bgSwiper/swiperImg2.jpg') +
            ') ',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
        {
          backgroundImage:
            'url(' +
            require('@/assets/img/topnav/edu/bgSwiper/swiperImg3.jpg') +
            ') ',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
        {
          backgroundImage:
            'url(' +
            require('@/assets/img/topnav/edu/bgSwiper/swiperImg4.jpg') +
            ') ',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
        {
          backgroundImage:
            'url(' +
            require('@/assets/img/topnav/edu/bgSwiper/swiperImg5.jpg') +
            ') ',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        autoplay: true,
        effect: 'fade',
        loop: true
      },
      courseList: [
        {
          name: 'aiLeft',
          title: '人工智能',
          content1: '机器学习',
          content2: '深度学习',
          content3: '计算机视觉'
        },
        {
          name: 'langLeft',
          title: '编程语言',
          content1: 'C/C++',
          content2: 'Java',
          content3: 'Python'
        },
        {
          name: 'examLeft',
          title: '考试认证',
          content1: '华为认证',
          content2: '思科认证',
          content3: '软考'
        },
        {
          name: 'mobileLeft',
          title: '移动开发',
          content1: 'iOS',
          content2: '微信开发',
          content3: 'Swift'
        },
        {
          name: 'cloudLeft',
          title: '云计算/大数据',
          content1: 'Hadoop',
          content2: 'Docker/K8S',
          content3: 'Spark'
        },
        {
          name: 'otherLeft',
          title: '其他课程',
          content1: '系统/网络/运维',
          content2: '数据库',
          content3: '区块链'
        }
      ],
      courseDetailList: [
        {
          name: 'ai',
          title: '人工智能',
          courseName: [
            '机器学习',
            '深度学习',
            '语音识别',
            '计算机视觉',
            'NLP',
            '强化学习'
          ],
          courseEssay: [
            'Python+OpenCV计算机视觉',
            '教学案例：使用高通骁龙™开发工具进行功率及性能改善',
            '达观数据个性化推荐系统实践',
            'PythonNLP情感识别项目实战教程（源码+数据集）',
            '智能视频监控中的目标检测与跟踪视频教学'
          ]
        },
        {
          name: 'lang',
          title: '编程语言',
          courseName: [
            'C/C++',
            'Java',
            'C#',
            'Object',
            'Python',
            '.NET',
            'Go语言',
            'PHP',
            'Ruby/Rails',
            'Matlab',
            '其他'
          ],
          courseEssay: [
            'VC++ socket编程核心技术与项目实践',
            'C语言入门到高阶--面试题讲解',
            'C语言入门到高阶--递归算法与 Windows 趣味实战项目',
            'C语言入门到高阶--函数与递归视频精讲',
            'C语言入门到高阶--应用循环与Windows概念'
          ]
        },
        {
          name: 'exam',
          title: '考试认证',
          courseName: [
            '软考',
            'Linux认证',
            '华为认证',
            '思科认证',
            '微软认证',
            '项目管理',
            'H3C认证',
            '计算机等级考试',
            '其他'
          ],
          courseEssay: [
            '2019软考系统集成项目管理工程师应用技术历年真题详解视频课程',
            '2019年软考系统集成项目管理工程师基础知识历年真题详解软考视频教程',
            '2019年软考系统集成项目管理工程师应用技术软考视频教程',
            '2019年软考系统集成项目管理工程师基础知识（下）软考视频教程',
            '2019年软考系统集成项目管理工程师基础知识（上）软考视频教程'
          ]
        },
        {
          name: 'mobile',
          title: '移动开发',
          courseName: [
            '手游开发',
            'iOS',
            '微信开发',
            'Swift',
            'Android',
            'Webapp',
            'ReactNative',
            'Cordova',
            '其他'
          ],
          courseEssay: [
            'React项目',
            'flutter开发之dart语言',
            'android高级开发知识和实战技巧',
            'iOS开发教程之OC语言',
            '3G Android实战开发从入门到精通'
          ]
        },
        {
          name: 'cloud',
          title: '云计算/大数据',
          courseName: [
            'Spark',
            'Docker/K8S',
            'Hadoop',
            'OpenStack',
            '云计算基础架构',
            '虚拟化技术',
            '云平台',
            '大数据',
            'ELK',
            '其他'
          ],
          courseEssay: [
            'Spring Boot+Dubbo2.6+Redis+Myql+Zookeeper分布式微服务整合班',
            '大数据技术',
            '大数据之JavaWeb核心编程',
            '大数据之Java基础核心编程',
            '网站渠道流量实时日志分析案例'
          ]
        },
        {
          name: 'other',
          title: '其他课程',
          courseName: [
            '研发管理',
            '系统/网络/运维',
            '数据库',
            '游戏开发',
            '设计制作',
            '智能硬件/物联网',
            '大学课程',
            '产品经理',
            '信息安全',
            '区块链'
          ],
          courseEssay: [
            'Python+OpenCV计算机视觉',
            'Spring Boot+Dubbo2.6+Redis+Myql+Zookeeper分布式微服务整合班',
            'VC++ socket编程核心技术与项目实战',
            'C语言入门到高阶-- 面试题讲解',
            'C语言入门到高阶--递归算法与 Windows 趣味实战项目'
          ]
        }
      ],
      contentLeftList: [
        {
          text: '免费直播：Go语言打造个人博客系统',
          itemUrl: 'https://edu.csdn.net/huiyiCourse/detail/942?utm_source=link'
        },
        {
          text: '基于keras的fasterRCNN实现视频教程',
          itemUrl: 'https://edu.csdn.net/course/detail/9182?utm_source=banner'
        },
        { text: 'CSDN学院帮助文档', itemUrl: 'https://edu.csdn.net/help' },
        {
          text: 'CSDN学院1月视频教程好评榜',
          itemUrl: 'https://blog.csdn.net/CSDNedu/article/details/85786458'
        },
        {
          text: '开发者社群震撼来袭！',
          itemUrl: 'https://blog.csdn.net/CSDNedu/article/details/84327908'
        },
        {
          text: '7周Spring Cloud微服务架构项目实战',
          itemUrl: 'https://edu.csdn.net/course/detail/9995?utm_source=link'
        },
        {
          text: '2019年人工智能发展趋势！',
          itemUrl: 'https://edu.csdn.net/topic/ai30?utm_source=link'
        },
        {
          text: '优惠套餐选购入口！',
          itemUrl: 'https://edu.csdn.net/combos?utm_source=link'
        },
        {
          text: 'python学习路线免费领！',
          itemUrl: 'https://edu.csdn.net/topic/python115?utm_source=link'
        },
        {
          text: '142讲玩转【Spring Boot 分布式电商】开发',
          itemUrl: 'https://edu.csdn.net/course/detail/10276?utm_source=link'
        }
      ],
      contentRightList: [
        { name: 'item1', text: '千门专享课程免费看', icon: '&#xe690;' },
        { name: 'item2', text: '精品课程每月免费兑', icon: '&#xe6d7;' },
        { name: 'item3', text: '课程低至8折', icon: '&#xe602;' },
        { name: 'item4', text: '600次下载特权', icon: '&#xe604;' }
      ],
      clickLeft: 'left',
      clickRight: 'right',
      showLeft: false,
      showRight: true
    }
  },
  methods: {
    // 此处代码逻辑有问题，结构待修改
    courseActive (param) {
      if (param === '人工智能') {
        $('.ai').css('display', 'block')
        $('.aiLeft').css('background', '#b62c3c')
      }
      if (param === '编程语言') {
        $('.lang').css('display', 'block')
        $('.langLeft').css('background', '#b62c3c')
      }
      if (param === '考试认证') {
        $('.exam').css('display', 'block')
        $('.examLeft').css('background', '#b62c3c')
      }
      if (param === '移动开发') {
        $('.mobile').css('display', 'block')
        $('.mobileLeft').css('background', '#b62c3c')
      }
      if (param === '云计算/大数据') {
        $('.cloud').css('display', 'block')
        $('.cloudLeft').css('background', '#b62c3c')
      }
      if (param === '其他课程') {
        $('.other').css('display', 'block')
        $('.otherLeft').css('background', '#b62c3c')
      }
    },
    courseDefault (param) {
      if (param === '人工智能') {
        $('.ai').css('display', 'none')
        $('.aiLeft').css('background', '#cc3848')
      }
      if (param === '编程语言') {
        $('.lang').css('display', 'none')
        $('.langLeft').css('background', '#cc3848')
      }
      if (param === '考试认证') {
        $('.exam').css('display', 'none')
        $('.examLeft').css('background', '#cc3848')
      }
      if (param === '移动开发') {
        $('.mobile').css('display', 'none')
        $('.mobileLeft').css('background', '#cc3848')
      }
      if (param === '云计算/大数据') {
        $('.cloud').css('display', 'none')
        $('.cloudLeft').css('background', '#cc3848')
      }
      if (param === '其他课程') {
        $('.other').css('display', 'none')
        $('.otherLeft').css('background', '#cc3848')
      }
    },
    show (param) {
      if (param === 'left') {
        this.showLeft = true
        this.showRight = false
        $('.titleLeft').addClass('active')
        $('.titleRight').removeClass('active')
      }
      if (param === 'right') {
        this.showLeft = false
        this.showRight = true
        $('.titleLeft').removeClass('active')
        $('.titleRight').addClass('active')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.introWrapper
  width 100%
  height 400px
  margin-bottom 30px
  position relative
  left 0
  top 0
  .bgSwiper
    width 100%
    height 400px
    position relative
    left 0
    top 0
    z-index 0
    .slide
      width 100%
      height 400px
      .swipe-img
        width 100%
        height 400px
    .swiper-pagination
      position absolute
      bottom 20px
      &>>> .swiper-pagination-bullet
        background #fff
        opacity 1
        width 20px
        height 6px
        border-radius 2px
        margin-right 12px
      &>>> .swiper-pagination-bullet-active
        width 20px
        height 6px
        background #ee5e53
  .classifyCourse
    width 262px
    height 100%
    position absolute
    top 0
    left 100px
    background #cc3848
    color #fff
    .courseList
      .courseItem
        display flex
        padding 0 10px 0 20px
        cursor pointer
        &:last-child
          .itemContent
            border-bottom none
        .itemContent
          width 222px
          padding 6px 0 10px 0
          border-bottom 1px dashed #e88b96
          .contentTitle
            height 34px
            line-height 34px
            font-size 14px
          .contentList
            display flex
            font-size 13px
            line-height 15px
            .contentItem
              min-width 59px
              margin-right 6px
              &:last-child
                margin-right 0
        .forward
          color #e88b96
          font-size 10px
          verticalMiddle()
  .courseDetail
    width 400px
    height 393px
    padding-bottom 7px
    position absolute
    top 0
    left 362px
    background #b62c3c
    color #fff
    display none
    .detailTop
      min-height 175px
      .title
        font-size 14px
        padding 24px 0 16px 28px
        line-height 14px
      .courseNameList
        padding 0 28px
        width 344px
        color #f6e7e7
        font-size 14px
        line-height 14px
        .courseNameItem
          width 80px
          padding-bottom 14px
          margin-right 8px
          float left
          &:nth-child(4n)
            margin-right 0
    .detailBottom
      .relatedCourse
        font-size 14px
        padding 24px 0 16px 28px
        line-height 14px
      .essayList
        padding 0 28px
        width 344px
        .essayItem
          color #f6e7e7
          padding-bottom 6px
          font-size 14px
          ellipsis()
          .essayIcon
            font-size 12px
            margin-right 6px
  .notice
    width 260px
    height 340px
    margin-top 30px
    position absolute
    right 100px
    top 0
    background #161b29
    color #fff
    .noticeTitle
      height 35px
      line-height 35px
      display flex
      .titleItem
        flex 1
        text-align center
        font-size 14px
        cursor pointer
      .titleLeft, .titleRight
        border-bottom 1px solid #71778b
        border-top 2px solid #1b2032
      .active
        background #161b29
        border-bottom 1px solid #161b29
        border-top 2px solid #d7000f
        border-left 1px solid #71778b
        border-right 1px solid #71778b
    .noticeContent
      height 305px
      border-left 1px solid #71778b
      border-right 1px solid #71778b
      border-bottom 1px solid #71778b
      .contentLeft
        font-size 14px
        .leftList
          padding 20px 10px
          .leftItem
            width 238px
            height 24px
            line-height 24px
            display flex
            .iconfont
              font-size 10px
              margin-right 6px
            .itemLink
              color #fff
              ellipsis()
              &:link
                text-decoration none
              &:hover
                color #d7000f
      .contentRight
        width 100%
        .vipRight
          height 42px
          line-height 42px
          text-align center
          font-size 20px
          font-weight 600
        .rightList
          width 240px
          height 200px
          padding 0 10px
          position relative
          .rightItem
            text-align center
            padding 5px 0
            &:nth-child(1)
              position absolute
              left 0
              top 0
              right 120px
              bottom 100px
            &:nth-child(2)
              position absolute
              right 0
              top 0
              left 120px
              bottom 100px
            &:nth-child(3)
              position absolute
              left 0
              bottom 0
              top 100px
              right 120px
            &:nth-child(4)
              position absolute
              right 0
              bottom 0
              top 100px
              left 120px
            .iconWrapper
              width 54px
              height 54px
              line-height 54px
              border-radius 6px
              margin 0 auto
              box-shadow 0 6px 12px 0 rgba(32, 33, 39, 0.08)
              .iconfont
                font-size 24px
            .item1
              background-image linear-gradient(135deg, #ad2ab9 0, #ff618c 100%)
            .item2
              background-image linear-gradient(135deg, #ff9462 0, #ffde45 100%)
            .item3
              background-image linear-gradient(135deg, #745ded 0, #34b2f7 100%)
            .item4
              background-image linear-gradient(135deg, #5ded9c 0, #34b2f7 100%)
            p
              font-size 12px
              padding-top 5px
              height 24px
              line-height 24px
        .vipDetail
          width 210px
          height 42px
          line-height 42px
          text-align center
          font-size 20px
          font-weight 400
          margin 5px auto 0 auto
          background-image linear-gradient(135deg, #ff8e64 0, #ffe641 100%)
          border-radius 6px
</style>
