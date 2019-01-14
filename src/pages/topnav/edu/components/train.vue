<template>
  <div class="trainWrapper">
    <div class="title">
      <span class="icon iconfont">&#xe663;</span>
      <span class="text">实战特训营</span>
    </div>
    <div class="content">
      <ul class="list">
        <li class="item" v-for="(item,index) of trainList" :class="item.name" :key="index">
          <img class="img" :src="item.imgUrl"/>
          <div class="text">{{item.text}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"train",
  data () {
    return {
      trainList:[
        { name:"item1",
          imgUrl:require("@/assets/img/topnav/edu/train/item1.jpg"),
          text:"人工智能工程师"
        },
        { name:"item2",
          imgUrl:require("@/assets/img/topnav/edu/train/item2.jpg"),
          text:"Python全栈实训营"
        },
        { name:"item3",
          imgUrl:require("@/assets/img/topnav/edu/train/item3.jpg"),
          text:"区块链工程师"
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.trainWrapper
  width 1140px
  margin 0 auto 30px
  .title
    padding-bottom 12px
    .icon
      color: #e44859;
      font-size: 28px;
      margin-right: 8px;
    .text
      color: #333;
      font-size: 18px;
      font-weight 400
  .content
    .list
      display flex
      .item
        margin-right 30px
        &:last-child
          margin-right 0
        .img
          width 360px
          height 130px
          border-radius: 4px;
        .text
          width 126px
          height 22px
          line-height 22px
          margin 8px auto 0
          padding 0 40px
          border: 1px solid #eaeaea;
          border-radius: 4px;
          text-align center
          font-size: 14px;
          font-weight bold

</style>
