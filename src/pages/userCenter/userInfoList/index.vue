<template>
  <div class="userInfoWrapper">
    <div class="userTab">
      <ul class="userTop">
        <li class="active"><a href="#/uc/profile">个人资料</a></li>
        <li><a href="#/uc/favorite-list">我的收藏</a></li>
        <li><a href="#/uc/follow-list">我的关注</a></li>
        <li><a href="#/uc/fan-lit">我的粉丝</a></li>
      </ul>
      <ul class="userBottm">
        <li><a>我的博客</a></li>
        <li><a>我的下载</a></li>
        <li><a>我的论坛</a></li>
        <li><a>我的学院</a></li>
      </ul>
    </div>
    <div class="userContent">
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
              <span>关注</span>
              <span>粉丝</span>
              <span>|</span>
              <span>C币 0</span>
              <span>充值</span>
            </div>
            <div class="userHome">个人主页</div>
          </div>
          <div class="listBottom">
            <ul>
              <li v-for="(item,index) of infoList" :key="index">
                {{item.text}}
              </li>
            </ul>
            <div>修改资料</div>
          </div>
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
      { name:'',
        text:'昵称：小鲤鱼听听'
      },
      { name:'',
        text:'实名：李雅婷'
      },
      { name:'',
        text:'性别：女'
      },
      { name:'',
        text:'生日：1996-07-27'
      },
      { name:'',
        text:'地区：中国 陕西省 西安市'
      },
      { name:'',
        text:'行业：'
      },
      { name:'',
        text:'职位：前端开发工程师'
      },
      { name:'',
        text:'简介：'
      }
    ]
    }
  }
}
</script>

<style lang="stylus" scoped>
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
      .active
        background: #b20b13;
        color: #fff;
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
          .userHome
            position absolute
            right 0
            top 0
            font-size: 14px;
            color: #3399ea;
            padding-right: 9.3px;
</style>
