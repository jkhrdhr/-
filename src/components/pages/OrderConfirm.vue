<template>
  <div>
    <order-header>
      <template v-slot:title1>
        订单确认
      </template>
      <template v-slot:title2>
        请认真填写收货地址
      </template>
    </order-header>
    <div class="box">
      <div class="content">
        <div class="confirm-box">
          <div class="site">
            <h3>收货地址</h3>
            <div class="site-grid">
              <div class="site-box" :class="{'choice':index === i}" @click="choiceSite(i)" v-for="(item,i) in shopSite"
                :key="item.id">
                <div class="item">
                  <h3>{{item.receiverName}}</h3>
                  <p class="item-phone">{{item.receiverMobile}}</p>
                  <p class="item-site">{{item.receiverDistrict}} {{item.receiverCity}} {{item.receiverProvince}}</p>
                  <a href="" class="item-delete" @click.stop.prevent="deleteSite(item.id)"><i
                      class="el-icon-delete-solid"></i></a>
                  <a href="" class="item-alter" @click.stop.prevent="alterSiteDialog(item.id)"><i
                      class="el-icon-edit"></i></a>
                </div>
              </div>
              <div class="addsite" @click="addSiteDialog()">
                <p>添加新地址</p>
              </div>
            </div>
          </div>
          <div class="shop">
            <h3>商品</h3>
            <div class="shop-box" v-for="item in cartProductVoList" :key="item.productId">
              <div class="shop-name">
                <img v-lazy="item.productMainImage" alt="">
                {{item.productName}}
              </div>
              <div class="shop-price-total">{{item.productTotalPrice}}</div>
              <div class="shop-price">{{item.productPrice}} x {{item.quantity}}</div>
            </div>
          </div>
          <div class="affirm">
            <div class="mode">
              <div class="lf">配送方式</div>
              <div class="name">包邮</div>
            </div>
            <div class="bill">
              <div class="lf">发票</div>
              <div class="name">电子 个人</div>
            </div>
          </div>
          <div class="detail">
            <p class="item">
              <span class="item-name">商品件数：</span>
              <span class="item-val">{{quantity}}件</span>
            </p>
            <p class="item">
              <span class="item-name">商品总价：</span>
              <span class="item-val">{{cartTotalPrice}}元</span>
            </p>
            <p class="item">
              <span class="item-name">优惠活动：</span>
              <span class="item-val">0元</span>
            </p>
            <p class="item">
              <span class="item-name">应付总额：</span>
              <span class="item-val">{{cartTotalPrice}}元</span>
            </p>
          </div>
          <div class="btn">
            <button @click="goCard">返回购物车</button>
            <button @click="goPay()">去结算</button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="新增确定" :visible.sync="dialogVisible" width="60%">
      <el-row>
        <el-col :span="8">
          <el-input class="inputName" v-model="value.receiverName" placeholder="姓名"></el-input>
        </el-col>
        <el-col :span="8">
          <el-input class="inputPhone" v-model="value.receiverPhone" placeholder="手机号"></el-input>
        </el-col>
      </el-row>
      <el-row class="b">
        <el-col class="valuePro" :span="3">
          <el-select v-model="value.receiverProvince" placeholder="省份">
            <el-option v-for="item in province" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col class="valueCit" :span="3">
          <el-select v-model="value.receiverCity" placeholder="市区">
            <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col class="valueStr" :span="3">
          <el-select v-model="value.receiverDistrict" placeholder="街道">
            <el-option v-for="item in street" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row class="textarea">
        <el-col :span='18'>
          <el-input type="textarea" :rows="3" placeholder="详细地址" v-model="value.receiverAddress">
          </el-input>
        </el-col>
      </el-row>
      <el-row class="postal">
        <el-col :span="8">
          <el-input v-model="value.receiverZip" placeholder="邮政编码"></el-input>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSite">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import OrderHeader from '../order/OrderHeader'
