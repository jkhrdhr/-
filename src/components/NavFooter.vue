<template>
  <div>
    <server-bar></server-bar>
    <div class="footer">
      <!-- 尾部 -->
      <div class="footer-logo">
        <img src="../../public/imgs/logo-footer.png" alt="">
      </div>
      <div class="footer-title">小米商城</div>
      <ul>
        <li><a href="javascript:;">小米商城</a></li>
        <li></li>
        <li><a href="javascript:;">小米贷款</a></li>
        <li></li>
        <li><a href="javascript:;">米家</a></li>
        <li></li>
        <li><a href="javascript:;">米聊</a></li>
      </ul>
      <p class="footer-sites">Copyright ©2019 <a href="https://www.xiaomi.com">www.xiaomi.com</a> All Rights Reserved.
      </p>
    </div>
  </div>
</template>
<script>
import ServerBar from './ServerBar'
export default {
  name: 'nav-footer',
  components: {
    ServerBar
  }
}
</script>
<style lang="less" scoped>
@import url(../assets/less/config.less);
@import url(../assets/less/reset.less);
@import url(../assets/less/mixin.less);
.footer {
  box-sizing: border-box;
  width: 100%;
  height: 238px;
  background-color: @colorB;
  border-top: 3px solid @colorA;
  flex-direction: column;
  .flex(space-around);
  .footer-logo {
    margin-top: 40px;
    width: 53px;
    height: 36px;
    img {
      width: 100%;
    }
  }
  .footer-title {
    font-size: 16px;
    color: @colorD;
  }
  ul {
    margin-top: 10px;
    li {
      float: left;
      font-size: 16px;
      a {
        color: @colorD;
      }
    }
    li:nth-child(2n) {
      width: 0;
      height: 16px;
      margin: 0 10px;
      margin-top: 4px;
      border-left: 1px solid @colorD;
    }
  }
  .footer-sites {
    font-size: 16px;
    color: @colorD;
    margin-bottom: 20px;
    a {
      color: @colorA;
    }
  }
}
</style>
