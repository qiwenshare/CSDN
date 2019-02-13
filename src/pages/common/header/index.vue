<template>
<div class="headerWrapper">
    <nav class="header">
        <ul class="headerList headerLeft">
            <li>
                <a><img src="@/assets/img/common/header/csdnLog.png"/></a>
            </li>
            <li v-for="(item,index) in listLeft" :key="index">
                <router-link :to="item.topnavLink" class="topnavDiv" tag="div">{{item.name}}</router-link>
            </li>
        </ul>
        <ul class="headerList headerRight">
            <li>
                <div class="searchWrapper">
                    <input class="searchText" placeholder="搜CSDN" />
                    <div class="searchButtonWrapper">
                        <span class="iconfont serchButton">&#xe61b;</span>
                    </div>
                </div>
            </li>
            <li><a><span class="iconfont writeBlogIcon">&#xe629;</span>写博客</a></li>
            <li><a><span class="iconfont makeMoneyIcon">&#xe62a;</span>赚零钱</a></li>
            <li><a><span class="iconfont uploadResourceIcon">&#xe620;</span>传资源</a></li>
            <li>
                <a class="loginCenter" @mouseenter="userActive()" @mouseleave="userDefault()"
                    href="/userCenter" target="_blank"
                >
                    <img class="headImg" src="@/assets/img/common/header/headImg.png" />
                    <span class="iconfont headImgIcon">&#xe600;</span>
                </a>
                <div class="userControl" @mouseenter="userActive()" @mouseleave="userDefault()" v-show="userVisible">
                    <ul class="userConList">
                        <li class="userItem" v-for="(item,index) of userConList" :key="index">
                            <a class="itemLink" :href="item.link">
                                <span class="icon iconfont" v-html="item.icon"></span>
                                <span class="itemText">{{item.text}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    name: 'Header',
    data() {
      return {
        listLeft:[
            {   name:'博客',
                topnavLink:'/blog'
            },
            {   name:'学院',
                topnavLink:'/edu'
            },
            {   name:'下载',
                topnavLink:'/download'
            },
            {   name:'图文课',
                topnavLink:'/course'
            },
            {   name:'论坛',
                topnavLink:'/bbs'
            },
            {   name:'APP',
                topnavLink:'/app'
            },
            {   name:'问答',
                topnavLink:'/ask'
            },
            {   name:'商城',
                topnavLink:'/mall'
            },
            {   name:'VIP会员',
                topnavLink:'/vip'
            },
            {   name:'活动',
                topnavLink:'/activity'
            },
            {   name:'招聘',
                topnavLink:'/job'
            },
            {   name:'ITeye',
                topnavLink:'/iteye'
            },
            {   name:'GitChat',
                topnavLink:'/gitchat'
            }
        ],
        userConList:[
            {   icon:'&#xe605;',
                link:'',
                text:'我的关注'
            },
            {   icon:'&#xe60a;',
                link:'',
                text:'我的收藏'
            },
            {   icon:'&#xe664;',
                link:'',
                text:'个人中心'
            },
            {   icon:'&#xe67b;',
                link:'',
                text:'帐号设置'
            },
            {   icon:'&#xe603;',
                link:'',
                text:'我的博客'
            },
            {   icon:'&#xe646;',
                link:'',
                text:'管理博客'
            },
            {   icon:'&#xe601;',
                link:'',
                text:'我的学院'
            },
            {   icon:'&#xe604;',
                link:'',
                text:'我的下载'
            },
            {   icon:'&#xe62a;',
                link:'',
                text:'我的C币'
            },
            {   icon:'&#xe667;',
                link:'',
                text:'订单中心'
            },
            {   icon:'&#xe77c;',
                link:'',
                text:'帮助'
            },
            {   icon:'&#xe69c;',
                link:'',
                text:'退出'
            }
        ],
        userVisible:false
      };
    },
    methods: {
        userActive(){
            this.userVisible = true;
            $(".headImgIcon").css("transition",'transform 0.5s');
            $(".headImgIcon").css("transform",'rotate(180deg)');
        },
        userDefault(){
            this.userVisible = false;
            $(".headImgIcon").css("transition",'transform 0.5s');
            $(".headImgIcon").css("transform",'rotate(0deg)');
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl"
.router-link-active
  border-bottom:2px solid #CA0C16
.headerWrapper
    height:40px
    min-width: 1200px;
    width:100%
    font-size:14px
    background-color:#fff
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05)
    .header
        display:flex
        height:100%
        margin:0 52px
        .headerLeft
            flex:6
            li
                height:40px
                padding:0 8px
                float:left
                text-align:center
                verticalMiddle() 
                &:hover
                    color:#CA0C16
                .topnavDiv
                    height:38px
                    line-height 38px
        .headerRight
            flex:4
            position relative
            top 0
            left 0
            li
                height:100%
                padding:0 8px
                float:left
                text-align:center
                verticalMiddle()
                &:hover
                    color:#CA0C16 
                a   
                    height: 26px
                    line-height:26px
                    color:#3D3D3D;
                    font-size:14px;
                    &:hover
                        color:#CA0C16
                    .iconfont
                        font-size:16px
                        margin-right:3px
                    .writeBlogIcon
                        color:#CA0C16 
                    .makeMoneyIcon
                        color:orange
                    .uploadResourceIcon
                        color:blue
                    .headImgIcon
                        color:#888
                        font-size:10px
                        position: absolute;
                        right: 37px;
                        top: 1px;
                    .headImg
                        width:26px
                        height:auto
                .searchWrapper
                    width: 160px;
                    height: 26px;
                    border: 1px solid #CCC;
                    border-radius: 4px;
                    color: red;
                    .searchText
                        color: #4D4D4D;
                        float: left;
                        width: 122px;
                        padding: 4px 0 4px 7px;
                        border: 0;
                        height: 18px;
                        border-radius: 10px;
                    input::-webkit-input-placeholder {
                        /* placeholder颜色  */
                        color: #ccc;
                    }
                    .searchButtonWrapper
                        height:100%
                        width:30px
                        float:right
                        .serchButton
                            font-size:20px
                            height:100%
                            line-height:100%
                .loginCenter
                    width 26px;
                    height: 40px;
                    line-height: 40px;
                .userControl
                    position: absolute;
                    top: 40px;
                    right: 30px;
                    z-index: 99999;
                    background-color: #fff;
                    border-radius: 0 0 4px 4px;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,.1);
                    width: 124px;
                    padding: 16px 0 
                    .userConList
                        .userItem
                            position relative
                            padding 0
                            width: 100%;
                            .itemLink
                                display block
                                margin 0 16px
                                .iconfont
                                    position absolute
                                    left 16px
                                    font-size 14px
                                    color #ccc
                                .itemText
                                    position absolute
                                    left 40px
                            &:nth-child(4),
                            &:nth-child(8),
                            &:nth-child(10)
                                padding-bottom: 10px;
                                border-bottom: 1px solid #E0E0E0;
                            &:nth-child(5),
                            &:nth-child(9),
                            &:nth-child(11)
                                padding-top: 10px;
                                

</style>
