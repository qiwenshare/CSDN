<template>
  <div class="userInfoWrapper">
    <div class="userTab">
      <ul class="userTop">
        <li class="active" @click="tabClick($event)"><a class="profile">个人资料</a></li>
        <li @click="tabClick($event)"><a class="favorite">我的收藏</a></li>
        <li @click="tabClick($event)"><a class="follow">我的关注</a></li>
        <li @click="tabClick($event)"><a class="fan">我的粉丝</a></li>
      </ul>
      <ul class="userBottm">
        <li><a>我的博客</a></li>
        <li><a>我的下载</a></li>
        <li><a>我的论坛</a></li>
        <li><a>我的学院</a></li>
      </ul>
    </div>
    <div class="userContent">
      <div class="profileContent" v-show="profile">
        <h3 class="title">个人资料</h3>
        <div class="content">
          <div class="headerImgWrapper">
            <img src="@/assets/img/userCenter/header.jpg" />
            <div class="modifyHeader">修改头像</div>
          </div>
          <div class="infoList">
            <div class="listTop">
              <div class="idCard">ID：qq_36485978</div>
              <div class="csdnInfo">
                <span>关注 4</span>
                <span>粉丝 2</span>
                <span class="splits">|</span>
                <span>C币 0</span>
                <a>充值</a>
              </div>
              <div class="userHome">
                个人主页
                <span class="iconfont">&#xe637;</span>
              </div>
            </div>
            <div class="listBottom">
              <ul>
                <li v-for="(item,index) of infoList" :key="index" :class="item.name">
                  {{item.text}}
                </li>
              </ul>
              <div class="modifyInfo">修改资料</div>
            </div>
          </div>
        </div>
      </div>
      <div class="favoriteContent" v-show="favorite">
        <div class="title">
          <h3>我的收藏</h3>
          <div class="collectionCount">共<span>{{collectionCount}}</span>条</div>
        </div>
        <div class="content">
          <ul class="collectionList">
            <li class="collectionItem" v-for="(item,index) of collectionList" :key="index">
              <a class="essayLink" :href="item.link" target="_blank">{{item.text}}</a>
              <span class="date">{{item.date}}</span>
              <div class="cancel">取消</div>
            </li>
          </ul>
          <div class="paginationWrapper">
            <ul class="pagination">
              <li><a href="#"><span class="iconfont">&#xe606;</span></a></li>
              <li><a class="active" href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#"><span class="iconfont">&#xe607;</span></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="followContent" v-show="follow">
        <div class="title">
          <h3>我的关注</h3>
          <div class="followCount">共<span>{{followCount}}</span>人</div>
        </div>
        <div class="content">
          <ul class="followList">
            <li class="followItem" v-for="(item,index) of followList" :key="index">
              <a class="userLink" :href="item.link" target="_blank">
                <img class="userImg" alt="用户头像" :src="item.imgUrl" />
                <div class="userName">{{item.text}}</div>
              </a>
              <div class="cancel">取消关注</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="fanContent" v-show="fan">
        <div class="title">
          <h3>我的粉丝</h3>
          <div class="fanCount">共<span>{{fanCount}}</span>人</div>
        </div>
        <div class="content">
          <ul class="fanList">
            <li class="fanItem" v-for="(item,index) of fanList" :key="index">
              <a class="userLink" :href="item.link" target="_blank">
                <img class="userImg" alt="用户头像" :src="item.imgUrl" />
                <div class="userName">{{item.text}}</div>
              </a>
              <div class="cancel">取消关注</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'userInfoList',
  data(){
    return{
      infoList:[
        { name:'nick',
          text:'昵称：小鲤鱼听听'
        },
        { name:'name',
          text:'实名：李雅婷'
        },
        { name:'sex',
          text:'性别：女'
        },
        { name:'birth',
          text:'生日：1996-07-27'
        },
        { name:'district',
          text:'地区：中国 陕西省 西安市'
        },
        { name:'industry',
          text:'行业：'
        },
        { name:'profession',
          text:'职位：前端开发工程师'
        },
        { name:'introduction',
          text:'简介：'
        }
      ],
      collectionList:[
        { link:"https://blog.csdn.net/xuaner8786/article/details/80703227",
          text:"vue监听滚动事件  实现某元素随着滚动条滚动固定距离顶部的某个位置（元素的top值实时变化） - 雪梅零落",
          date:"2018-12-18"
        },
        { link:"https://blog.csdn.net/xuaner8786/article/details/80703227",
          text:"vue监听滚动事件  实现某元素随着滚动条滚动固定距离顶部的某个位置（元素的top值实时变化） - 雪梅零落",
          date:"2018-12-18"
        },
        { link:"https://blog.csdn.net/xuaner8786/article/details/80703227",
          text:"vue监听滚动事件  实现某元素随着滚动条滚动固定距离顶部的某个位置（元素的top值实时变化） - 雪梅零落",
          date:"2018-12-18"
        },
        { link:"https://blog.csdn.net/xuaner8786/article/details/80703227",
          text:"vue监听滚动事件  实现某元素随着滚动条滚动固定距离顶部的某个位置（元素的top值实时变化） - 雪梅零落",
          date:"2018-12-18"
        },
        { link:"https://blog.csdn.net/xuaner8786/article/details/80703227",
          text:"vue监听滚动事件  实现某元素随着滚动条滚动固定距离顶部的某个位置（元素的top值实时变化） - 雪梅零落",
          date:"2018-12-18"
        },
        { link:"https://blog.csdn.net/xuaner8786/article/details/80703227",
          text:"vue监听滚动事件  实现某元素随着滚动条滚动固定距离顶部的某个位置（元素的top值实时变化） - 雪梅零落",
          date:"2018-12-18"
        },
        { link:"https://blog.csdn.net/xuaner8786/article/details/80703227",
          text:"vue监听滚动事件  实现某元素随着滚动条滚动固定距离顶部的某个位置（元素的top值实时变化） - 雪梅零落",
          date:"2018-12-18"
        },
        { link:"https://blog.csdn.net/xuaner8786/article/details/80703227",
          text:"vue监听滚动事件  实现某元素随着滚动条滚动固定距离顶部的某个位置（元素的top值实时变化） - 雪梅零落",
          date:"2018-12-18"
        },
        { link:"https://blog.csdn.net/xuaner8786/article/details/80703227",
          text:"vue监听滚动事件  实现某元素随着滚动条滚动固定距离顶部的某个位置（元素的top值实时变化） - 雪梅零落",
          date:"2018-12-18"
        },
        { link:"https://blog.csdn.net/xuaner8786/article/details/80703227",
          text:"vue监听滚动事件  实现某元素随着滚动条滚动固定距离顶部的某个位置（元素的top值实时变化） - 雪梅零落",
          date:"2018-12-18"
        }
      ],
      followList:[
        { imgUrl:require("@/assets/img/userCenter/header.jpg"),
          text:"一只小coder",
          link:"https://me.csdn.net/u014633966"
        },
        { imgUrl:require("@/assets/img/userCenter/header.jpg"),
          text:"一只小coder",
          link:"https://me.csdn.net/u014633966"
        },
        { imgUrl:require("@/assets/img/userCenter/header.jpg"),
          text:"一只小coder",
          link:"https://me.csdn.net/u014633966"
        }
      ],
      fanList:[
        { imgUrl:require("@/assets/img/userCenter/header.jpg"),
          text:"粉丝昵称",
          link:"https://me.csdn.net/jjjjkkjkk"
        },
        { imgUrl:require("@/assets/img/userCenter/header.jpg"),
          text:"粉丝昵称",
          link:"https://me.csdn.net/jjjjkkjkk"
        },
        { imgUrl:require("@/assets/img/userCenter/header.jpg"),
          text:"粉丝昵称",
          link:"https://me.csdn.net/jjjjkkjkk"
        }
      ],
      profile:true,
      favorite:false,
      follow:false,
      fan:false,
      collectionCount:21,
      followCount:3,
      fanCount:3
    }
  },
  methods:{
    tabClick(e){
      var className = $(e.target).attr("class");
      if(className == "profile"){
        this.profile = true;
        this.favorite = false;
        this.follow = false;
        this.fan = false;
        $(".profile").parent().addClass("active");
        $(".favorite").parent().removeClass("active");
        $(".follow").parent().removeClass("active");
        $(".fan").parent().removeClass("active");
      }
      if(className == "favorite"){
        this.profile = false;
        this.favorite = true;
        this.follow = false;
        this.fan = false;
        $(".profile").parent().removeClass("active");
        $(".favorite").parent().addClass("active");
        $(".follow").parent().removeClass("active");
        $(".fan").parent().removeClass("active");
      }
      if(className == "follow"){
        this.profile = false;
        this.favorite = false;
        this.follow = true;
        this.fan = false;
        $(".profile").parent().removeClass("active");
        $(".favorite").parent().removeClass("active");
        $(".follow").parent().addClass("active");
        $(".fan").parent().removeClass("active");
      }
      if(className == "fan"){
        this.profile = false;
        this.favorite = false;
        this.follow = false;
        this.fan = true;
        $(".profile").parent().removeClass("active");
        $(".favorite").parent().removeClass("active");
        $(".follow").parent().removeClass("active");
        $(".fan").parent().addClass("active");
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl"
.userInfoWrapper
  width: 1200px;
  margin: 0 auto;
  height: 90%;
  margin-top: 16px;
  position relative
  .userTab
    position absolute
    left 0
    top 0
    width: 199px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    ul
      background: #fff;
      li
        width: 100%;
        color: #4d4d4d;
        padding-left: 16px;
        box-sizing: border-box;
        a
          font-size: 14px;
          color: inherit;
          display: inline-block;
          height: 36px;
          line-height: 36px;
          width: 100%;
        &:hover
          background: #fde3e4;
          color: #ca0c16;
      .active
        background: #b20b13 !important;
        color: #fff !important;
    .userTop
      border-bottom: 1px solid #e9eaeb;
  .userContent
    position absolute
    right 0
    top 0
    width 936px
    margin-left: 200px;
    background-color: #fff;
    min-height: 95%;
    padding: 0 32px 30px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    min-height: 520px;
    .profileContent
      .title
        font-size: 20px;
        color: #3d3d3d;
        height: 90px;
        line-height: 90px;
        border-bottom: 1px solid #e0e0e0;
      .content
        position relative
        .headerImgWrapper
          width 100px
          height 143px
          margin-right: 16px;
          position absolute
          top 0
          left 0
          img
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 16px auto 0 auto;
          .modifyHeader
            text-align center
            font-size: 14px;
            color: #3399ea;
            margin-top: 8px;
            cursor: pointer;
        .infoList
          width: 820px;
          position absolute
          right 0
          top 0
          .listTop
            margin-top: 16px;
            border-bottom 1px solid #e0e0e0;
            position relative
            .idCard
              font-size: 14px;
              color: #999;
            .csdnInfo
              margin-top: 8px;
              margin-bottom: 16px;
              span
                margin-right: 16px;
                color: rgb(77, 77, 77);
                font-size: 14px;
              .splits
                color:#ccc
              a
                font-size: 14px;
                color: #3399ea;
                margin: 0;
            .userHome
              position absolute
              right 0
              top 0
              font-size: 14px;
              color: #3399ea;
              padding-right: 9.3px;
              .iconfont
                font-size 14px
          .listBottom
            position relative
            ul
              li
                height: 32px;
                line-height: 32px;
                font-size: 14px;
                color: #4d4d4d
            .modifyInfo
              position absolute
              top 0
              right 0
              height 32px
              line-height 32px
              font-size: 14px;
              color: #3399ea;
              cursor: pointer;
    .favoriteContent
      .title
        position relative
        height: 90px;
        line-height: 90px;
        border-bottom: 1px solid #e0e0e0;
        h3
          position absolute
          left 0
          top 0
          font-size: 20px;
          color: #3d3d3d;
          font-weight: 700;
        .collectionCount
          position absolute
          right 0
          top 0
          font-size: 14px;
          color: #4d4d4d;
      .content
        .collectionList
          .collectionItem
            padding: 16px 0;
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            .essayLink
              width: 78%;
              line-height: 24px;
              color: #4d4d4d;
              ellipsis()
            .date
              width: 13%;
              text-align: right;
              margin-left: 10px;
              color: #ccc;
            .cancel
              width: 8%;
              text-align: center;
              color: #999;
              cursor: pointer;
            &:last-child
              border-bottom:none
        .paginationWrapper
          text-align:center
          margin-top: 30px
          .pagination 
            display: inline-block;
            padding: 0;
            margin: 0;
            li 
              display: inline;
              a 
                color: black;
                float: left;
                padding: 8px 16px;
                text-decoration: none;
                &:hover
                  color: #ca0c16
              a.active 
                color: #ca0c16 !important
    .followContent
      .title
        position relative
        height: 90px;
        line-height: 90px;
        border-bottom: 1px solid #e0e0e0;
        h3
          position absolute
          left 0
          top 0
          font-size: 20px;
          color: #3d3d3d;
          font-weight: 700;
        .followCount
          position absolute
          right 0
          top 0
          font-size: 14px;
          color: #4d4d4d;
      .content
        .followList
          .followItem
            position relative
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            height: 82px;
            line-height: 82px;
            .userLink
              color: #4d4d4d;
              display flex
              .userImg
                width:50px;
                height:50px;
                margin 16px 16px 0 0 
                border-radius:50%
                cursor:pointer
              .userName
                color: #4d4d4d;
                cursor:pointer
                &:hover
                  color: #ca0c16;
            .cancel
              position absolute
              right 0
              border: 1px solid #999;
              border-radius: 4px;
              font-size: 14px;
              color: #999;
              width: 90px;
              height: 32px;
              margin-top: 25px;
              background: #fff;
              text-align: center;
              line-height: 32px;
              cursor:pointer
              &:hover
                color: #ca0c16;
                background: #fde3e4;
                border: 1px solid #ca0c16;
    .fanContent
      .title
        position relative
        height: 90px;
        line-height: 90px;
        border-bottom: 1px solid #e0e0e0;
        h3
          position absolute
          left 0
          top 0
          font-size: 20px;
          color: #3d3d3d;
          font-weight: 700;
        .fanCount
          position absolute
          right 0
          top 0
          font-size: 14px;
          color: #4d4d4d;
      .content
        .fanList
          .fanItem
            position relative
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            height: 82px;
            line-height: 82px;
            .userLink
              color: #4d4d4d;
              display flex
              .userImg
                width:50px;
                height:50px;
                margin 16px 16px 0 0 
                border-radius:50%
                cursor:pointer
              .userName
                color: #4d4d4d;
                cursor:pointer
                &:hover
                  color: #ca0c16;
            .cancel
              position absolute
              right 0
              border: 1px solid #999;
              border-radius: 4px;
              font-size: 14px;
              color: #999;
              width: 90px;
              height: 32px;
              margin-top: 25px;
              background: #fff;
              text-align: center;
              line-height: 32px;
              cursor:pointer
              &:hover
                color: #ca0c16;
                background: #fde3e4;
                border: 1px solid #ca0c16;
</style>
