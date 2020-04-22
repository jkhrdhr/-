<template>
  <div>
    <order-header>
      <template v-slot:title1>
        我的购物车
      </template>
      <template v-slot:title2>
        温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
      </template>
    </order-header>
    <div class="max-box">
      <div class="content">
        <el-table :data="cardList" style="width: 100%" @select-all="allCard" ref="multipleTable" @select="select">
          <el-table-column type="selection" label="全选" width="136">
          </el-table-column>
          <el-table-column prop="productName" label="商品名称" width="408">
            <template slot-scope="scope">
              <img v-lazy="scope.row.productMainImage" alt="">
              <span>{{scope.row.productName}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="productPrice" label="单价" width="136">
          </el-table-column>
          <el-table-column prop="quantity" label="数量" width="272">
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.quantity" @change="alterNum(scope.row)" :min="1"
                :max="scope.row.productStock" label="描述文字"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column prop="productTotalPrice" label="小计" width="136">
            <template slot-scope="scope">
              {{scope.row.productTotalPrice}}
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div class="el-icon-close" @click="deleteCard(scope.row.productId)"></div>
            </template>
          </el-table-column>
        </el-table>
        <div class="wrap">
          <div class="order-lf">
            <router-link tag="a" :to="{name:'index'}">继续购物</router-link>
            <div>共 {{cardList.length}} 件商品，已选择 {{addNums}} 件</div>
          </div>
          <div class="order-ri">
            <div class="price">合计：{{cartTotalPrice}} 元</div>
            <button @click="order">去结算</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderHeader from '../components/order/OrderHeader'
export default {
  data () {
    return {
      cardList: [],
      // 是否全选
      selectedAll: false,
      // 总价
      cartTotalPrice: 0
    }
  },
  methods: {
    //   修改商品数量
    async alterNum (row) {
      const res = await this.axios.put(`/carts/${row.productId}`, {
        quantity: row.quantity,
        selected: row.productSelected
      })
      this.cardList = res.cartProductVoList
      this.selectedAll = res.selectedAll
      this.cartTotalPrice = res.cartTotalPrice
      this.getCardList()
    },
    async getCardList () {
      const res = await this.axios.get('/carts')
      this.cardList = res.cartProductVoList
      this.selectedAll = res.selectedAll
      this.cartTotalPrice = res.cartTotalPrice
      this.$nextTick(() => {
        this.cardList.forEach(row => {
          if (row.productSelected) {
            this.$refs.multipleTable.toggleRowSelection(row, true)
          }
        })
      })
    },
    //     删除购物车商品
    async deleteCard (productId) {
      const res = await this.axios.delete(`/carts/${productId}`)
      this.cardList = res.cartProductVoList
      this.selectedAll = res.selectedAll
      this.cartTotalPrice = res.cartTotalPrice
      this.getCardList()
    },
    //     全选
    async allCard (selection) {
      if (selection.length === 0) {
        // 全不选中
        await this.axios.put('/carts/unSelectAll')
        this.getCardList()
      } else {
        await this.axios.put('/carts/selectAll')
        this.getCardList()
      }
    },
    //     单行复选框操作
    async select (selection, row) {
      const selected = !(row.productSelected)
      await this.axios.put(`carts/${row.productId}`, {
        quantity: row.quantity,
        selected
      })
      this.getCardList()
    },
    //     结算
    order () {
      const flag = this.cardList.some(item => {
        return item.productSelected
      })
      if (flag) {
        this.$router.push({
          name: 'orderConfirm'
        })
      } else {
        this.$message.error('请至少选择一项进行支付')
      }
    }
  },
  created () {
    this.getCardList()
  },
  computed: {
    addNums: function () {
      const leg = this.cardList.filter(item => {
        return item.productSelected
      })
      return leg.length
    }
  },
  components: {
    OrderHeader
  }
}
</script>
<style lang="less" scoped>
.max-box {
  width: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  .content {
    background-color: white;
    margin: 40px auto;
    .el-table {
      text-align: center;
      img {
        width: 80px;
        height: 80px;
        vertical-align: bottom;
      }
      span {
        font-size: 18px;
        width: 80px;
        line-height: 80px;
      }
    }
    .wrap {
      width: 100%;
      height: 50px;
      margin-top: 40px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      .order-lf {
        display: flex;
        margin-left: 40px;
        font-size: 14px;
        a {
          margin-right: 40px;
        }
      }
      .order-ri {
        display: flex;
        margin-right: 20px;
        font-size: 24px;
        .price {
          color: #ff6600;
          margin-right: 40px;
        }
        button {
          width: 202px;
          height: 50px;
          background-color: #ff6600;
          border: 0;
          text-align: center;
          line-height: 50px;
          color: white;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
