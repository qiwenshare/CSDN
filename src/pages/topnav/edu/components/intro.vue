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
        <li v-for="(item,index) of courseList" :key="index" class="courseItem" :class="item.name" @mouseenter="courseActive(item.title)" @mouseleave="courseDefault(item.title)">
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
    <div class="courseDetail" v-for="(item,index) of courseDetailList" :key="index" :class="item.name">
      <div class="detailTop">
        <h4 class="title">{{item.title}}</h4>
        <ul class="courseNameList">
          <li class="courseNameItem" v-for="(item,index) of item.courseName" :key="index">
            {{item}}
          </li>
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
  </div>
</template>

<script>
export default {
  name:'intro',
  data () {
    return {
      bgSwiperList:[
        { backgroundImage:"url(" + require("@/assets/img/topnav/edu/bgSwiper/swiperImg1.jpg") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        { backgroundImage:"url(" + require("@/assets/img/topnav/edu/bgSwiper/swiperImg2.jpg") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        { backgroundImage:"url(" + require("@/assets/img/topnav/edu/bgSwiper/swiperImg3.jpg") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        { backgroundImage:"url(" + require("@/assets/img/topnav/edu/bgSwiper/swiperImg4.jpg") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        { backgroundImage:"url(" + require("@/assets/img/topnav/edu/bgSwiper/swiperImg5.jpg") + ") ",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }
      ],
      swiperOption:{
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        autoplay:true,
        loop:true
      },
      courseList:[
        { name:'aiLeft',
          title:'人工智能',
          content1:'机器学习',
          content2:'深度学习',
          content3:'计算机视觉'
        },
        { name:'langLeft',
          title:'编程语言',
          content1:'C/C++',
          content2:'Java',
          content3:'Python'
        },
        { name:'examLeft',
          title:'考试认证',
          content1:'华为认证',
          content2:'思科认证',
          content3:'软考'
        },
        { name:'mobileLeft',
          title:'移动开发',
          content1:'iOS',
          content2:'微信开发',
          content3:'Swift'
        },
        { name:'cloudLeft',
          title:'云计算/大数据',
          content1:'Hadoop',
          content2:'Docker/K8S',
          content3:'Spark'
        },
        { name:'otherLeft',
          title:'其他课程',
          content1:'系统/网络/运维',
          content2:'数据库',
          content3:'区块链'
        },
      ],
      courseDetailList:[
        { name:'ai',
          title:'人工智能',
          courseName:['机器学习','深度学习','语音识别','计算机视觉','NLP','强化学习'],
          courseEssay:[
            'Python+OpenCV计算机视觉',
            '教学案例：使用高通骁龙™开发工具进行功率及性能改善',
            '达观数据个性化推荐系统实践',
            'PythonNLP情感识别项目实战教程（源码+数据集）',
            '智能视频监控中的目标检测与跟踪视频教学'
          ]
        },
        { name:'lang',
          title:'编程语言',
          courseName:['C/C++','Java','C#','Object','Python','.NET','Go语言','PHP','Ruby/Rails','Matlab','其他'],
          courseEssay:[
            'VC++ socket编程核心技术与项目实践',
            'C语言入门到高阶--面试题讲解',
            'C语言入门到高阶--递归算法与 Windows 趣味实战项目',
            'C语言入门到高阶--函数与递归视频精讲',
            'C语言入门到高阶--应用循环与Windows概念'
          ]
        },
        { name:'examLeft',
          title:'考试认证',
          courseName:['软考','Linux认证','华为认证','思科认证','微软认证','项目管理','H3C认证','计算机等级考试','其他'],
          courseEssay:[
            '2019软考系统集成项目管理工程师应用技术历年真题详解视频课程',
            '2019年软考系统集成项目管理工程师基础知识历年真题详解软考视频教程',
            '2019年软考系统集成项目管理工程师应用技术软考视频教程',
            '2019年软考系统集成项目管理工程师基础知识（下）软考视频教程',
            '2019年软考系统集成项目管理工程师基础知识（上）软考视频教程'
          ]
        },
        { name:'mobileLeft',
          title:'移动开发',
          courseName:['手游开发','iOS','微信开发','Swift','Android','Webapp','ReactNative','Cordova','其他'],
          courseEssay:[
            'React项目',
            'flutter开发之dart语言',
            'android高级开发知识和实战技巧',
            'iOS开发教程之OC语言',
            '3G Android实战开发从入门到精通'
          ]
        },
        { name:'cloudLeft',
          title:'云计算/大数据',
          courseName:['Spark','Docker/K8S','Hadoop','OpenStack','云计算基础架构','虚拟化技术','云平台','大数据','ELK','其他'],
          courseEssay:[
            'Spring Boot+Dubbo2.6+Redis+Myql+Zookeeper分布式微服务整合班',
            '大数据技术',
            '大数据之JavaWeb核心编程',
            '大数据之Java基础核心编程',
            '网站渠道流量实时日志分析案例'
          ]
        },
        { name:'ai',
          title:'人工智能',
          courseName:['研发管理','系统/网络/运维','数据库','游戏开发','设计制作','智能硬件/物联网','大学课程','产品经理','信息安全','区块链'],
          courseEssay:[
            'Python+OpenCV计算机视觉',
            'Spring Boot+Dubbo2.6+Redis+Myql+Zookeeper分布式微服务整合班',
            'VC++ socket编程核心技术与项目实战',
            'C语言入门到高阶-- 面试题讲解',
            'C语言入门到高阶--递归算法与 Windows 趣味实战项目'
          ]
        }
      ]
    }
  },
  methods:{
    //此处代码逻辑有问题，结构待修改
    courseActive(param){
      if(param == '人工智能'){
        $('.ai').css("display",'block');
        $('.aiLeft').css("background",'#b62c3c');
      }
      if(param == '编程语言'){
        $('.ai').css("display",'block');
        $('.aiLeft').css("background",'#b62c3c');
      }
      if(param == '考试认证'){
        $('.ai').css("display",'block');
        $('.aiLeft').css("background",'#b62c3c');
      }
      if(param == '移动开发'){
        $('.ai').css("display",'block');
        $('.aiLeft').css("background",'#b62c3c');
      }
      if(param == '云计算/大数据'){
        $('.ai').css("display",'block');
        $('.aiLeft').css("background",'#b62c3c');
      }
      if(param == '其他课程'){
        $('.ai').css("display",'block');
        $('.aiLeft').css("background",'#b62c3c');
      }
    },
    courseDefault(param){
      if(param == '人工智能'){
        $('.ai').css("display",'none');
        $('.aiLeft').css("background",'#cc3848');
      }
      if(param == '编程语言'){
        $('.ai').css("display",'none');
        $('.aiLeft').css("background",'#cc3848');
      }
      if(param == '考试认证'){
        $('.ai').css("display",'none');
        $('.aiLeft').css("background",'#cc3848');
      }
      if(param == '移动开发'){
        $('.ai').css("display",'none');
        $('.aiLeft').css("background",'#cc3848');
      }
      if(param == '云计算/大数据'){
        $('.ai').css("display",'none');
        $('.aiLeft').css("background",'#cc3848');
      }
      if(param == '其他课程'){
        $('.ai').css("display",'none');
        $('.aiLeft').css("background",'#cc3848');
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl"
.introWrapper
  width 100%
  height 400px
  position relative
  left 0
  top 0
  .bgSwiper
    width 100%
    height 400px
    position relative
    left 0
    top 0
    z-index:0
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
        height:6px
        border-radius 2px
        margin-right 12px
      &>>> .swiper-pagination-bullet-active
        width 20px
        height:6px
        background #ee5e53
  .classifyCourse
    width 262px
    height 100%
    position absolute
    top:0
    left:100px
    background: #cc3848;
    color:#fff
    .courseList
      .courseItem
        display flex
        padding:0 10px 0 20px
        &:last-child
          .itemContent
            border-bottom none
        .itemContent
          width 222px
          padding:6px 0 10px 0
          border-bottom 1px dashed #e88b96
          .contentTitle
            height:34px
            line-height 34px
            font-size:14px
          .contentList
            display flex
            font-size:13px
            line-height 15px
            .contentItem
              min-width: 59px;
              margin-right: 6px;
              &:last-child
                margin-right:0
        .forward
          color:#e88b96
          font-size:10px
          verticalMiddle()
  .courseDetail
    width 400px
    height 393px
    padding-bottom 7px
    position absolute
    top:0
    left:362px
    background: #b62c3c;
    color:#fff
    display none
    .detailTop
      min-height:175px
      .title
        font-size: 14px;
        padding: 24px 0 16px 28px;
        line-height: 14px;
      .courseNameList
        padding: 0 28px
        width:344px
        color: #f6e7e7;
        font-size:14px
        line-height 14px
        .courseNameItem
          width 80px
          padding-bottom:14px
          margin-right:8px
          float:left
          &:nth-child(4n)
            margin-right:0
    .detailBottom
      .relatedCourse
        font-size: 14px;
        padding: 24px 0 16px 28px;
        line-height: 14px;
      .essayList
        padding: 0 28px
        width:344px
        .essayItem
          color: #f6e7e7;
          padding-bottom: 6px;
          font-size: 14px;
          ellipsis()
          .essayIcon
            font-size:12px
            margin-right:6px
</style>
