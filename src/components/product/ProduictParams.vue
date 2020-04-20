<template>
  <div :class="{ flexd:scrollclass }">
    <div class="content">
      <div class="product-title">
        <slot name="title"></slot>
      </div>
      <div class="product-nav">
        <ul>
          <li><a href="javascript:;">概述</a></li>
          <li></li>
          <li><a href="javascript:;">参数</a></li>
          <li></li>
          <li><a href="javascript:;">用户评价</a></li>
        </ul>
        <a class="btn">立即购买</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      scrollclass: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scroll)
  },
  methods: {
    scroll () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYoffset
      this.scrollclass = scrollTop >= 152
      console.log(1)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll)
  }
}
</script>
<style lang="less" scoped>
.flexd {
  position: fixed;
  top: 0;
  left: 50%;
  margin-left: -613px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
}
.content {
  height: 70px;
  line-height: 70px;
  .product-title {
    margin-left: 20px;
    float: left;
    font-size: 18px;
    color: #333;
  }
  .product-nav {
    float: right;
    display: flex;
    align-items: center;
    ul {
      li {
        float: left;
        a {
          font-size: 14px;
          color: #666;
        }
        &:nth-child(2n) {
          width: 0;
          height: 14px;
          margin: 0 10px;
          border-left: 1px solid #666;
          margin-top: 28px;
        }
      }
    }
    .btn {
      display: inline-block;
      width: 110px;
      height: 30px;
      background-color: #ff6600;
      color: white;
      font-size: 14px;
      line-height: 30px;
      text-align: center;
      margin-left: 20px;
      cursor: pointer;
      margin-right: 5px;
    }
  }
}
</style>
