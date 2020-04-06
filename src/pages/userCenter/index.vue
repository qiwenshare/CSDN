<template>
  <div class="userCenterWrapper">
    <Header></Header>
    <user-info-list></user-info-list>
  </div>
</template>

<script>
import Header from '@/pages/common/header'
import userInfoList from '@/pages/userCenter/userInfoList/index'

export default {
  name: 'userCenter',
  components: {
    Header,
    userInfoList
  }
}
</script>

<style lang="stylus" scoped>
.userCenterWrapper
  position relative
  top 0
  left 0
</style>
