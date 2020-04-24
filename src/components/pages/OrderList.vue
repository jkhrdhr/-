<template>
  <div>
    <order-header>
      <template v-slot:title1>
        订单列表
      </template>
      <template v-slot:title2>
        请谨防钓鱼链接或诈骗电话
      </template>
    </order-header>
    <load-ing v-if="show"></load-ing>
    <div class="list-box">
      <div class="item" v-for="(item,index) in orderList" :key="index">
        <div class="item-title">
          <p>{{item.createTime}} | {{$store.state.userMsg.username}} | 订单号：{{item.orderNo}} |
            {{item.paymentTypeDesc}}</p>
          <p>应付金额：<span>{{item.payment}}</span>元</p>
        </div>
        <div class="item-content" v-for="list in item.orderItemVoList" :key="list.productId">
          <div class="shop-list">
            <div class="list-img">
              <img v-lazy="list.productImage" alt="">
            </div>
            <div class="list-shop-name">
              <p>{{list.productName}}</p>
              <p>{{list.currentUnitPrice}} X {{list.quantity}}元</p>
            </div>
          </div>
        </div>
        <div class="item-state" @click="goPay(item.status,item.orderNo)">{{item.status | state}}</div>
      </div>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="pages" @prev-click="pagination($event)"
          @current-change="pagination($event)">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import OrderHeader from '../order/OrderHeader'
import LoadIng from '../Padding'
export default {
  data () {
    return {
      orderList: [],
      // 总页数
      pages: 0,
      // 加载显示
      show: true
    }
  },
  filters: {
    state (status) {
      let state = ''
      switch (status) {
        case 0:
          state = '已取消'
          break
        case 10:
          state = '未付款'
          break
        case 20:
          state = '已付款'
          break
        case 40:
          state = '已发货'
          break
        case 50:
          state = '交易成功'
          break
        case 60:
          state = '交易关闭'
          break
        default:
          state = '出错了'
          break
      }
      return state
    }
  },
  components: {
    OrderHeader,
    LoadIng
  },
  methods: {
    async getOrderList (pageSize = 10, pageNum = 1) {
      const res = await this.axios.get(`/orders?pageSize=${pageSize}&pageNum=${pageNum}`)
      this.orderList = res.list
      this.pages = res.pages
      this.show = false
    },
    pagination (num) {
      this.getOrderList(10, num)
    },
    //     去付款页面
    goPay (status, orderNo) {
      if (status === 10) {
        this.$router.push({
          path: `/order/orderPay/${orderNo}`
        })
      }
    }
  },
  created () {
    this.getOrderList()
  }
}
</script>
<style lang="less" scoped>
.list-box {
  width: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  .item {
    width: 1226px;
    margin: 30px auto;
    position: relative;
    .item-title {
      width: 100%;
      height: 74px;
      line-height: 74px;
      background-color: #fffaf7;
      p {
        font-size: 16px;
        color: #666;
        margin-left: 40px;
        float: left;
        &:last-child {
          float: right;
          margin-right: 40px;
          span {
            font-size: 26px;
            font-weight: 600;
          }
        }
      }
    }
    .item-content {
      width: 100%;
      height: 148px;
      background-color: white;
      padding-left: 40px;
      box-sizing: border-box;
      .shop-list {
        width: 1186px;
        height: 148px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .list-img {
          width: 112px;
          height: 112px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .list-shop-name {
          width: 200px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            font-size: 20px;
            color: #333;
          }
        }
      }
    }
    .item-state {
      position: absolute;
      top: 120px;
      right: 40px;
      font-size: 20px;
      color: #ff6600;
    }
  }
  .pagination {
    width: 1226px;
    height: 30px;
    margin: 0 auto;
    padding-bottom: 20px;
  }
}
</style>
