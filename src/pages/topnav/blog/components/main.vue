<template>
  <div class="mainWrapper">
    <ul class="contentList">
      <li class="contentItem" v-for="(item,index) of essayList" :key="index">
        <a class="link" :href="item.link" target="_blank">
          <div class="userBar">
            <img class="headImg" :src="item.imgUrl" />
            <div class="userInfo">
              <div class="userName">{{item.userName}}</div>
              <div class="otherComment">
                <span>其他</span>
                <span>|</span>
                <span>评论</span>
              </div>
            </div>
            <div class="iconfont"></div>
          </div>
          <div class="title">{{item.title}}</div>
          <div class="summary">{{item.summary}}</div>
          <div class="operateLine">
            <span class="date">{{item.date}}</span>
            <div class="operate">
              <span>点赞</span>
              <span>|</span>
              <span>收藏</span>
              <span>|</span>
              <span>分享</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'homepageMain',
  data(){
    return{
      essayList:[
        { link:"https://blog.csdn.net/weixin_34026484?utm_source=feed",
          imgUrl:require("@/assets/img/topnav/blog/contentList/headImg.jpg"),
          userName:"weixin_34026484",
          title:"Java基础——调用CMD命令",
          summary:"1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ",
          date:"10月16日"
        },
        { link:"https://blog.csdn.net/weixin_34026484?utm_source=feed",
          imgUrl:require("@/assets/img/topnav/blog/contentList/headImg.jpg"),
          userName:"weixin_34026484",
          title:"Java基础——调用CMD命令",
          summary:"1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ",
          date:"10月16日"
        },
        { link:"https://blog.csdn.net/weixin_34026484?utm_source=feed",
          imgUrl:require("@/assets/img/topnav/blog/contentList/headImg.jpg"),
          userName:"weixin_34026484",
          title:"Java基础——调用CMD命令",
          summary:"1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ",
          date:"10月16日"
        },
        { link:"https://blog.csdn.net/weixin_34026484?utm_source=feed",
          imgUrl:require("@/assets/img/topnav/blog/contentList/headImg.jpg"),
          userName:"weixin_34026484",
          title:"Java基础——调用CMD命令",
          summary:"1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ",
          date:"10月16日"
        },
        { link:"https://blog.csdn.net/weixin_34026484?utm_source=feed",
          imgUrl:require("@/assets/img/topnav/blog/contentList/headImg.jpg"),
          userName:"weixin_34026484",
          title:"Java基础——调用CMD命令",
          summary:"1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ",
          date:"10月16日"
        },
        { link:"https://blog.csdn.net/weixin_34026484?utm_source=feed",
          imgUrl:require("@/assets/img/topnav/blog/contentList/headImg.jpg"),
          userName:"weixin_34026484",
          title:"Java基础——调用CMD命令",
          summary:"1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ",
          date:"10月16日"
        },
        { link:"https://blog.csdn.net/weixin_34026484?utm_source=feed",
          imgUrl:require("@/assets/img/topnav/blog/contentList/headImg.jpg"),
          userName:"weixin_34026484",
          title:"Java基础——调用CMD命令",
          summary:"1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ",
          date:"10月16日"
        },
        { link:"https://blog.csdn.net/weixin_34026484?utm_source=feed",
          imgUrl:require("@/assets/img/topnav/blog/contentList/headImg.jpg"),
          userName:"weixin_34026484",
          title:"Java基础——调用CMD命令",
          summary:"1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ",
          date:"10月16日"
        },
        { link:"https://blog.csdn.net/weixin_34026484?utm_source=feed",
          imgUrl:require("@/assets/img/topnav/blog/contentList/headImg.jpg"),
          userName:"weixin_34026484",
          title:"Java基础——调用CMD命令",
          summary:"1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ",
          date:"10月16日"
        },
        { link:"https://blog.csdn.net/weixin_34026484?utm_source=feed",
          imgUrl:require("@/assets/img/topnav/blog/contentList/headImg.jpg"),
          userName:"weixin_34026484",
          title:"Java基础——调用CMD命令",
          summary:"1、什么是CMD命令?简单说，就是运行，按住Windows+R键，弹出框中输入cmd，即可执行命令。常见的CMD命令有：1. gpedit.msc-----组策略2. sndrec32-------录音机3. Nslookup-------IP地址侦测器4. explorer-------打开资源管理器5. logoff---------注销... ",
          date:"10月16日"
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
