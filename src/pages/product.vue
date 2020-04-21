<template>
  <div>
    <product-params :shopId="shopMessage.id">
      <template v-slot:title>
        {{shopMessage.name}}
      </template>
    </product-params>
    <div class="pro-content">
      <div class="content-1">
        <h2> {{shopMessage.name}}</h2>
        <h3>{{shopMessage.subtitle}}</h3>
        <p>
          <a href="" id="">全球首款双频 GP</a>
          <span>|</span>
          <a href="" id="">骁龙845</a>
          <span>|</span>
          <a href="" id="">AI 变焦双摄</a>
          <span>|</span>
          <a href="" id="">红外人脸识别</a>
        </p>
        <em>￥{{shopMessage.price}}</em>
      </div>
      <div class="content-2"></div>
      <div class="content-3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <div class="video-title">
          <p>60帧超慢动作摄影</p>
          <p>慢慢回味每一瞬间的精彩</p>
          <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br>
            更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
        </div>
        <div class="video-bg">
          <div class="video-1" @click="showSlide=true">
          </div>
          <div class="video-2">
            <div class="overlay" v-if="showSlide"></div>
            <div class="video" :class="{'slide':showSlide}">
              <video src="/imgs/product/video.mp4" autoplay muted controls="controls"></video>
              <div class="close" @click="showSlide=false">X</div>
            </div>
          </div>
        </div>
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
      swiperOption: {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true
      },
      showSlide: false,
      shopMessage: {}
    }
  },
  props: ['id'],
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getShopMessage()
    })
  },
  watch: {
    $route: function () {
      this.getShopMessage()
    }
  },
  methods: {
    //     获取商品信息
    async getShopMessage () {
      const res = await this.axios.get(`/products/${this.id}`)
      console.log(res)
      this.shopMessage = res
    }
  },
  components: {
    ProductParams,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>
<style lang="less" scoped>
.pro-content {
  .content-1 {
    width: 100%;
    height: 718px;
    background: url(../../public/imgs/product/product-bg-1.png) no-repeat center;
    text-align: center;
    h2 {
      font-size: 80px;
      color: #333333;
      padding-top: 50px;
    }
    h3 {
      margin-top: 5px;
      font-size: 24px;
      color: #333333;
    }
    p {
      margin: 21px 0 40px 0;
      a {
        font-size: 16px;
        color: #333333;
      }
      span {
        margin: 0 10px;
      }
    }
    em {
      font-style: normal;
      font-size: 38px;
      color: #333333;
    }
  }
  .content-2 {
    width: 1226px;
    margin: 0 auto;
    height: 480px;
    background: url(../../public/imgs/product/product-bg-2.png) no-repeat center;
    background-size: contain;
  }
  .content-3 {
    width: 100%;
    height: 638px;
    background: url(../../public/imgs/product/product-bg-3.png) no-repeat center;
    background-size: contain;
  }
  .item-swiper {
    .swiper-slide {
      width: 450px;
      height: 256px;
      img {
        width: 450px;
        height: auto;
        object-fit: cover;
      }
    }
  }
  .item-video {
    width: 100%;
    height: 1044px;
    background-color: #070708;
    overflow: hidden;
    .video-title {
      width: 100%;
      height: 400px;
      color: white;
      text-align: center;
      margin-top: 40px;
      p {
        font-size: 60px;
        font-weight: 800;
        &:last-child {
          font-size: 24px;
          font-weight: 600;
          padding-top: 30px;
        }
      }
    }
    .video-bg {
      width: 100%;
      height: 540px;
      .video-1 {
        margin: 0 auto;
        width: 1226px;
        height: 500px;
        background: url(../../public/imgs/product/gallery-1.png) no-repeat
          center;
        background-size: contain;
      }
      .video-2 {
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          background-color: rgba(0, 0, 0, 0.4);
        }
        .video {
          width: 1000px;
          height: 536px;
          position: fixed;
          top: -50%;
          left: 50%;
          opacity: 0;
          margin-left: -500px;
          margin-top: -268px;
          transition: all 0.6s ease;
          z-index: 20;
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .close {
            color: white;
            font-size: 32px;
            position: absolute;
            top: 5px;
            right: 30px;
            outline: none;
            cursor: pointer;
          }
          &.slide {
            top: 50%;
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
