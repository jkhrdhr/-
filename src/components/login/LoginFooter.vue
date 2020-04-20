<template>
  <div class="login-footer">
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
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.login-footer {
  width: 100%;
  height: 95px;
  text-align: center;
  ul {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    li {
      a {
        color: #999999;
        font-size: 16px;
      }
      &:nth-child(2n) {
        width: 0;
        border-left: 1px solid #cccccc;
        height: 16px;
        margin: 0 10px;
        margin-top: 3px;
      }
    }
  }
  p {
    font-size: 16px;
    color: #999999;
    margin-top: 5px;
  }
}
</style>
