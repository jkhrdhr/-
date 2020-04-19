<template>
  <div>
    订单
    <order-header></order-header>
    <router-view></router-view>
    <nav-header></nav-header>
  </div>
</template>
<script>
import orderHeader from './../components/OrderHeader'
import navHeader from './../components/NavFooter'
export default {
  name: 'order',
  components: {
    orderHeader,
    navHeader
  }
}
</script>
<style lang="less" scoped>
</style>
