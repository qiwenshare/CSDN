<template>
  <div class="mainWrapper">
      <main-adv></main-adv>
      <essayList></essayList>
  </div>
</template>

<script>
import mainAdv from './advertisement'
import essayList from '@/pages/common/essayList'

export default {
  name:'homepageMain',
  components:{
    mainAdv,
    essayList
  }
}
</script>

<style lang="stylus" scoped>
.mainWrapper
  width:760px
  margin-right 14px
</style>
