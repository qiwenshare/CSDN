<template>
  <div class="secondKillWrapper">
    <div class="title">
      <div class="titleLeft">
        <span class="icon iconfont">&#xe663;</span>
        <span class="text">限时秒杀</span>
        <span class="split">&nbsp;|&nbsp;</span>
        <a class="vipExchangeAll" href="https://edu.csdn.net/courses/e1_k" target="_blank">
          全部秒杀
        </a>
      </div>
      <div class="titleRight">
        <div class="mem">会员特惠</div>
        <div class="be">立即开通</div>
      </div>
    </div>
    <div class="content">
      <ul class="contentList" v-show="showLeft">
        <li class="item" v-for="(item,index) of vipExchangeListLeft" :key="index">
          <a class="itemLink" :href="item.link" target="_blank">
            <img class="itemImg" :src="item.imgUrl"/>
            <div class="itemTitle">{{item.title}}</div>
            <div class="itemPrice">
              {{item.price}}
              <div class="priceOld">{{item.oldPrice}}</div>
              <div class="tag">
                立即<br/>抢购
              </div>
            </div>
          </a>
        </li>
      </ul>
      <ul class="contentList" v-show="showRight">
        <li class="item" v-for="(item,index) of vipExchangeListRight" :key="index">
          <a class="itemLink" :href="item.link" target="_blank">
            <img class="itemImg" :src="item.imgUrl"/>
            <div class="itemTitle">{{item.title}}</div>
            <div class="itemPrice">
              {{item.price}}
              <div class="priceOld">{{item.oldPrice}}</div>
              <div class="tag">
                立即<br/>抢购
              </div>
            </div>
          </a>
        </li>
      </ul>
      <ul class="tab">
        <li class="active tabLeft" @click="show(clickLeft)"></li>
        <li class="tabRight" @click="show(clickRight)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'secondKill',
  data () {
    return {
      vipExchangeListLeft:[
        { link:"https://edu.csdn.net/course/detail/9440",
          imgUrl:require("@/assets/img/topnav/edu/vip/secondKill/img1.png"),
          title:"第十季 ThinkPHP个人博客和社交首页",
          price:"￥20.00",
          oldPrice:"￥39.00"
        },
        { link:"https://edu.csdn.net/course/detail/8637",
          imgUrl:require("@/assets/img/topnav/edu/vip/secondKill/img2.png"),
          title:"无人驾驶--从零入门实战视频教程",
          price:"￥104.00",
          oldPrice:"￥208.00"
        },
        { link:"https://edu.csdn.net/course/detail/8618",
          imgUrl:require("@/assets/img/topnav/edu/vip/secondKill/img3.png"),
          title:"微信小程序项目实战（App）实战篇",
          price:"￥104.00",
          oldPrice:"￥208.00"
        }
      ],
      vipExchangeListRight:[
        { link:"https://edu.csdn.net/course/detail/9440",
          imgUrl:require("@/assets/img/topnav/edu/vip/secondKill/img4.png"),
          title:"飞车竞速",
          price:"￥200.00",
          oldPrice:"￥399.00"
        },
        { link:"https://edu.csdn.net/course/detail/8637",
          imgUrl:require("@/assets/img/topnav/edu/vip/secondKill/img5.png"),
          title:"WEB入门实践",
          price:"￥20.00",
          oldPrice:"￥39.00"
        },
        { link:"https://edu.csdn.net/course/detail/8618",
          imgUrl:require("@/assets/img/topnav/edu/vip/secondKill/img6.png"),
          title:"【孙伟】基础&实用Photoshop设计软件标准视频教程",
          price:"￥20.00",
          oldPrice:"￥39.00"
        }
      ],
      showLeft:true,
      showRight:false,
      clickLeft:"left",
      clickRight:"right"
    }
  },
  methods:{
    show(param){
      if(param == "left"){
        this.showLeft = true;
        this.showRight = false;
        $(".tabLeft").addClass("active");
        $(".tabRight").removeClass("active");
      }
      if(param == "right") {
        this.showLeft = false;
        this.showRight = true;
        $(".tabLeft").removeClass("active");
        $(".tabRight").addClass("active");
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.secondKillWrapper
  width 750px
  height 354px
  padding 0 15px
  .title
    height 32px
    padding-bottom 12px
    font-weight: 400;
    position relative
    top 0
    left 0
    right 0
    .titleLeft
      position absolute
      left 0
      .icon
        color: #e44859;
        font-size: 28px;
        margin-right: 8px;
      .text
        color: #333;
        font-size: 18px;
      .split
        color #d0d0d0
        font-size 14px
        vertical-align: text-top;
      .vipExchangeAll
        color: #e54858;
        font-size 14px
        vertical-align: text-top;
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
        border: 1px solid #dfdfdf;
        border-right 0
        padding 0 8px
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        color #666
        &:before
          content: '';
          width: 6px;
          height: 6px;
          background: #fff;
          transform: rotate(45deg);
          position: absolute;
          z-index: 1;
          top: 10px;
          left: -3px;
          border-radius: 1px;
          border-left: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
      .be
        padding 0 8px
        background: #5cb85c;
        color: #fff;
        border: 1px solid #5cb85c;
  .content
    height 310px
    position relative
    left 0
    top 0
    .contentList
      display flex
      .item
        width 228px
        height 264px
        margin-right 30px
        border-radius: 3px;
        border: 1px solid #e4e4e4;
        &:last-child
          margin-right 0
        .itemLink
          width: 100%;
          height: 258px;
          display: block;
          &:link
            text-decoration none
          .itemImg
            width 100%
            border-radius: 3px;
          .itemTitle
            height 42px
            margin 16px 0
            padding 0 10px
            font-size 14px
            color #666
            &:hover
              color: #e44859;
          .itemPrice
            height: 35px;
            line-height 35px
            margin-top 10px
            padding 0 10px  
            font-size 18px
            background: #f12c2c;
            color: #fff;
            border: 1px solid #f12c2c;
            position relative
            left 0
            top 0
            .priceOld
              display inline
              font-size: 12px;
              line-height: 24px;
              padding: 0 0 0 4px;
              text-decoration line-through
            .tag
              position absolute
              top -7px
              right 10px
              width: 55px;
              height: 38px;
              background: #ffeba6;
              font-size 16px
              text-align center
              color: #ff4805;
              line-height: 16px;
              &:before
                content: '';
                width: 0;
                height: 0;
                border-top: 3.5px solid transparent;
                border-right: 2px solid #dac26a;
                border-bottom: 3.5px solid #dac26a;
                border-left: 2px solid transparent;
                position: absolute;
                left: -4px;
                top: 0;
              &:after
                left: auto;
                right: -4px;
                border-top: 3.5px solid transparent;
                border-right: 2px solid transparent;
                border-bottom: 3.5px solid #dac26a;
                border-left: 2px solid #dac26a;
    .tab
      width 100%
      height 30px
      margin-top: 8px;
      float: left;
      background: #f6f6f6;
      border-radius: 4px;
      text-align: center;
      position absolute
      bottom 0
      left 0
      right 0
      li
        width: 10px;
        background: #989898;
        display: inline-block;
        height: 10px;
        border-radius: 5px;
        margin: 10px 4px;
        cursor: pointer;
      .active
        width: 33px;
        background: #e54858;
        display: inline-block;
        height: 10px;
        border-radius: 5px;
        margin: 10px 4px;
        cursor: pointer;
</style>
