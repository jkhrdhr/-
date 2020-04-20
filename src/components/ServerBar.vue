// 服务组件
<template>
  <div class="serve">
    <div class="content">
      <ul>
        <li>
          <i></i>
          预约维修服务</li>
        <li>
          <i></i>
          7天无理由退货</li>
        <li>
          <i></i>
          15天免费换货</li>
        <li>
          <i></i>
          满150元包邮</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.serve {
  width: 100%;
  height: 88px;
  background-color: #ffffff;
  ul {
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      text-align: center;
      width: 25%;
      font-size: 16px;
      color: #666666;
      border-right: 1px solid #666;
      &:last-child {
        border: 0;
      }
    }
  }
}
</style>
