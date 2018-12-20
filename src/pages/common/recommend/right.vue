<template>
  <div class="rightWrapper">
    <div class="advertisement1">
      <a>
        <img src="@/assets/img/common/right/recommendRightImg1.jpg" />
      </a>
    </div>
    <div class="todayRecommendWrapper">
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
      <div class="todayRecommendActive border-top">
        <a v-for="(item,index) of todayRecommendActiveList" :key="index" :class="item.name">
          <span>{{item.desc}}</span>
        </a>
      </div>
    </div>
    <div class="voteWrapper">
      <div class="voteImg" :style="voteBackground">
        <a>
          <img class="viewpoint" src="@/assets/img/common/right/viewpoint.png"/>
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
    <div class="magazineWrapper">
      <h3>
        <span class="magazineTitle">GitChat极客书</span>
        <div class="magazineOpera">
          <span class="operaText">我要订阅</span>
          <span class="operaLeft"><</span>
          <span class="operaRight">></span>
        </div>
      </h3>
      <div class="magazineImg">
        <img src="" />
      </div>
    </div>
    <div class="advertisement2">
      <img src="@/assets/img/common/right/advertisement2.png"/>
      <div class="advertisementIcon">广告</div>
    </div>
    <div class="activityCalendar">
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
      <img src="@/assets/img/common/right/advertisement3.png"/>
      <div class="advertisementIcon">广告</div>
    </div>
    <div class="contactInfo">
      <div class="contactInfoTitle">
        <span>|</span>
        <h3>联系我们</h3>
      </div>
      <div class="customServiceCode">
        <a class="code wechat">
          <img src="@/assets/img/common/right/wechat.png"/>
          <span>微信客服</span>
        </a>
        <a class="code qq">
          <img src="@/assets/img/common/right/qq.png"/>
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
        <p class="copyrightList"><a><span class="iconfont">&#xe60b;</span>百度提供站内搜索&nbsp;京ICP证09002463号</a></p>
        <p class="copyrightList"><a>©1999-2018 江苏乐知网络技术有限公司 </a></p>
        <p class="copyrightList"><a>江苏知之为计算机有限公司 北京创新乐知信息技术有限公司版权所有 </a></p>
      </div>
      <div class="reportInfo border-top">
        <p>
          <a>
            <span>网络110报警服务</span>
            <span>经营性网站备案信息</span>
          </a>
        </p>
        <p><a>北京互联网违法和不良信息举报中心</a></p>
        <p><a>中国互联网举报中心</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'recommendRight',
  data () {
    return {
      todayRecommendList: [
        { name:'listItem',
          desc:'报名 | Workshop：零基础实战智能合约开发',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg1.jpg")
        },
        { name:'listItem',
          desc:'比特币诈骗手法升级，从要钱到要命！',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg2.jpg")
        },
        { name:'listItem',
          desc:'【资料】机器学习开源项目TOP精选',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg3.jpg")
        },
        { name:'listItem',
          desc:'2018年下半年，别错过这些深度学习项目！',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg4.jpg")
        },
        { name:'listItem',
          desc:'Java 这一年：IntelliJ 称霸 IDE，',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg5.jpg")
        },
        { name:'listItem',
          desc:'Android 更加开放了！',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg6.jpg")
        },
        { name:'listItem',
          desc:'21 天入门机器学习',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg7.jpg")
        },
        { name:'listItem',
          desc:'Java 工程师快速入门深度学习',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg8.jpg")
        },
        { name:'listItem',
          desc:'AI/Python/大数据/区块链开发者社群！',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg9.jpg")
        },
        { name:'listItem',
          desc:'2019年人工智能发展趋势！',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg10.jpg")
        },
        { name:'listItem',
          desc:'高通骁龙™开发者工具链介绍及性能优化',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg11.jpg")
        },
        { name:'listItem',
          desc:'小米快应用专区',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg12.jpg")
        },
        { name:'listItem',
          desc:'人工智能、机器学习和认知计算入门指南',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg13.jpg")
        },
        { name:'listItem',
          desc:'迅雷链技术沙龙',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg14.jpg")
        },
        { name:'listItem',
          desc:'百度技术专区',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg15.jpg")
        },
        { name:'listItem',
          desc:'UCan下午茶 2018',
          imgUrl:require("@/assets/img/common/right/todayRecommendImg16.jpg")
        },
      ],
      todayRecommendActiveList:[
        { name:'quickApp',
          desc:'快应用大赛'
        },
        { name:'intel',
          desc:'英特尔开发人员专区'
        },
        { name:'huaweiCloud',
          desc:'华为云'
        },
        { name:'tencentCloud',
          desc:'腾讯云技术社区'
        },
        { name:'huaweiDeveloper',
          desc:'华为开发者专区'
        },
        { name:'puyuanCloud',
          desc:'普元云计算'
        },
        { name:'powerLinux',
          desc:'PowerLinux技术社区'
        }
      ],
      //投票背景图片
      voteBackground:{
        backgroundImage:"url(" + require("@/assets/img/common/right/voteImg.png") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      activityCalendarList:[
        { name:'act1',
          day:'10',
          month:'11',
          desc:'华为云数据库限时有奖评测活动',
          status:'线上'
        },
        { name:'act2',
          day:'20',
          month:'12',
          desc:'HUAWEI Developer Day 成都沙龙',
          status:'成都'
        },
        { name:'act3',
          day:'21',
          month:'12',
          desc:'Qualcomm LTE 物联网应用开发者大赛',
          status:'线上'
        },
        { name:'act4',
          day:'22',
          month:'12',
          desc:'CSDN Blockchain Workshop：零基础实战智能合约开发',
          status:'北京'
        },
        { name:'act5',
          day:'26',
          month:'12',
          desc:'2018 OPPO开发者大会',
          status:'北京'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl"
.rightWrapper
  width 300px
  .advertisement1
    margin-bottom:8px
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04)
    a
      display block
      height:200px
  .todayRecommendWrapper
    padding:16px
    background-color #fff
    margin-bottom:8px
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04)
    .todayRecommendTitle
      display flex
      color: #4f4f4f;
      height: 28px;
      line-height 28px
      margin-bottom: 7px;
      span 
        font-weight bold
        color:#ca0c16
        margin-right 5px
      h3
        font-weight: normal;
        font-size: 16px;
    .todayRecommendList
      .listItemWrapper
        margin-bottom: 16px;
        height: 48px;
        .listItem
          display flex
          height 100%
          &:hover
            color:#ca0c16
          img
            display: block;
            width: 64px;
            height: 48px;
            border-radius: 3px;
            vertical-align: top;
            margin-right 10px
          p
            font-size 14px
            font-weight bold
            line-height 22px
    .todayRecommendActive
      height 66px
      padding-top:12px
      font-size:12px
      a
        display: block;
        padding: 4px 0;
        float: left;
        margin-right: 12px;
        font-size: 12px;
        color: #707070;
        line-height: 14px;
        &:hover
          color:#ca0c16
  .voteWrapper
    background: #fff;
    margin-bottom: 8px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04)
    .voteImg
      a
        display block
        width 100%
        height 110px
        background-color: rgba(0,0,0,0.2);
        img 
          display:block
          margin:0 auto 13px;
          position:relative
          top:23px
        h3
          margin:0 10px;
          font-size: 14px;
          font-weight:normal
          text-align center
          color: #fff;
          position relative
          top:23px
    .voteNum
      display flex
      padding-top: 5px;
      padding-bottom: 10px;
      .side
        flex:1
        text-align center
        color:#d6241e
        dt
          font-size:14px
        dd
          font-size:20px
          font-weight:bold
      .voteButton
        width 30%
        line-height 28px
        font-size:14px
        verticalMiddle()
        a
          display:block
          text-align center
          color:#d6241e
          border:1px solid #d6241e
          border-radius:3px
          background:transparent
    .voteEssay
      margin:16px
      li
        padding:10px 0
        font-size: 14px;
        color: #757a7e;
        line-height: 22px;
        &:first-child
          border-bottom:1.4px dashed #eaeaea
        .rightIcon
          font-size:8px
          color:#666
          display:block
          float left
        a
          display: block;
          margin-left: 12px;
          &:hover
            color:#ca0c16
  .magazineWrapper
    background: #fff
    padding: 16px 
    margin-bottom: 8px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04)
    h3
      font-size:14px
      font-weight:normal
      display:flex
      .magazineTitle
        color: #707070;
        width:100px
      .magazineOpera
        flex:2
        text-align:right
        .operaText
          color: #349edf
    .magazineImg
      height:124px
      background-color pink
  .advertisement2
    margin-bottom:8px
    height 250px
    position relative
    left 0
    top 0
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04)
    img
      width 300px
      height 250px
    .advertisementIcon
      width 28px
      height 16px
      line-height 16px
      position:absolute
      bottom:5px
      left:5px
      border:1px solid #ccc
      border-radius:3px
      color:#ccc
      font-size:10px
      text-align:center
  .activityCalendar
    margin-bottom:8px
    padding:16px
    background-color #fff
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04)
    .activityCalendarTitle
      display flex
      color: #4f4f4f;
      height: 28px;
      line-height 28px
      margin-bottom: 7px;
      span 
        font-weight bold
        color:#ca0c16
        margin-right 5px
      h3
        font-weight: normal;
        font-size: 16px;
    .activityCalendarList
      li
        display:flex
        padding:8px 0
        border-bottom: 1.4px dashed #eaeaea
        .activityDate
          width:30px
          margin-right:8px
          .day
            font-weight bold
          .month
            font-size:12px
            color: #999;
        .activityDesc
          .desc
            font-size:14px
            color:#4f4f4f
            display block
          .status
            font-size: 12px;
            color: #999;
  .advertisement3
    margin-bottom:8px
    height 250px
    position relative
    left 0
    top 0
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04)
    img
      width 300px
      height 250px
    .advertisementIcon
      width 28px
      height 16px
      line-height 16px
      position:absolute
      bottom:5px
      left:5px
      border:1px solid #ccc
      border-radius:3px
      color:#ccc
      font-size:10px
      text-align:center
  .contactInfo
    margin-bottom:8px
    padding:16px
    background-color #fff
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04)
    .contactInfoTitle
      display flex
      color: #4f4f4f;
      height: 28px;
      line-height 28px
      margin-bottom: 7px;
      span 
        font-weight bold
        color:#ca0c16
        margin-right 5px
      h3
        font-weight: normal;
        font-size: 16px;
    .customServiceCode
      display:flex
      margin:0 20px
      padding-bottom:6px
      position:relative
      top:0
      left:0
      .code
        text-align:center
        img
          display: block;
          width: 84px;
          height: 84px;
          border: 1px solid #ddd;
          margin-bottom: 4px;
          padding:6px
      .qq
        position:absolute
        right:0
        top:0
    .customServiceInfo
      padding:6px 0
      .service
        display:flex   
        font-size: 14px;
        color: #5C5C5C 
        height:22px
        line-height 22px  
        div
          &:first-child
            width: 126px;
      p
        font-size: 14px;
        color: #5C5C5C 
        height:22px
        line-height 22px  
        text-align:center
    .copyrightInfo
      padding:4px 0 6px 0
      .copyrightNav
        display:flex
        text-align:center
        a
          font-size:14px
          font-weight:bold
          text-align:center
          margin: 0 7px;
      p
        color: #999;
        font-size:14px
        line-height: 21px;
    .reportInfo
      color: #5c5c5c;
      font-size:14px
      line-height: 21px;
      padding:5px 0 2px 0
</style>
