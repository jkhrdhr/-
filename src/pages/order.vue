<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <nav-header></nav-header>
  </div>
</template>
<script>
import navHeader from './../components/NavFooter'
export default {
  name: 'order',
  components: {
    navHeader
  },
  deactivated () {
    this.$destroy(true)
  }
}
</script>
<style lang="less" scoped>
</style>
