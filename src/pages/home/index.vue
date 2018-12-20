<template>
    <div>
        <Header></Header>
        <div class="contentSidebar">
          <sidebar></sidebar>
          <div class="contentWrapper">
            <commend-top></commend-top>
            <div class="contentMain">
              <homepage-main></homepage-main>
              <commend-right></commend-right>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Header from '@/pages/common/header'
import sidebar from '@/pages/common/sidebar'
import commendTop from '@/pages/common/recommend/top'
import commendRight from '@/pages/common/recommend/right'
import homepageMain from './components/main'

export default {
  name: 'home',
  components: {
    Header,
    sidebar,
    commendTop,
    commendRight,
    homepageMain
  }
}
</script>

<style lang="stylus" scoped>
.contentSidebar
  width: 1228px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 10px;
  margin:0 auto
  display flex
  .contentWrapper
    width:1074px
    .contentMain
      display flex
</style>
