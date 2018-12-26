<template>
  <div class="topWrapper">
      <div v-for="(item,index) of list" :key="index">
        <a :class="item.name">
          <img :src="item.imgUrl"/>
          <div class="advertisementIcon">广告</div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name:'recommendTop',
  props:{
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.topWrapper
  margin: 0 0 8px;
  display: flex;
  a
    display:block
  .img1
    margin-right:14px
    position relative
    left 0
    top 0
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
  .img2
    position relative
    left 0
    top 0
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
</style>
