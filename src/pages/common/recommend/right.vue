<template>
  <div class="rightWrapper" id="rightBar">
    <swiper class="advertisement1" :options="swiperOption1" v-if="fromLink == 'homepage'">
      <!-- slides -->
      <swiper-slide class="slide" v-for="(item,index) of swiperImgList1" :key="index">
        <img class="swipe-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="officialBlog" v-if="fromLink == 'blog'">
      <a class="blogLink" href="https://blog.csdn.net/blogdevteam/">
        <img class="headImg" src="@/assets/img/topnav/blog/right/officialBlog/blogdevteam.jpg" />
        <h3 class="title">CSDN官方博客</h3>
        <div class="btn">点击进入</div>
      </a>
    </div>
    <div class="blogger" v-if="fromLink == 'blog'">
      <div class="bloggerTitle">
        <span>|</span>
        <h3>博客专家</h3>
        <a>专家申请</a>
      </div>
      <ul class="bloggerList">
        <li v-for="(item,index) of bloggerList" :key="index" class="bloggerItem border">
          <div class="itemTop">
            <img :src="item.imgUrl" class="headImg" />
            <ul class="info">
              <li class="infoTop">
                <span class="name">{{item.name}}</span>
                <span class="iconfont edit">&#xe649;</span>
              </li>
              <li class="infoBottom">
                <span class="profession">{{item.profession}}</span>
                <span class="essayCount">{{item.essayCount}}篇</span>
              </li>
            </ul>
          </div>
          <div class="itemBottom">{{item.desc}}</div>
        </li>
      </ul>
    </div>
    <div class="blogMove" v-if="fromLink == 'blog'">
      <img src="@/assets/img/topnav/blog/right/blogMove.png" />
    </div>
    <div class="advertisement1ExHome" v-if="fromLink != 'homepage'">
      <a class="advLink">
        <img :src="a1ExHomeImgUrl" />
        <div class="advertisementIcon">广告</div>
      </a>
    </div>
    <div class="cloudchainCount" v-if="recommendRight == 'navBlockChain'">
      <h2 class="countTitle border-bottom">CSDN区块链社区</h2>
      <ul class="countList">
        <li v-for="(item,index) of countList" :key="index" class="countItem">
          <div class="itemLeft">
            {{item.left.name}}
            <span>{{item.left.num}}</span>
          </div>
          <div class="itemRight">
            {{item.right.name}}
            <span>{{item.right.num}}</span>
          </div>
        </li>
        <div class="wechatWrapper">
          关注区块链大本营:
          <span class="iconfont wechat">&#xe660;</span>
        </div>
      </ul>
    </div>
    <div class="cloudchainTheme" v-if="recommendRight == 'navBlockChain'">
      <h3 class="ThemeTitle">
        热门专题
        <a class="more">查看更多</a>
      </h3>
      <ul class="ThemeContent">
        <li class="ThemeItem" v-for="(item,index) of themeList" :key="index">
          <a class="ThemeLeft">
            <img class="ThemeImg" :src="item.imgUrl" />
            <p class="ThemeImgName">{{item.imgName}}</p>
          </a>
          <div class="ThemeDesc">
            <div class="DescTop desc">
              <span class="iconfont circle">&#xe7a5;</span>
              <p>{{item.descTop}}</p>
            </div>
            <div class="DescBottom desc">
              <span class="iconfont circle">&#xe7a5;</span>
              <p>{{item.descBottom}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="cloudchainCalendar" v-if="recommendRight == 'navBlockChain'">
      <h3 class="calendarTitle">
        活动日历
        <a class="more">查看更多</a>
      </h3>
      <ul class="calendarContent">
        <li v-for="(item,index) of ccCalendarList" :key="index" class="calendarItem">
          <div class="calendarTop">
            <div class="date">
              <span class="month">{{item.month}}月</span>
              <span class="day">{{item.day}}日</span>
            </div>
            <div class="status">{{item.status}}</div>
          </div>
          <div class="calendarBottom">{{item.desc}}</div>
        </li>
      </ul>
    </div>
    <div class="cloudchainGitchat" v-if="recommendRight == 'navBlockChain'">
      <h3 class="gitchatTitle">
        图文课
        <a class="more">查看更多</a>
      </h3>
      <ul class="gitchatContent">
        <li class="gitchatItem" v-for="(item,index) of gitchatList" :key="index">
          <a class="gitchatLeft">
            <img class="gitchatImg" :src="item.imgUrl" />
          </a>
          <div class="gitchatDesc">
            <div class="DescName desc">{{item.descName}}</div>
            <div class="DescBottom desc">
              <span>{{item.person}}</span>
              <p>{{item.descBottom}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="todayRecommendWrapper" v-if="recommendRight != 'navBlockChain'">
      <div class="todayRecommendTitle">
        <span>|</span>
        <h3>今日推荐</h3>
      </div>
      <ul class="todayRecommendList">
        <li v-for="(item,index) of todayRecommendList" :key="index" class="listItemWrapper">
          <a :class="item.name">
            <img :src="item.imgUrl" />
            <p>{{item.desc}}</p>
          </a>
        </li>
      </ul>
      <div class="todayRecommendActive border-top" v-if="fromLink != 'blog'">
        <a v-for="(item,index) of todayRecommendActiveList" :key="index" :class="item.name">
          <span>{{item.desc}}</span>
        </a>
      </div>
    </div>
    <div class="voteWrapper" v-if="recommendRight != 'navBlockChain' && fromLink != 'blog'">
      <div class="voteImg" :style="voteBackground">
        <a>
          <img class="viewpoint" src="@/assets/img/common/right/viewpoint.png" />
          <h3>人工智能究竟是不是“虚假式”繁荣？</h3>
        </a>
      </div>
      <div class="voteNum border-bottom">
        <dl class="side side1">
          <dt>正</dt>
          <dd>34%</dd>
        </dl>
        <div class="voteButton">
          <a type="button">投票参与</a>
        </div>
        <dl class="side side2">
          <dt>反</dt>
          <dd>66%</dd>
        </dl>
      </div>
      <ul class="voteEssay">
        <li>
          <span class="iconfont rightIcon">&#xe6ed;</span>
          <a>普惠AI时代，AI能力不足的云服务商是否还有生存空间？</a>
        </li>
        <li>
          <span class="iconfont rightIcon">&#xe6ed;</span>
          <a>未来五年，不懂人工智能的程序员会被淘汰吗？</a>
        </li>
      </ul>
    </div>
    <div class="magazineWrapper" v-if="recommendRight != 'navBlockChain' && fromLink != 'blog'">
      <h3>
        <span class="magazineTitle">GitChat极客书</span>
        <div class="magazineOpera">
          <span class="operaText">我要订阅</span>
          <div class="swiper-button-prev swiper-button" slot="button-prev">
            <span class="iconfont prev">&#xe8ef;</span>
          </div>
          <div class="swiper-button-next swiper-button" slot="button-next">
            <span class="iconfont next">&#xe8f0;</span>
          </div>
        </div>
      </h3>
      <swiper class="magazineSwiper" :options="swiperOption2">
        <swiper-slide class="slide" v-for="(item,index) of swiperImgList2" :key="index">
          <img class="swipe-img" :src="item.imgUrl" />
          <div class="swipe-text">
            <h4>{{item.title}}</h4>
            <p>{{item.content}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="advertisement2" v-if="recommendRight != 'navBlockChain'">
      <img src="@/assets/img/common/right/advertisement2.png" />
      <div class="advertisementIcon">广告</div>
    </div>
    <div class="activityCalendar" v-if="recommendRight != 'navBlockChain' && fromLink != 'blog'">
      <div class="activityCalendarTitle">
        <span>|</span>
        <h3>活动日历</h3>
      </div>
      <ul class="activityCalendarList">
        <li v-for="(item,index) of activityCalendarList" :key="index" :class="item.name">
          <div class="activityDate">
            <span class="day">{{item.day}}</span>
            <span class="month">{{item.month}}月</span>
          </div>
          <div class="activityDesc">
            <a>
              <span class="desc">{{item.desc}}</span>
            </a>
            <span class="status">{{item.status}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="advertisement3">
      <img src="@/assets/img/common/right/advertisement3.png" />
      <div class="advertisementIcon">广告</div>
    </div>
    <div class="contactInfo">
      <div class="contactInfoTitle">
        <span>|</span>
        <h3>联系我们</h3>
      </div>
      <div class="customServiceCode">
        <a class="code wechat">
          <img src="@/assets/img/common/right/wechat.png" />
          <span>微信客服</span>
        </a>
        <a class="code qq">
          <img src="@/assets/img/common/right/qq.png" />
          <span>QQ客服</span>
        </a>
      </div>
      <div class="customServiceInfo border-top">
        <div class="service qq">
          <div>
            <span class="iconfont">&#xe628;</span>
            QQ客服
          </div>
          <div>
            <span class="iconfont">&#xe653;</span>
            kefu@csdn.net
          </div>
        </div>
        <div class="service forum">
          <div>
            <span class="iconfont">&#xe608;</span>
            客服论坛
          </div>
          <div>
            <span class="iconfont">&#xe692;</span>
            400-660-0108
          </div>
        </div>
        <p>工作时间 8:00-22:00</p>
      </div>
      <div class="copyrightInfo border-top">
        <p class="copyrightNav">
          <a>关于我们</a>|
          <a>招聘</a>|
          <a>广告服务</a>|
          <a>网站地图</a>
        </p>
        <p class="copyrightList">
          <a>
            <span class="iconfont">&#xe60b;</span>百度提供站内搜索&nbsp;京ICP证09002463号
          </a>
        </p>
        <p class="copyrightList">
          <a>©1999-2018 江苏乐知网络技术有限公司</a>
        </p>
        <p class="copyrightList">
          <a>江苏知之为计算机有限公司 北京创新乐知信息技术有限公司版权所有</a>
        </p>
      </div>
      <div class="reportInfo border-top">
        <p>
          <a>
            <span>网络110报警服务</span>
            <span>经营性网站备案信息</span>
          </a>
        </p>
        <p>
          <a>北京互联网违法和不良信息举报中心</a>
        </p>
        <p>
          <a>中国互联网举报中心</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommendRight',
  props: {
    fromLink: String,
    recommendRight: String
  },
  data () {
    return {
      bloggerList: [
        {
          imgUrl: require('@/assets/img/topnav/blog/right/blogger/headImg1.jpg'),
          name: 'boonya',
          profession: 'Java高级工程师',
          essayCount: '1080',
          desc: `君子一诺千金，我是一个自立乐观守信之人，事情做完了是本分做好了才是提高。在编程和项目管理方面至今已有 5 年多的经验，如：项目进度管理（里程碑控制 Office project、 UML 建模等）、需求设计、原型设计（ Viso、 Auxre RP）、功能详设、数据库设计（ Oracle、...`
        },
        {
          imgUrl: require('@/assets/img/topnav/blog/right/blogger/headImg2.jpg'),
          name: '西北白杨树',
          profession: '.net工程师',
          essayCount: '495',
          desc: `近四年.net开发经验，擅长C#，WPF编程。曾开发过“步步高学习管家”软件.擅长C#.NET开发。`
        },
        {
          imgUrl: require('@/assets/img/topnav/blog/right/blogger/headImg3.jpg'),
          name: 'mikyou',
          profession: 'Android开发工程师',
          essayCount: '118',
          desc: `本人爱好编程，乐于分享，追求和钻研新技术，热衷于Kotlin语言开发和函数式编程，目前就职于扇贝网，担任Android开发工程师。工作之余的爱好就是分享技术博客，希望可以和更多热爱技术的人一起探讨一起学习。`
        }
      ],
      a1ExHomeImgUrl: require('@/assets/img/common/right/a1ExHome/a1ExHome.jpg'),
      countList: [
        {
          left: { name: '总用户数', num: '180万' },
          right: { name: '总博文数', num: '56641' }
        },
        {
          left: { name: '上月博文数', num: '2305' },
          right: { name: '上月PV', num: '347万' }
        },
        {
          left: { name: '微信公众号订阅数', num: '36万' },
          right: { name: '', num: '' }
        }
      ],
      themeList: [
        {
          imgUrl: require('@/assets/img/common/right/blockchain/theme/themeImg1.png'),
          imgName: '沙龙',
          descTop: '香港站 | 区块链技术与金融应用',
          descBottom: '广州站 | 技术创新与生态构建'
        },
        {
          imgUrl: require('@/assets/img/common/right/blockchain/theme/themeImg2.png'),
          imgName: '链周刊',
          descTop: '第25期：为技术解开枷锁的那个人走了',
          descBottom: '第24期：Python告诉你：熊市将去，牛市要来'
        },
        {
          imgUrl: require('@/assets/img/common/right/blockchain/theme/themeImg3.png'),
          imgName: '人物志',
          descTop: '13岁创业，3块钱卖掉大把比特币，这是怎样的开挂人生',
          descBottom: '他是Intel视频业务老大，用谷歌视频还被要高价'
        },
        {
          imgUrl: require('@/assets/img/common/right/blockchain/theme/themeImg4.png'),
          imgName: '安全连载',
          descTop: '@程序员，如何淋漓尽致地敲出Solidity安全代码？',
          descBottom: '“危机四伏”的以太转账操作'
        },
        {
          imgUrl: require('@/assets/img/common/right/blockchain/theme/themeImg5.png'),
          imgName: '智变',
          descTop: 'Web3.0来了！玩法变了',
          descBottom: '区块链搅局！一场2.0模式，正侵蚀能源战场'
        }
      ],
      ccCalendarList: [
        {
          month: 11,
          day: 30,
          status: '香港',
          desc: '区块链技术与金融应用发展论坛·香港站'
        },
        {
          month: 12,
          day: 22,
          status: '北京',
          desc: 'CSDN Workshop零基础实战智能合约'
        },
        {
          month: 12,
          day: 26,
          status: '线上',
          desc: '直播 | Hyperledger Fabric多合约实战'
        }
      ],
      gitchatList: [
        {
          imgUrl: require('@/assets/img/common/right/blockchain/gitchat/person1.jpg'),
          descName: '区块链全景课',
          person: '丹华',
          descBottom: '数字货币分析师'
        },
        {
          imgUrl: require('@/assets/img/common/right/blockchain/gitchat/person2.jpg'),
          descName: '以太坊使用及代币开发实战',
          person: '朱智胜',
          descBottom: '创业公司CTO'
        },
        {
          imgUrl: require('@/assets/img/common/right/blockchain/gitchat/person3.jpg'),
          descName: '零基础学区块链和以太坊开发',
          person: '李宁',
          descBottom: '欧瑞科技创始人&CEO'
        },
        {
          imgUrl: require('@/assets/img/common/right/blockchain/gitchat/person4.jpg'),
          descName: '步步为营从智能合约到DApp',
          person: '李小雨',
          descBottom: '蛛点网络科技产品经理'
        },
        {
          imgUrl: require('@/assets/img/common/right/blockchain/gitchat/person5.jpg'),
          descName: '一起学：以太坊智能合约开发',
          person: '旷文杰',
          descBottom: '某区块链创业公司技术经理'
        }
      ],
      todayRecommendList: [
        {
          name: 'listItem',
          desc: '报名 | Workshop：零基础实战智能合约开发',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg1.jpg')
        },
        {
          name: 'listItem',
          desc: '比特币诈骗手法升级，从要钱到要命！',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg2.jpg')
        },
        {
          name: 'listItem',
          desc: '【资料】机器学习开源项目TOP精选',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg3.jpg')
        },
        {
          name: 'listItem',
          desc: '2018年下半年，别错过这些深度学习项目！',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg4.jpg')
        },
        {
          name: 'listItem',
          desc: 'Java 这一年：IntelliJ 称霸 IDE，',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg5.jpg')
        },
        {
          name: 'listItem',
          desc: 'Android 更加开放了！',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg6.jpg')
        },
        {
          name: 'listItem',
          desc: '21 天入门机器学习',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg7.jpg')
        },
        {
          name: 'listItem',
          desc: 'Java 工程师快速入门深度学习',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg8.jpg')
        },
        {
          name: 'listItem',
          desc: 'AI/Python/大数据/区块链开发者社群！',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg9.jpg')
        },
        {
          name: 'listItem',
          desc: '2019年人工智能发展趋势！',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg10.jpg')
        },
        {
          name: 'listItem',
          desc: '高通骁龙™开发者工具链介绍及性能优化',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg11.jpg')
        },
        {
          name: 'listItem',
          desc: '小米快应用专区',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg12.jpg')
        },
        {
          name: 'listItem',
          desc: '人工智能、机器学习和认知计算入门指南',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg13.jpg')
        },
        {
          name: 'listItem',
          desc: '迅雷链技术沙龙',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg14.jpg')
        },
        {
          name: 'listItem',
          desc: '百度技术专区',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg15.jpg')
        },
        {
          name: 'listItem',
          desc: 'UCan下午茶 2018',
          imgUrl: require('@/assets/img/common/right/todayRecommendImg16.jpg')
        }
      ],
      todayRecommendActiveList: [
        { name: 'quickApp', desc: '快应用大赛' },
        { name: 'intel', desc: '英特尔开发人员专区' },
        { name: 'huaweiCloud', desc: '华为云' },
        { name: 'tencentCloud', desc: '腾讯云技术社区' },
        { name: 'huaweiDeveloper', desc: '华为开发者专区' },
        { name: 'puyuanCloud', desc: '普元云计算' },
        { name: 'powerLinux', desc: 'PowerLinux技术社区' }
      ],
      // 投票背景图片
      voteBackground: {
        backgroundImage:
          'url(' + require('@/assets/img/common/right/voteImg.png') + ') ',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      activityCalendarList: [
        {
          name: 'act1',
          day: '10',
          month: '11',
          desc: '华为云数据库限时有奖评测活动',
          status: '线上'
        },
        {
          name: 'act2',
          day: '20',
          month: '12',
          desc: 'HUAWEI Developer Day 成都沙龙',
          status: '成都'
        },
        {
          name: 'act3',
          day: '21',
          month: '12',
          desc: 'Qualcomm LTE 物联网应用开发者大赛',
          status: '线上'
        },
        {
          name: 'act4',
          day: '22',
          month: '12',
          desc: 'CSDN Blockchain Workshop：零基础实战智能合约开发',
          status: '北京'
        },
        {
          name: 'act5',
          day: '26',
          month: '12',
          desc: '2018 OPPO开发者大会',
          status: '北京'
        }
      ],
      swiperOption1: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        autoplay: true,
        effect: 'fade',
        loop: true
      },
      swiperImgList1: [
        {
          imgUrl: require('@/assets/img/common/right/recommendRightImgSwiper/recommendRightImg1.jpg')
        },
        {
          imgUrl: require('@/assets/img/common/right/recommendRightImgSwiper/recommendRightImg2.jpg')
        },
        {
          imgUrl: require('@/assets/img/common/right/recommendRightImgSwiper/recommendRightImg3.jpg')
        },
        {
          imgUrl: require('@/assets/img/common/right/recommendRightImgSwiper/recommendRightImg4.jpg')
        },
        {
          imgUrl: require('@/assets/img/common/right/recommendRightImgSwiper/recommendRightImg5.jpg')
        }
      ],
      swiperOption2: {
        autoplay: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperImgList2: [
        {
          imgUrl: require('@/assets/img/common/right/magazineSwiper/magazineImg1.png'),
          title: '携程技术年度合集（上册）',
          content:
            '这本小书的内容来自携程技术中心微信公众号在 2017 年发布的文章。包含了架构、大数据、前端、安全、运维、云计算、数据库等领域，也包含了 2017 年携程技术沙龙上的干货内容。'
        },
        {
          imgUrl: require('@/assets/img/common/right/magazineSwiper/magazineImg2.png'),
          title: '深入浅出 Spring Boot 2.x',
          content:
            '本书内容紧扣互联网企业的实际要求，从全注解下 Spring 知识讲到 Spring Boot 的企业级开发，对于 Java 开发人员，尤其是初学 Spring Boot 的人员和需要从传统 Spring 转向 Spring Boot 开发的技术人员，'
        },
        {
          imgUrl: require('@/assets/img/common/right/magazineSwiper/magazineImg3.png'),
          title: 'Python 爬虫开发与项目实战',
          content:
            '本书从基本的爬虫原理开始讲解，通过介绍 Pthyon 编程语言和 Web 前端基础知识引领读者入门，之后介绍动态爬虫原理以及 Scrapy 爬虫框架，最后介绍大规模数据下分布式爬虫的设计以及 PySpider '
        },
        {
          imgUrl: require('@/assets/img/common/right/magazineSwiper/magazineImg4.png'),
          title: '深度学习入门：基于 Python 的理论与实现',
          content:
            '本书是深度学习真正意义上的入门书，深入浅出地剖析了深度学习的原理和相关技术。书中使用Python3，尽量不依赖外部库或工具，从基本的数学知识出发，带领读者从零创建一个经典的深度学'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.rightWrapper
  width 300px
  height 3300px
  z-index 2
  box-sizing border-box
  .advertisement1
    margin-bottom 8px
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
    width 300px
    height 206px
    position relative
    left 0
    top 0
    .slide
      width 100%
      height 200px
      position relative
      left 0
      top 0
      display flex
      .swipe-img
        width 100%
        height 100%
    .swiper-pagination
      height 20px
      position absolute
      left 0
      bottom -3px
      ellipsis()
      &>>> .swiper-pagination-bullet
        width 59px !important
        height 3px !important
        border-radius 0
        margin 0 1px
        background-color #aaa
        opacity 1
        width 6px
        height 6px
      &>>> .swiper-pagination-bullet-active
        width 60px
        height 3px
        border-radius 0
        background-color #c92027
        transition background-color 0.5s
      -webkit-transition background-color 0.5s /* Safari */
  .officialBlog
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
    background #fff
    padding 16px 16px
    margin-bottom 8px
    margin-top 0
    .blogLink
      display flex
      align-items center
      .headImg
        margin-right 10px
        width 40px
        height 40px
        border-radius 50%
      .title
        font-size 18px
        color #3d3d3d
        font-weight normal
      .btn
        margin-left auto
        padding 0 8px
        line-height 26px
        font-size 14px
        color #ca0c16
        border 1px solid #ca0c16
        border-radius 4px
        height 28px
        -webkit-transition all 0.3s ease-in-out
        transition all 0.3s ease-in-out
        text-decoration none
        font-weight bold
        &:hover
          background-color #ca0c16
          color #fff
  .blogger
    padding 16px
    background-color #fff
    margin-bottom 8px
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
    .bloggerTitle
      display flex
      color #4f4f4f
      height 28px
      line-height 28px
      margin-bottom 7px
      position relative
      left 0
      top 0
      span
        font-weight bold
        color #ca0c16
        margin-right 5px
      h3
        font-weight normal
        font-size 16px
        color #2c3033
      a
        position absolute
        right 0
        top 0
        font-size 12px
        color #999
    .bloggerList
      .bloggerItem
        padding 8px
        border-radius 3px
        margin-bottom 8px
        .itemTop
          display flex
          .headImg
            width 50px
            height 50px
            border 1px solid #f3f3f3
            border-radius 50%
          .info
            width 196px
            padding 2px
            .infoTop
              margin-bottom 5px
              position relative
              left 0
              top 0
              .name
                font-size 14px
                color #4f4f4f
                font-weight bold
                width 170px
              .edit
                color #d1c080
                font-weight bold
                position absolute
                right 0
                top 0
            .infoBottom
              font-size 12px
              color #707070
              position relative
              left 0
              top 0
              .profession
                max-width 150px
                padding-left 5px
              .essayCount
                position absolute
                right 0
                top 0
        .itemBottom
          width 100%
          margin-top 8px
          font-size 12px
          color #707070
          line-height 16px
          ellipsis()
  .blogMove
    background-color #fff
    margin-bottom 8px
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
    img
      width 300px
      height 80px
  .advertisement1ExHome
    height 250px
    position relative
    left 0
    top 0
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
    .advLink
      display block
      img
        width 300px
        height 250px
      .advertisementIcon
        width 28px
        height 16px
        line-height 16px
        position absolute
        bottom 5px
        left 5px
        border 1px solid #ccc
        border-radius 3px
        color #ccc
        font-size 10px
        text-align center
  .cloudchainCount
    background #fff
    box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.05)
    margin-bottom 8px
    padding 14px 16px
    color #4d4d4d
    .countTitle
      padding-bottom 8px
      font-size 14px
      font-weight 400
    .countList
      font-size 14px
      .countItem
        height 40px
        line-height 40px
        text-align left
        position relative
        left 0
        top 0
        text-align left
        border-bottom 1px dotted #ccc
        .itemLeft
          position absolute
          left 0
          top 0
          span
            font-size 12px
            color #e3635d
            padding-left 12px
        .itemRight
          width 110px
          position absolute
          right 0
          top 0
          span
            font-size 12px
            color #e3635d
            padding-left 12px
            position absolute
            right 0
            top 0
      .wechatWrapper
        padding-top 10px
        .wechat
          font-size 14px
          color #333
          cursor pointer
          &:hover
            color #3db817
  .cloudchainTheme
    background #fff
    box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.05)
    margin-bottom 8px
    padding 14px 16px
    font-size 14px
    .ThemeTitle
      font-size 14px
      color #5c5c5c
      font-weight normal
      position relative
      left 0
      top 0
      .more
        font-size 12px
        color #79a5e5
        font-weight 300
        position absolute
        right 0
    .ThemeContent
      font-size 12px
      margin-top 8px
      .ThemeItem
        display flex
        margin-top 8px
        .ThemeLeft
          width 64px
          .ThemeImg
            width 64px
            height 40px
          .ThemeImgName
            width 100%
            font-size 14px
            text-align center
        .ThemeDesc
          width 200px
          padding-left 10px
          .desc
            display flex
            .circle
              height 18px
              line-height 18px
              color #ccc
            p
              line-height 18px
              color #3d3d3d
          .DescBottom
            margin-top 4px
  .cloudchainCalendar
    background #fff
    box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.05)
    margin-bottom 8px
    padding 14px 16px
    font-size 14px
    .calendarTitle
      font-size 14px
      color #5c5c5c
      font-weight normal
      position relative
      left 0
      top 0
      .more
        font-size 12px
        color #79a5e5
        font-weight 300
        position absolute
        right 0
    .calendarContent
      font-size 14px
      margin-top 8px
      .calendarItem
        margin-top 12px
        .calendarTop
          display flex
          font-size 12px
          .date
            background #e8f3fd
            border-radius 2px
            padding 2px 4px
            margin-right 8px
            .month
              color #3399ea
          .status
            color #999
            font-weight 300
            height 20px
            line-height 20px
        .calendarBottom
          margin-top 4px
  .cloudchainGitchat
    background #fff
    box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.05)
    margin-bottom 8px
    padding 14px 16px
    font-size 14px
    .gitchatTitle
      font-size 14px
      color #5c5c5c
      font-weight normal
      position relative
      left 0
      top 0
      .more
        font-size 12px
        color #79a5e5
        font-weight 300
        position absolute
        right 0
    .gitchatContent
      font-size 12px
      margin-top 8px
      .gitchatItem
        display flex
        margin-top 10px
        .gitchatLeft
          width 64px
          .gitchatImg
            width 50px
            height 64px
        .gitchatDesc
          width 200px
          padding-left 10px
          .desc
            font-size 14px
            color #3d3d3d
            margin-bottom 4px
            line-height 20px
          .DescBottom
            display flex
            font-size 12px
            p
              color #999
              font-weight 300
              padding-left 6px
  .todayRecommendWrapper
    padding 16px
    background-color #fff
    margin-bottom 8px
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
    .todayRecommendTitle
      display flex
      color #4f4f4f
      height 28px
      line-height 28px
      margin-bottom 7px
      span
        font-weight bold
        color #ca0c16
        margin-right 5px
      h3
        font-weight normal
        font-size 16px
    .todayRecommendList
      .listItemWrapper
        margin-bottom 16px
        height 48px
        .listItem
          display flex
          height 100%
          &:hover
            color #ca0c16
          img
            display block
            width 64px
            height 48px
            border-radius 3px
            vertical-align top
            margin-right 10px
          p
            font-size 14px
            font-weight bold
            line-height 22px
    .todayRecommendActive
      height 66px
      padding-top 12px
      font-size 12px
      a
        display block
        padding 4px 0
        float left
        margin-right 12px
        font-size 12px
        color #707070
        line-height 14px
        &:hover
          color #ca0c16
  .voteWrapper
    background #fff
    margin-bottom 8px
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
    .voteImg
      a
        display block
        width 100%
        height 110px
        background-color rgba(0, 0, 0, 0.2)
        img
          display block
          margin 0 auto 13px
          position relative
          top 23px
        h3
          margin 0 10px
          font-size 14px
          font-weight normal
          text-align center
          color #fff
          position relative
          top 23px
    .voteNum
      display flex
      padding-top 5px
      padding-bottom 10px
      .side
        flex 1
        text-align center
        color #d6241e
        dt
          font-size 14px
        dd
          font-size 20px
          font-weight bold
      .voteButton
        width 30%
        line-height 28px
        font-size 14px
        verticalMiddle()
        a
          display block
          text-align center
          color #d6241e
          border 1px solid #d6241e
          border-radius 3px
          background transparent
    .voteEssay
      margin 16px
      li
        padding 10px 0
        font-size 14px
        color #757a7e
        line-height 22px
        &:first-child
          border-bottom 1.4px dashed #eaeaea
        .rightIcon
          font-size 8px
          color #666
          display block
          float left
        a
          display block
          margin-left 12px
          &:hover
            color #ca0c16
  .magazineWrapper
    background #fff
    padding 16px
    margin-bottom 8px
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
    h3
      margin-bottom 14px
      font-size 14px
      font-weight normal
      display flex
      .magazineTitle
        color #707070
        width 100px
      .magazineOpera
        padding-left 50px
        flex 2
        text-align right
        display flex
        .operaText
          color #349edf
          padding-right 10px
        .swiper-button
          display block !important
          background-image none
          position relative
          top 0
          left 0
          margin 0
          height 19px
          width 19px
          color #ccc
          margin-right 5px
          &:hover
            color #349edf
    .magazineSwiper
      height 124px
      width 100%
      .slide
        width 100%
        height 100%
        display flex
        .swipe-img
          display block
          width 92px
          height 124px
          border-radius 4px
          margin-right 14px
        .swipe-text
          width 162px
          height 124px
          h4
            font-size 12px
            color #4f4f4f
          p
            max-height 72px
            overflow hidden
            font-size 12px
            color #707070
            line-height 18px
  .advertisement2
    margin-bottom 8px
    height 250px
    position relative
    left 0
    top 0
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
    img
      width 300px
      height 250px
    .advertisementIcon
      width 28px
      height 16px
      line-height 16px
      position absolute
      bottom 5px
      left 5px
      border 1px solid #ccc
      border-radius 3px
      color #ccc
      font-size 10px
      text-align center
  .activityCalendar
    margin-bottom 8px
    padding 16px
    background-color #fff
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
    .activityCalendarTitle
      display flex
      color #4f4f4f
      height 28px
      line-height 28px
      margin-bottom 7px
      span
        font-weight bold
        color #ca0c16
        margin-right 5px
      h3
        font-weight normal
        font-size 16px
    .activityCalendarList
      li
        display flex
        padding 8px 0
        border-bottom 1.4px dashed #eaeaea
        .activityDate
          width 30px
          margin-right 8px
          .day
            font-weight bold
          .month
            font-size 12px
            color #999
        .activityDesc
          .desc
            font-size 14px
            color #4f4f4f
            display block
          .status
            font-size 12px
            color #999
  .advertisement3
    margin-bottom 8px
    height 250px
    position relative
    left 0
    top 0
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
    img
      width 300px
      height 250px
    .advertisementIcon
      width 28px
      height 16px
      line-height 16px
      position absolute
      bottom 5px
      left 5px
      border 1px solid #ccc
      border-radius 3px
      color #ccc
      font-size 10px
      text-align center
  .contactInfo
    margin-bottom 8px
    padding 16px
    background-color #fff
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.04)
    .contactInfoTitle
      display flex
      color #4f4f4f
      height 28px
      line-height 28px
      margin-bottom 7px
      span
        font-weight bold
        color #ca0c16
        margin-right 5px
      h3
        font-weight normal
        font-size 16px
    .customServiceCode
      display flex
      margin 0 20px
      padding-bottom 6px
      position relative
      top 0
      left 0
      .code
        text-align center
        img
          display block
          width 84px
          height 84px
          border 1px solid #ddd
          margin-bottom 4px
          padding 6px
      .qq
        position absolute
        right 0
        top 0
    .customServiceInfo
      padding 6px 0
      .service
        display flex
        font-size 14px
        color #5C5C5C
        height 22px
        line-height 22px
        div
          &:first-child
            width 126px
      p
        font-size 14px
        color #5C5C5C
        height 22px
        line-height 22px
        text-align center
    .copyrightInfo
      padding 4px 0 6px 0
      .copyrightNav
        display flex
        text-align center
        a
          color #3D3D3D
          font-size 14px
          font-weight bold
          text-align center
          margin 0 7px
      p
        color #999
        font-size 14px
        line-height 21px
    .reportInfo
      color #5c5c5c
      font-size 14px
      line-height 21px
      padding 5px 0 2px 0
</style>
