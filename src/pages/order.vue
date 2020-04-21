<template>
  <div>
    <router-view></router-view>
    <nav-header></nav-header>
  </div>
</template>
<script>
import navHeader from './../components/NavFooter'
export default {
  name: 'order',
  components: {
    navHeader
  }
}
</script>
<style lang="less" scoped>
</style>
