<template>
  <div class="header">
    <div class="content">
      <div class="login-logo">
        <img v-lazy="'/imgs/login-logo.png'" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.header {
  .content {
    height: 113px;
    .login-logo {
      width: 100%;
      height: 113px;
      img {
        width: auto;
        height: 100%;
      }
    }
  }
}
</style>
