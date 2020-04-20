<template>
  <div class="modal-box">
    <div class="modal-shade">
    </div>
    <transition name="aaa">
      <div class="modal">
        <div class="modal-title">
          <slot name="modal-title">
          </slot>
          <div class="modal-down" @click="$emit('btn')"><i class="el-icon-close"></i></div>
        </div>
        <div class="modal-content">
          <slot name="modal-content"></slot>
        </div>
        <div class="modal-footer">
          <button class="modal-footer-btn" @click="$emit('addBtn')">确认</button>
          <button class="modal-footer-btn" @click="$emit('btn')">取消</button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.modal-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20000000000000000000000000000000000000;
  .modal-shade {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .modal {
    width: 660px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -330px;
    margin-top: -242px;
    .modal-title {
      width: 100%;
      height: 60px;
      background-color: #f5f5f5;
      line-height: 60px;
      padding-left: 20px;
      font-size: 16px;
      color: #333333;
      box-sizing: border-box;
      .modal-down {
        float: right;
        padding-right: 10px;
      }
    }
    .modal-content {
      box-sizing: border-box;
      font-size: 16px;
      padding: 20px 20px;
      width: 100%;
      background-color: white;
    }
    .modal-footer {
      width: 100%;
      height: 82px;
      background-color: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      .modal-footer-btn {
        width: 110px;
        height: 30px;
        background-color: #ff6600;
        border: 0;
        color: white;
        margin-right: 10px;
      }
    }
  }
}
.aaa-enter-active,
.aaa-leave-active {
  top: 0;
  transition: all 0.5s;
}
.aaa-enter,
.aaa-leave-to {
  top: -50%;
}
</style>
