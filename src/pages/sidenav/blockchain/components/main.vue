<template>
  <div class="mainWrapper">
    <div class="contentListTile">
      区块链资讯
    </div>
    <content-list></content-list>
  </div>
</template>

<script>
import contentList from '@/pages/common/contentList'

export default {
  name:'blockchainMain',
  components:{
    contentList
  }
}
</script>

<style lang="stylus" scoped>
.mainWrapper 
  width 100%
  .contentListTile
    color: #e3635d;
    font-size: 18px;
    height: 43px;
    line-height: 43px;
    border-bottom: 1px solid #ebeced;
    background: #fff;
    padding-left: 24px;
    width: 736px;
    font-weight: 700;
</style>
