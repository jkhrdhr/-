<template>
  <div>
    <order-header>
      <template v-slot:title1>
        订单支付
      </template>
      <template v-slot:title2>
        请谨防钓鱼链接或诈骗电话，了解更多
      </template>
    </order-header>
    <div class="box">
      <div class="content">
        <div class="msg">
          <div class="msg-old">
            <div class="msg-old-content">
              <div class="msg-old-success">
                <img src="/imgs/icon-gou.png" alt="">
              </div>
              <div class="msg-old-info">
                <div class="lf">
                  <h1>订单提交成功！去付款咯</h1>
                  <p>请在30分内完成支付, 超时后将取消订单<br>
                    收货信息: </p>
                </div>
                <div class="rg">
                  <div class="price">
                    应付总额：<span>{{orderDetails.payment}}</span> 元
                  </div>
                  <div class="btn">订单详情<i :class="{'show':show}" @click="show = !show"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div class="msg-new" :class="{'show':show}">
            <div class="msg-new-content">
              <p>订单号码： {{orderDetails.orderNo}}</p>
              <p>收货信息： </p>
              <p>商品名称： </p>
              <p>发票信息： 电子发票 个人</p>
            </div>
          </div>
        </div>
        <div class="pay">
          <div class="pay-content">
            <h1>选择以下支付方式支付</h1>
            <div class="pay-kind">
              <h2>支付平台</h2>
              <div class="pay-kind-box">
                <div class="zfb" @click="goAliPay(1)">
                  <img src="/imgs/pay/icon-ali.png" alt="">
                </div>
                <div class="weixin" @click="goAliPay(2)">
                  <img src="/imgs/pay/icon-wechat.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pay-code v-if="showPay" :img='content'>

    </pay-code>
  </div>
</template>
<script>
import OrderHeader from '../order/OrderHeader'
import PayCode from '../Pay/PayCode'
import QRCode from 'qrcode'
export default {
  data () {
    return {
      show: false,
      orderDetails: {},
      // 地址
      shippingVo: {},
      content: '',
      showPay: false
    }
  },
  props: ['c'],
  methods: {
    //   获取当前订单详情
    async  getOrderDetails () {
      const res = await this.axios.get(`/orders/${this.orderNo}`)
      console.log(res)
      this.orderDetails = res
      this.shippingVo = res.shippingVo
    },
    //     跳转支付页面
    async goAliPay (payType) {
      if (payType === 1) {
        // 支付宝页面
        window.open('/#/order/aliPay?id=' + this.orderNo, '_blank')
      } else if (payType === 2) {
        // 微信页面
        const res = await this.axios.post('/pay', {
          orderId: this.orderNo,
          orderName: 'jinkun', // 扫码支付时订单名称
          amount: '0.01', // 单位元
          payType: 2 // 1支付宝，2微信
        })
        QRCode.toDataURL(res.content)
          .then(url => {
            this.content = url
          })
        this.showPay = true
      }
    }
  },
  created () {
    this.getOrderDetails()
  },
  components: {
    OrderHeader,
    PayCode
  }
}
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  padding: 40px 0;
  background-color: #f5f5f5;
  .content {
    .msg {
      .msg-old {
        width: 100%;
        height: 215px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        .msg-old-content {
          width: 1126px;
          height: 90px;
          display: flex;
          .msg-old-success {
            background-color: #80c58a;
            width: 90px;
            height: 90px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 80%;
              height: 80%;
            }
          }
          .msg-old-info {
            width: 1036px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-content: space-between;
            .lf {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              margin-left: 20px;
              h1 {
                font-size: 24px;
                color: #333;
              }
              p {
                font-size: 14px;
              }
            }
            .rg {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              font-size: 14px;
              margin-right: 80px;
              .price {
                span {
                  font-size: 20px;
                  color: #ff6600;
                }
              }
              .btn {
                i {
                  margin: 5px 0 0 4px;
                  display: inline-block;
                  transition: all 0.3s ease;
                  width: 25px;
                  height: 15px;
                  background: url(/imgs/icon-down.png) no-repeat center;
                  background-size: contain;
                  transform: rotate(180deg);
                  &.show {
                    transform: rotate(0deg);
                  }
                }
              }
            }
          }
        }
      }
      .msg-new {
        display: none;
        width: 100%;
        height: 250px;
        background-color: white;
        .msg-new-content {
          width: 1126px;
          height: 100px;
          border-top: 1px solid #ccc;
          margin: 0 auto;
          p {
            font-size: 14px;
            margin-top: 30px;
            margin-left: 90px;
          }
        }
        &.show {
          display: block;
        }
      }
    }
    .pay {
      width: 100%;
      height: 290px;
      background-color: white;
      margin-top: 30px;
      .pay-content {
        width: 1126px;
        margin: 0 auto;
        h1 {
          width: 100%;
          height: 80px;
          line-height: 80px;
          font-size: 20px;
          color: #333;
          font-weight: 500;
          border-bottom: 1px solid #ccc;
        }
        .pay-kind {
          h2 {
            font-size: 18px;
            color: #333;
            font-weight: 500;
            margin: 10px 0 20px 0;
          }
          .pay-kind-box {
            display: flex;
            .zfb,
            .weixin {
              width: 190px;
              height: 66px;
              border: 1px solid #ccc;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 70%;
                height: 70%;
                object-fit: contain;
              }
            }
            .weixin {
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
