<template>
  <div>
    <product-params btnShow>
      <template v-slot:title>
        {{phoneMsg.name}}
      </template>
    </product-params>
    <div class="content">
      <div class="wraaper">
        <swiper :options="swiperOption">
          <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="content-box">
        <h2>{{phoneMsg.name}}</h2>
        <p>相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红
          外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
        <div class="item-delivery">小米自营</div>
        <div class="item-price">{{phoneMsg.price}}元<span>1999元</span></div>
        <div class="item-border"></div>
        <div class="item-addr">
          <i class="el-icon-location-outline"></i>
          <div class="addr">
            <p>北京 北京市 朝阳区 安定门街道</p>
            <p>有现货</p>
          </div>
        </div>
        <div class="item-version">
          <h2>选择版本</h2>
          <div class="phone-fl" :class="{'check':version}" @click="version=true">6GB+64GB 全网通</div>
          <div class="phone-rg " :class="{'check':!version}" @click="version=false">4GB+64GB 移动4G</div>
        </div>
        <div class="item-color">
          <h2>选择颜色</h2>
          <div class="phone-fl check">深空灰</div>
        </div>
        <div class="item-total">
          <span>{{phoneMsg.name}} {{version?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} 深灰色</span>
          <span class="price">{{phoneMsg.price}}元</span>
          <p class="aggPrice">总计：{{phoneMsg.price}}元</p>
        </div>
        <a href="" class="item-btn" @click.prevent="addCard(phoneMsg.id)">加入购物车</a>
      </div>
    </div>
  </div>
</template>
<script>
import ProductParams from '../components/product/ProduictParams'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  data () {
    return {
      version: true,
      phoneMsg: {},
      swiperOption: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    ProductParams,
    Swiper,
    SwiperSlide
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getPhoneMes()
    })
  },
  props: ['id'],
  directives: {
    swiper: directive
  },
  methods: {
    async getPhoneMes () {
      const res = await this.axios.get(`/products/${this.id}`)
      this.phoneMsg = res
    },
    //     添加购物车
    async addCard (id) {
      const res = await this.axios.post('/carts', {
        productId: id,
        selected: true
      })
      this.$store.dispatch('modCardNum', res.cartTotalQuantity || 0)
      this.$router.push('/order/orderCard')
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  height: 870px;
  .wraaper {
    float: left;
    width: 642px;
    height: 100%;
    .swiper-slide {
      width: 642px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .content-box {
    width: 584px;
    height: 870px;
    float: right;
    h2 {
      font-size: 28px;
      padding: 30px 0 16px 0;
      color: #333333;
    }
    p {
      font-size: 14px;
      color: #333;
    }
    .item-delivery {
      font-size: 16px;
      color: #ff6700;
      margin: 26px 0 14px 0;
    }
    .item-price {
      font-size: 20px;
      color: #ff6700;
      span {
        font-size: 16px;
        color: #999999;
        margin-left: 10px;
      }
    }
    .item-border {
      width: 100%;
      height: 0;
      border-top: 1px solid #999;
      margin: 25px 0 28px 0;
    }
    .item-addr {
      width: 100%;
      height: 108px;
      border: 1px solid #ccc;
      background-color: #fafafa;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      i {
        font-size: 28px;
        position: absolute;
        top: 31px;
        left: 37px;
      }
      .addr {
        width: 400px;
        height: 70px;
        margin-top: 31px;
        margin-left: 64px;
        p {
          font-size: 14px;
          color: #333333;
          &:last-child {
            color: #ff6700;
            margin-top: 5px;
          }
        }
      }
    }
    .item-version,
    .item-color {
      width: 100%;
      height: 94px;
      h2 {
        font-size: 18px;
        color: #333;
      }
      .phone-fl {
        width: 287px;
        height: 50px;
        float: left;
        border: 1px solid #ccc;
        color: #333;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        &.check {
          border: 1px solid #ff6700;
          color: #ff6700;
        }
      }
      .phone-rg {
        font-size: 16px;
        width: 287px;
        height: 50px;
        float: right;
        border: 1px solid #ccc;
        color: #333;
        line-height: 50px;
        text-align: center;
        &.check {
          border: 1px solid #ff6700;
          color: #ff6700;
        }
      }
    }
    .item-color {
      margin-top: 30px;
    }
    .item-total {
      width: 100%;
      height: 108px;
      border: 1px solid #ccc;
      background-color: #fafafa;
      box-sizing: border-box;
      margin-top: 80px;
      overflow: hidden;
      position: relative;
      z-index: 0;
      span {
        font-size: 14px;
        color: #333;
        margin-top: 20px;
        float: left;
        margin-left: 20px;
      }
      .price {
        float: right;
        color: #ff6700;
        margin-right: 20px;
      }
      .aggPrice {
        position: absolute;
        left: 20px;
        bottom: 20px;
      }
      p {
        font-size: 24px;
        color: #ff6700;
      }
    }
    .item-btn {
      display: block;
      width: 300px;
      font-size: 16px;
      height: 54px;
      color: white;
      line-height: 54px;
      text-align: center;
      background-color: #ff6700;
      margin-top: 20px;
    }
  }
}
</style>
