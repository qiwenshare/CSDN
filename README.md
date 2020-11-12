# 仿CSDN网站

## 演示网站
[网站地址](https://www.qiwenshare.com)
[演示地址](https://www.qiwenshare.com/opensource)
[介绍说明](https://www.qiwenshare.com/essay/detail/6)

## 介绍
采用vue-cli2脚手架，高度还原了CSDN的前台页面，标准为2019年新年版页面，目前已经完成了首页（包括首页-区块链）、博客、学院页面。所有页面均为静态页面，页面所涉及的交互效果基本已添加

 **您可以在此基础上继续开发来添加其他页面，成为本项目的贡献者之一** 

 **您也可以以该项目作为脚手架，进行其他项目的开发** 

## 软件架构
该项目采用vue-cli2脚手架搭建，部署在nginx上,主要用到以下关键技术：
Vue.js, stylus,  Node.js, webpack, element UI, vue-awesome-swiper

## 安装教程

1. 拉取代码
2. 安装依赖：npm install
3. 启动：npm run dev，浏览器地址栏输入localhost:8080即可打开页面（端口可能会变化）
4. 打包部署：npm run build，将根目录下的dist文件夹移入到nginx/html目录下，配置服务和端口，启动nginx，打开浏览器输入IP+端口即可打开页面


## 使用说明

本项目页面均为静态页面，没有接口请求，所有数据前台模拟，启动即可运行

## 部分功能演示截图
 **首页**  :yellow_heart: 

![首页顶部](https://images.gitee.com/uploads/images/2020/0406/222828_17ae6a6d_1837873.png "首页1.png")

![首页底部](https://images.gitee.com/uploads/images/2020/0406/222848_9d2193da_1837873.png "首页2.png")

 **首页区块链**  :blue_heart: 

![首页区块链](https://images.gitee.com/uploads/images/2020/0406/222907_bac652f5_1837873.png "首页-区块链.png")

 **博客**  :purple_heart: 

![博客](https://images.gitee.com/uploads/images/2020/0406/222923_a63b68c2_1837873.png "博客.png")


 **学院**  :heart: 

![学员](https://images.gitee.com/uploads/images/2020/0406/222938_3e80e59f_1837873.png "学院.png")

 **交互效果**  :green_heart: 

![学员页面-交互效果](https://images.gitee.com/uploads/images/2020/0406/223001_cbd5ab6a_1837873.png "学院-交互效果1.png")


## 联系我
各种问题可扫描加入QQ群进行咨询

**QQ交流群**请扫描下面二维码

<img width="30%" src="https://images.gitee.com/uploads/images/2020/0406/164832_5121dc5e_947714.png"/>

**微信公众号**请扫描下面二维码

<img width="30%" src="https://images.gitee.com/uploads/images/2020/0406/164833_d99e92ee_947714.png"/>

## 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


## 码云特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5.  码云官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