export default {
  name: 'orderconfirm',
  data () {
    return {
      // 当前的所有地址列表
      shopSite: [],
      cartProductVoList: [],
      // 总价
      cartTotalPrice: 0,
      dialogVisible: false,
      // 选中的地址索引
      index: 0,
      shippingId: 0,
      value: {
        // 姓名
        receiverName: '',
        //   手机号
        receiverPhone: '',
        //   省份
        receiverProvince: '',
        //   市
        receiverCity: '',
        //   街道
        receiverDistrict: '',
        //   详细地址
        receiverAddress: '',
        //   邮政编码
        receiverZip: ''
      },
      // 省
      province: [
        {
          value: '山东',
          label: '山东'
        }, {
          value: '江苏',
          label: '江苏'
        }, {
          value: '四川',
          label: '四川'
        }
      ],
      // 市
      city: [
        {
          value: '日照',
          label: '日照'
        }, {
          value: '杭州',
          label: '杭州'
        }, {
          value: '重庆',
          label: '重庆'
        }
      ],
      // 街道
      street: [{
        value: '街道1',
        label: '街道1'
      }, {
        value: '街道2',
        label: '街道2'
      }, {
        value: '街道3',
        label: '街道3'
      }]
    }
  },
  computed: {
    quantity: function () {
      let qua = 0
      this.cartProductVoList.forEach(item => {
        qua += parseInt(item.quantity)
      })
      return qua
    }
  },
  created () {
    this.getShopSite()
    this.getShopList()
  },
  methods: {
    //   获取地址列表
    async  getShopSite () {
      const res = await this.axios.get('shippings', {
        params: {
          pageNum: 1,
          pageSize: 10
        }
      })
      this.shopSite = res.list
    },
    //     删除地址
    async  deleteSite (id) {
      await this.axios.delete(`/shippings/${id}`)
      this.$message.success('删除成功')
      this.getShopSite()
    },
    //     获取购物车列表
    async getShopList () {
      const res = await this.axios.get('/carts')
      this.cartTotalPrice = res.cartTotalPrice
      this.cartProductVoList = res.cartProductVoList.filter(item => {
        return item.productSelected
      })
    },
    //     添加或者修改地址
    async addSite () {
      if (this.shippingId) {
        await this.axios.put(`/shippings/${this.shippingId}`, this.value)
        this.shippingId = 0
        this.value = {}
      } else {
        await this.axios.post('/shippings', this.value)
      }
      this.dialogVisible = false
      this.$message.success('操作成功')
      this.getShopSite()
    },
    //     修改地址对话框
    async alterSiteDialog (shippingId) {
      this.dialogVisible = true
      this.shippingId = shippingId
      const res = await this.axios.get(`/shippings/${shippingId}`)
      // this.addSite(shippingId)
      // console.log(res)

      const {
        receiverName,
        receiverPhone,
        receiverMobile,
        receiverProvince,
        receiverCity,
        receiverDistrict,
        receiverAddress,
        receiverZip
      } = res
      this.value = {
        receiverName,
        receiverPhone,
        receiverMobile,
        receiverProvince,
        receiverCity,
        receiverDistrict,
        receiverAddress,
        receiverZip
      }
    },
    //     返回购物车
    goCard () {
      this.$router.push({ name: 'card' })
    },
    //     创建订单
    async goPay () {
      //     获取当前选中的地址
      const item = this.shopSite[this.index]
      const res = await this.axios.post('/orders', {
        shippingId: item.id
      })
      this.$router.push({
        name: 'orderPay',
        params: {
          orderNo: res.orderNo
        }
      })
    },
    //     添加地址对话框
    addSiteDialog () {
      this.dialogVisible = true
    },
    //     选中当前地址
    choiceSite (i) {
      this.index = i
    }
  },
  components: {
    OrderHeader
  }
}
</script>
<style lang="less" scoped>
.inputName {
  margin-left: 40px;
}
.inputPhone {
  margin-left: 90px;
}
.valuePro,
.valueCit,
.valueStr {
  margin-left: 40px;
}
.b {
  margin-top: 20px;
}
.textarea {
  margin-top: 20px;
  margin-left: 40px;
}
.postal {
  margin: 20px 0 0 40px;
}
.box {
  width: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  .content {
    background-color: white;
    margin-top: 40px;
    margin-bottom: 40px;
    .confirm-box {
      width: 1140px;
      margin: 0 auto;
      padding-top: 38px;
      overflow: hidden;
      .site {
        h3 {
          font-size: 20px;
          color: #333333;
          margin-bottom: 21px;
          font-weight: 400;
        }
        .site-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          .addsite {
            width: 271px;
            height: 180px;
            border: 1px solid #cccccc;
            background: url(/imgs/icon-add.png) no-repeat center;
            text-align: center;
            background-color: #ccc;
            p {
              margin-top: 40px;
            }
          }
        }
      }
      .shop {
        margin-top: 30px;
        width: 100%;
        h3 {
          font-size: 18px;
          color: #333333;
          padding-bottom: 3px;
          border-bottom: 1px solid #ccc;
        }
        .shop-box {
          width: 100%;
          height: 40px;
          margin: 5px 0;
          line-height: 40px;
          font-size: 16px;
          color: #333333;
          .shop-name {
            height: 40px;
            float: left;
            img {
              width: 30px;
              height: 30px;
              vertical-align: middle;
              object-fit: contain;
            }
          }
          .shop-price-total {
            float: right;
            height: 40px;
            margin-right: 20px;
            text-align: end;
            color: #ff6700;
          }
          .shop-price {
            float: right;
            width: 300px;
            height: 40px;
          }
        }
      }
      .affirm {
        .mode,
        .bill {
          width: 100%;
          margin-top: 30px;
          display: flex;
          justify-content: end;
          .lf {
            color: #333333;
            font-size: 20px;
            width: 150px;
            font-weight: 800;
          }
          .name {
            line-height: 32px;
            color: #ff6700;
            font-size: 16px;
          }
        }
      }
      .detail {
        width: 100%;
        height: 225px;
        margin: 50px 0 30px 0;
        overflow: hidden;
        .item {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
          .item-name {
            display: inline-block;
            width: 80px;
            font-size: 16px;
            color: #666;
          }
          .item-val {
            display: inline-block;
            margin-right: 30px;
            width: 100px;
            font-size: 16px;
            color: #ff6700;
            text-align: end;
          }
          &:last-child {
            line-height: 40px;
            margin-top: 40px;
            .item-val {
              font-size: 28px;
            }
          }
        }
      }
      .btn {
        padding-top: 37px;
        border-top: 1px solid #ccc;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 30px;
        button {
          width: 202px;
          height: 50px;
          font-size: 18px;
          color: white;
          line-height: 50px;
          text-align: center;
          border: 0;
          background-color: #b0b0b0;
          &:last-child {
            margin-left: 20px;
            background-color: #ff6700;
          }
        }
      }
      .site-box {
        width: 271px;
        height: 180px;
        border: 1px solid #cccccc;
        padding: 15px;
        box-sizing: border-box;
        margin-bottom: 3px;
        .item {
          width: 241px;
          height: 150px;
          position: relative;
          h3 {
            font-size: 18px;
            font-weight: 400;
            color: #333333;
            margin-bottom: 10px;
          }
          .item-phone,
          .item-site {
            font-size: 14px;
            color: #757575;
          }
          .item-delete {
            position: absolute;
            font-size: 24px;
            left: 0;
            bottom: 0;
            color: #757575;
          }
          .item-alter {
            position: absolute;
            font-size: 24px;
            right: 0;
            bottom: 0;
            color: #757575;
          }
        }
        &.choice {
          border: 1px solid #ff6700;
        }
      }
    }
  }
}
</style>
