<template>
  <div class="contentListWrapper">
    <ul class="contentList">
      <li v-for="(item,index) of contentList" v-if="item.type == 'essay'" :key="index" :class="'essayLi border-bottom '+item.name">
        <div class="liTop">
          <a class="title" href="https://www.baidu.com" target="_blank">
            <h3>{{item.title}}</h3>
          </a>
          <span class="iconfont deleteIcon">&#xe621;</span>
        </div>
        <div v-if="item.content != ''" class="liMiddle">
            <p>{{item.content}}</p>
          </div>
        <div class="liBottom">
          <div class="liBottomLeft">
            <img class="headImg" :src="item.imgUrl" />
            <span class="forum">{{item.forum}}</span>
            <span v-if="item.category != ''" class="category">&nbsp;·&nbsp;{{item.category}}</span>
            <span class="date">·&nbsp;{{item.date}}</span>
          </div>
          <div class="liBottomRight">
            <span class="read">{{item.read}}</span>阅读 ·
            <span class="comment">{{item.comment}}</span>评论
          </div>
        </div>
        <div v-if="item.name == 'essay1'" class="setTopIcon">
          <span>置顶</span>
        </div>
      </li>
      <li v-for="(item,index) of contentList" v-if="item.type == 'adv'" :key="index" :class="'advLi '+item.name">
        <img :src="item.imgUrl" class="advLiImg"/>
        <div class="advRight">
          <h3 class="title">{{item.title}}</h3>
          <p class="content">{{item.content}}</p>
          <div class="advIcon">广告</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'contentList',
  data () {
    return {
      contentList: [
        { name:'essay1',
          type:'essay',
          title:'刚发布！Python 一二线城市月薪 15K 起！12 月再夺语言榜首',
          content:'',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'CSDNedu',
          category:'',
          date:'39分钟前',
          read:'518',
          comment:'1'
        },
        { name:'essay2',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'adv4',
          type:'adv',
          title:'华为云12.12会员节 注册抽好礼 团购2折起 12月专享优惠',
          content:'华为云12.12会员节感恩大回馈，注册抽奖人人有礼 会员回馈买一赠五 全场云产品1折起 消费满额必得Mate20...  ',
          imgUrl:require('@/assets/img/homepage/adv4.jpg')
        },
        { name:'essay3',
          type:'essay',
          title:'源码:Spark SQL 分区特性第一弹',
          content:'头条号上说过近期分享Spark SQL系列文章，前面在头条号上分享了Dataset API的基本操作和复杂操作，不知道下面大家有没有自己测试一下。今天主要是分享Spark...',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'Spark高级玩法',
          category:'云计算/大数据',
          date:'12月09日',
          read:'3187',
          comment:'2'
        },
        { name:'essay4',
          type:'essay',
          title:'刚发布！Python 一二线城市月薪 15K 起！12 月再夺语言榜首',
          content:'',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'CSDNedu',
          category:'',
          date:'39分钟前',
          read:'518',
          comment:'1'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'adv5',
          type:'adv',
          title:'华为云12.12会员节 注册抽好礼 团购2折起 12月专享优惠',
          content:'华为云12.12会员节感恩大回馈，注册抽奖人人有礼 会员回馈买一赠五 全场云产品1折起 消费满额必得Mate20...  ',
          imgUrl:require('@/assets/img/homepage/adv4.jpg')
        },
        { name:'essay6',
          type:'essay',
          title:'源码:Spark SQL 分区特性第一弹',
          content:'头条号上说过近期分享Spark SQL系列文章，前面在头条号上分享了Dataset API的基本操作和复杂操作，不知道下面大家有没有自己测试一下。今天主要是分享Spark...',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'Spark高级玩法',
          category:'云计算/大数据',
          date:'12月09日',
          read:'3187',
          comment:'2'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },

        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },

        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },


        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
        { name:'essay5',
          type:'essay',
          title:'Docker最全教程——从理论到实战（七）',
          content:'本篇教程持续编写了3个星期左右并且一直在完善、补充具体的细节和实践，预计全部完成还需要1到2个月的时间。整个教程完成之后，我们将会出书（目前已联系出版社）。在这个过程中，...  ',
          imgUrl:require('@/assets/img/homepage/headImgDefault.png'),
          forum:'dotNET跨平台',
          category:'云计算/大数据',
          date:'12月09日',
          read:'8145',
          comment:'14'
        },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl"
.contentListWrapper
  background-color:pink
  width:100%
  .contentList
    .essayLi
      padding:18px 24px
      background-color #fff
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04)
      position relative
      top:0
      left:0
      &:hover
        background-color #fafafa
      .liTop
        display:flex
        position:relative
        left:0
        top:0
        margin-bottom 4px
        .title
          max-width 98%
          height 24px
          line-height 24px
          color: #3d3d3d
          &:hover
            color:#ca0c16
          &:acitve
            color:#ca0c16
        .deleteIcon
          position absolute
          right 20px
          font-size:12px
          margin-left 16px
          color:#ccc
      .liMiddle
        height:24px
        line-height:24px
        margin-bottom: 4px;
        color: #8a8a8a;
        font-size: 14px;
        p
          ellipsis()
      .liBottom
        display flex
        position relative
        left:0
        top:0
        height 24px
        line-height 24px
        .liBottomLeft
          display flex
          height 24px
          .headImg
            width:20px
            height 20px
            margin-right 6px
          .forum
            display block
            height 24px
            line-height 24px
            margin-right 6px
            font-size:14px
            color:#3d3d3d
            &:hover
              color:#157dcf
          .category
            &:hover
              color:#157dcf
          .category
          .date
            margin-right 6px
            font-size: 14px;
            color: #8a8a8a;
        .liBottomRight
          position absolute
          right:20px
          line-height 24px
          font-size:14px
          color:#999
          .read
          .comment
            color:#3399ea
            margin-right:5px
      .setTopIcon
        width 0
        height 0
        position absolute
        right:0
        top:0
        color:#fdf5f5
        font-size:12px
        border-top:20px solid #7ed321
        border-right:20px solid #7ed321
        border-bottom:20px solid transparent
        border-left:20px solid transparent
        span 
          transform:rotate(45deg);
          margin-top: -15px;
          display: block;
          margin-left: -12px;
          width: 30px;
          position: absolute;
          height: 30px;
    .advLi
      padding:18px 24px
      background-color #fff
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04)
      display flex
      &:hover
        background-color #fafafa
      .advLiImg
        width 120px
        height 90px
        margin-right 24px
      .advRight
        width:568px
        position relative
        top:0
        left:0
        .title
          color: #3d3d3d
          max-width 98%
          height 24px
          line-height 24px
          margin-bottom 4px
        .content
          display block
          width:100%
          color: #6b6b6b;
          line-height: 24px;
          font-size: 14px;
        .advIcon
          width 40px
          height 18px
          line-height 18px
          position absolute
          right:0
          top:0
          border:1px solid #ccc
          border-radius:3px
          color:#ccc
          font-size:12px
          font-weight lighter
          text-align center
          text-shadow:1px 1px 0px #000000
          verticalMiddle()
</style>
