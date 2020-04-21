<template>
  <div class="phoneShop">
    <div class="content">
      <h1 class="shop-title">手机</h1>
      <div class="wrapper">
        <div class="wrapper-lf">
          <router-link :to="{name:'product',params:{id:35}}"><img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
          </router-link>
        </div>
        <div class="wrapper-rg">
          <div class="wra-rg-item" v-for="item in photoList" :key="item.id">
            <div class="new">新品</div>
            <router-link :to="{name:'product',params:{id:item.id}}" class="img-war" tag="div">
              <img class="img" v-lazy="item.mainImage" alt="">
            </router-link>
            <div class="item-info">
              <h4 class="shop-title">{{item.name}}</h4>
              <p class="shop-referral">{{item.subtitle}}</p>
              <p class="shop-price">
                {{item.price | getProce}}
                <a href="" @click.prevent="addCard(item.id)">
                  <i class="el-icon-shopping-cart-full"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal v-if="cutModal" @btn="openCard" @addBtn="goCard">
      <template v-slot:modal-title>
        <h1 class="modal-a">添加商品</h1>
      </template>
      <template v-slot:modal-content>
        <p>是否要添加当前项</p>
      </template>
    </modal>
  </div>
</template>
<script>
import Modal from '../Modal/Modal'
export default {
  data () {
    return {
      photoList: [],
      cutModal: false
    }
  },
  created () {
    this.getPhotoList()
  },
  filters: {
    getProce (price) {
      if (price <= 0) return '0.00'
      return `${price.toFixed(2)}元`
    }
  },
  methods: {
    async getPhotoList () {
      const data = await this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 8
        }
      })
      this.photoList = data.list
    },
    addCard (id) {
      this.cutModal = true
    },
    openCard () {
      this.cutModal = false
    },
    goCard () {
      this.cutModal = false
      this.$router.push({
        name: 'card'
      })
    }
  },
  components: {
    Modal
  }
}
</script>
<style lang="less">
@import url(../../assets/less/config.less);
@import url(../../assets/less/reset.less);
@import url(../../assets/less/mixin.less);
.phoneShop {
  width: 100%;
  height: 742px;
  background-color: @colorH;
  .content {
    height: 100%;
    .shop-title {
      padding-top: 30px;
      font-size: 22px;
      color: #333;
      margin-bottom: 20px;
    }
  }
  .wrapper {
    width: 100%;
    height: 621px;
    .wrapper-lf {
      float: left;
      width: 224px;
      height: 619px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
      }
    }
    .wrapper-rg {
      float: left;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2.1fr);
      grid-gap: 14.5px;
      margin-left: 14.5px;
      .wra-rg-item {
        background-color: white;
        position: relative;
        width: 236px;
        height: 302px;
        text-align: center;
        .new {
          width: 68px;
          height: 24px;
          background-color: #7ecf68;
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -34px;
        }
        .img-war {
          cursor: pointer;
          width: 236px;
          height: 195px;
          margin-top: 24px;
          .img {
            width: 236px;
            height: 195px;
            object-fit: contain;
          }
        }
        .item-info {
          margin-top: 10px;
          .shop-title {
            font-size: 14px;
            color: @colorB;
            margin: 0;
            padding: 0;
          }
          .shop-referral {
            margin: 5px 0;
            font-size: 12px;
            color: @colorD;
          }
          .shop-price {
            font-size: 14px;
            color: #f20a2a;
            a {
              font-size: 18px;
              color: #f20a2a;
            }
          }
        }
      }
    }
  }
}
.modal {
  .modal-a {
    font-size: 16px;
    color: #333;
    float: left;
  }
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s ease;
}
</style>
