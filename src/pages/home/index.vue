<template>
    <div>
        <Header></Header>
        <div class="content">
          <sidebar></sidebar>
        </div>
    </div>
</template>

<script>
import Header from '@/pages/common/header'
import sidebar from '@/pages/common/sidebar'

export default {
  name: 'home',
  components: {
    Header,
    sidebar
  }
}
</script>

<style lang="stylus" scoped>
.content
  width: 1228px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 10px;
</style>
