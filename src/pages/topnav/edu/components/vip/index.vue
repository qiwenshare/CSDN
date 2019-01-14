<template>
  <div class="vipWrapper">
    <vip-exchange></vip-exchange>
    <second-kill></second-kill>
    <vip-new></vip-new>
  </div>
</template>

<script>
import vipExchange from './components/vipExchange'
import secondKill from './components/secondKill'
import vipNew from './components/vipNew'

export default {
  name:'vip',
  components:{
    vipExchange,
    secondKill,
    vipNew
  }
}
</script>

<style lang="stylus" scoped>
.vipWrapper
  position relative
  left 0
  right 0
  top 0
  width: 1170px;
  margin: 0 auto 30px;
</style>
