<template>
  <div class="cardHeader">
    <div class="content">
      <div class="logo">
        <a href="/#/index" class="logobg">
        </a>
      </div>
      <div class="title">
        <h2>
          <slot name="title1"></slot>
        </h2>
        <p>
          <slot name="title2"></slot>
        </p>
      </div>
      <div class="userName">{{$store.state.userMsg.username}}</div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.cardHeader {
  width: 100%;
  height: 117px;
  border-bottom: 2px solid #ff6600;
  .content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 55px;
      height: 55px;
      background-color: #ff6600;
      overflow: hidden;
      a {
        width: 110px;
        height: 55px;
        display: inline-block;
        transition: all 0.4s ease;
        &:before {
          content: "";
          display: inline-block;
          width: 55px;
          height: 55px;
          background: url(/imgs/mi-logo.png) no-repeat center;
          background-size: 55px;
        }
        &:after {
          content: "";
          display: inline-block;
          width: 55px;
          height: 55px;
          background: url(/imgs/mi-home.png) no-repeat center;
          background-size: 55px;
        }
        &:hover {
          transform: translateX(-50%);
        }
      }
    }
    .title {
      width: 1000px;
      display: flex;
      h2 {
        color: #333333;
        font-size: 28px;
      }
      p {
        font-size: 14px;
        color: #999;
        line-height: 40px;
        margin-left: 20px;
      }
    }
    .userName {
      font-size: 14px;
      color: #999;
      margin-right: 10px;
    }
  }
}
</style>
