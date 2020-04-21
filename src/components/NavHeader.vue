<template>
  <div id="header">
    <!-- 头部 -->
    <div class="nav-topbar">
      <div class="content">
        <div class="topbar-left">
          <a href="#">小米商城</a>
          <a href="#">MUI</a>
          <a href="#">云服务</a>
          <a href="#">协议规则</a>
        </div>
        <div class="topbar-right">
          <a href="" v-if='userMsg.username'>{{userMsg.username}}</a>
          <router-link :to="{name:'login'}" v-if='!userMsg.username'>登陆</router-link>
          <a href="" v-if="!(userMsg.username)">注册</a>
          <a href="" v-else @click.prevent="logout">退出</a>
          <router-link :to="{name:'orderList'}" v-if="userMsg">我的订单</router-link>
          <router-link :to="{name:'card'}" class="my-car">
            <i class="el-icon-shopping-cart-2"></i>
            购物车({{cardList.length}})</router-link>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="content">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <router-link class="child" v-for="item in shopList" :to="{name:'product',params:{id:item.id}}"
                :key="item.id" @click="goProduct(item.id)" target="_blank">
                <img v-lazy="item.mainImage" :alt="item.subtitle">
                <p class="child-name">{{item.name}}</p>
                <p class="child-price">{{item.price | price}}</p>
              </router-link>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <div class="child">
                <img src="../../public/imgs/nav-img/nav-3-1.jpg" alt="">
                <p class="child-name">小米cc9</p>
                <p class="child-price">$1790元</p>
              </div>
              <div class="child">
                <img src="../../public/imgs/nav-img/nav-3-1.jpg" alt="">
                <p class="child-name">小米cc9</p>
                <p class="child-price">$1790元</p>
              </div>
              <div class="child">
                <img src="../../public/imgs/nav-img/nav-3-1.jpg" alt="">
                <p class="child-name">小米cc9</p>
                <p class="child-price">$1790元</p>
              </div>
              <div class="child">
                <img src="../../public/imgs/nav-img/nav-3-1.jpg" alt="">
                <p class="child-name">小米cc9</p>
                <p class="child-price">$1790元</p>
              </div>
              <div class="child">
                <img src="../../public/imgs/nav-img/nav-3-1.jpg" alt="">
                <p class="child-name">小米cc9</p>
                <p class="child-price">$1790元</p>
              </div>
              <div class="child">
                <img src="../../public/imgs/nav-img/nav-3-1.jpg" alt="">
                <p class="child-name">小米cc9</p>
                <p class="child-price">$1790元</p>
              </div>
            </div>
          </div>
        </div>
        <div class="header-search">
          <input type="text" name="aa">
          <a href="">
            <i class="el-icon-search"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'nav-header',
  data () {
    return {
      // 商品数组
      shopList: []
    }
  },
  computed: {
    ...mapState(['cardList', 'userMsg'])
  },
  created () {
    this.getShopList()
  },
  filters: {
    price (price) {
      if (price <= 0) return '0.00'
      return `￥${price.toFixed(2)}元`
    }
  },
  inject: ['getUserMsg', 'getCard'],
  methods: {
    //   退出登录
    async logout () {
      await this.axios.post('/user/logout')
      this.getUserMsg()
      this.getCard()
    },
    async getShopList () {
      const data = await this.axios.get('/products', {
        params: {
          categoryId: '100012'
        }
      })
      if (data.list.length > 6) {
        this.shopList = data.list.slice(0, 5)
      }
      this.shopList = data.list
    }
  }
}
</script>
<style lang="less" scoped>
@import url(../assets/less/mixin.less);
#header {
  .nav-topbar {
    width: 100%;
    height: 39px;
    background-color: #333333;
    .topbar-left,
    .topbar-right {
      float: left;
      a {
        line-height: 39px;
        color: #b0b0b0;
        padding-right: 17px;
      }
    }
    .topbar-right {
      float: right;
      .my-car {
        display: inline-block;
        width: 120px;
        height: 100%;
        text-align: center;
        color: #ffffff;
        background-color: #ff6600;
      }
    }
  }
  .nav-header {
    width: 100%;
    .content {
      position: relative;
      height: 112px;
      .flex();
    }
    .header-logo {
      width: 55px;
      height: 55px;
      background-color: #ff6600;
      a {
        width: 110px;
        height: 100%;
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
    .header-menu {
      width: 850px;
      height: 100%;
      z-index: 9;
      padding-left: 209px;
      .flex(flex-start);
      .item-menu {
        span {
          color: #333333;
          font-size: 16px;
          margin-right: 20px;
          font-weight: 700;
        }
        &:hover {
          span {
            color: #ff6600;
          }
          .children {
            height: 220px;
            opacity: 1;
          }
        }
        .children {
          z-index: 100;
          background-color: #ffffff;
          transition: all 0.2s ease-in;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          border-radius: 0 0 5px 5px;
          position: absolute;
          top: 112px;
          left: 0;
          box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
          width: 1226px;
          height: 0px;
          opacity: 0;
          overflow: hidden;
          .child {
            width: 204px;
            height: 100%;
            flex-direction: column;
            position: relative;
            .flex("");
            img {
              width: auto;
              height: 111px;
              object-fit: cover;
              margin-top: 26px;
            }
            .child-name {
              color: #333333;
              font-size: 14px;
              margin-top: 5px;
              font-weight: 600;
            }
            .child-price {
              color: #ff6600;
              font-size: 12px;
              margin-top: 5px;
            }
            &::before {
              content: "";
              position: absolute;
              top: 28px;
              right: 0;
              width: 1px;
              height: 100px;
              border-left: 1px solid #ccc;
            }
            &:last-child::before {
              display: none;
            }
          }
        }
      }
    }
    .header-search {
      width: 319px;
      height: 52px;
      border: 1px solid #ccc;
      .flex();
      input {
        border: 0;
        width: 254px;
        height: 100%;
        margin-left: 10px;
        border-right: 1px solid #ccc;
      }
      a {
        display: inline-block;
        width: 52px;
        height: 52px;
        text-align: center;
        line-height: 52px;
      }
    }
  }
}
</style>
