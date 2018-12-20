<template>
<div class="headerWrapper">
    <nav class="header">
        <ul class="headerList headerLeft">
            <li><a><img src="/static/img/csdnLog.png"/></a></li>
            <li v-for="(item,index) in listLeft" :key="index">
                <a>{{item}}</a>
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
            <li><a><img class="headImg" src="/static/img/headImg.png" /><span class="iconfont headImgIcon">&#xe600;</span></a></li>
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    name: 'Header',
    data() {
      return {
        listLeft:['博客','学院','下载','图文课','论坛','APP','问答','商城','VIP会员','活动','招聘','ITeye','GitChat']
      };
    },
    methods: {
      
    }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl"
.headerWrapper
    height:40px
    width:100%
    padding:0 28px 0 17px
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
                height:100%
                padding:0 8px
                float:left
                text-align:center
                verticalMiddle() 
                &:hover
                    color:#CA0C16
        .headerRight
            flex:4
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
                    .headImg
                        width:26px
                        height:auto
            .searchWrapper
                width: 160px;
                height: 26px;
                border: 1px solid #CCC;
                border-radius: 4px;
                color: #ccc
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
            
</style>
