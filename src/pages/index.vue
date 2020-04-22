<template>
  <div>
    <div class="content">
      <!-- 轮播 -->
      <div class="swiper-box">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <router-link :to="{name:'product',params:{id:item.id}}">
              <img :src="item.img" alt="">
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="navs">
          <ul class="ul">
            <li class="menu-item">
              <div class="children">
                <ul>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米CC9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-2.png'" alt="">小米8 青春版</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-3.jpg'" alt="">Redmi K20 Pro</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-4.jpg'" alt="">移动4G+专区</a></li>
                </ul>
                <ul>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米CC美图定制版</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米8 屏幕指纹版</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">Redmi K20</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米移动 电话卡</a></li>
                </ul>
                <ul>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                </ul>
                <ul>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                </ul>
                <ul>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                </ul>
                <ul>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                </ul>
              </div>
              <a href="javascript:;">手机 电话卡</a>
              <i>></i>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <i>></i>
            </li>
            <li class="menu-item">
              <div class="children">
                <ul>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米CC9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-2.png'" alt="">小米8 青春版</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-3.jpg'" alt="">Redmi K20 Pro</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-4.jpg'" alt="">移动4G+专区</a></li>
                </ul>
                <ul>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米CC美图定制版</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米8 屏幕指纹版</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">Redmi K20</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米移动 电话卡</a></li>
                </ul>
                <ul>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                </ul>
                <ul>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                </ul>
                <ul>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                </ul>
                <ul>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                  <li><a href="" id=""><img v-lazy="'/imgs/item-box-1.png'" alt="">小米9</a></li>
                </ul>
              </div>
              <a href="javascript:;">笔记本 平板</a>
              <i>></i>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <i>></i>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <i>></i>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <i>></i>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <i>></i>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <i>></i>
            </li>
          </ul>
        </div>
      </div>
      <!-- 广告位 -->
      <div class="ads-box">
        <router-link class="ads-img" v-for="item in adsList" :key="item.id" :to="{name:'product',params:{id:item.id}}">
          <img v-lazy="item.img" alt="">
        </router-link>
      </div>
      <!-- 广告条 -->
      <div class="banner">
        <img v-lazy="'/imgs/banner-1.png'" alt="">
      </div>
    </div>
    <phone-shop></phone-shop>
  </div>
</template>
<script>
import PhoneShop from '../components/index/PhoneShop'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  components: {
    Swiper,
    SwiperSlide,
    PhoneShop
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        }
      ],
      adsList: [
        {
          id: '33',
          img: '/imgs/ads/ads-1.png'
        },
        {
          id: '48',
          img: '/imgs/ads/ads-2.jpg'
        },
        {
          id: '45',
          img: '/imgs/ads/ads-3.png'
        },
        {
          id: '47',
          img: '/imgs/ads/ads-4.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import url(../assets/less/config.less);
@import url(../assets/less/reset.less);
@import url(../assets/less/mixin.less);
.content {
  .swiper-box {
    width: 100%;
    height: 451px;
    overflow: hidden;
    position: relative;
    .swiper-button-prev {
      margin-left: 264px;
    }
    .swiper-slide {
      width: 1226px;
      height: 451px;
    }
    .navs {
      z-index: 8;
      position: absolute;
      top: 0;
      left: 0;
      width: 264px;
      height: 451px;
      background-color: rgba(0, 0, 0, 0.3);
      .ul {
        padding: 25px 0;
        .menu-item {
          height: 50px;
          width: 234px;
          padding-left: 30px;
          line-height: 50px;
          a,
          i {
            font-size: 16px;
            color: @colorG;
          }
          &:hover {
            background-color: @colorA;
            .children {
              opacity: 1;
              height: 451px;
            }
          }
          i {
            float: right;
            padding-right: 20px;
          }
          .children {
            overflow: hidden;
            transition: opacity 0.2s ease-in;
            width: 962px;
            height: 0;
            background-color: white;
            position: absolute;
            top: 0;
            left: 264px;
            opacity: 0;

            ul {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              li {
                margin-top: 10px;
                a {
                  color: @colorB;
                }
                height: 65px;
                img {
                  height: 35px;
                  width: 42px;
                  vertical-align: middle;
                  margin: 0 10px 0 30px;
                }
              }
            }
          }
        }
      }
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}
.ads-box {
  width: 100%;
  height: 167px;
  margin: 20px 0;
  .flex();
  .ads-img {
    width: 296px;
    height: 167px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.banner {
  width: 100%;
  height: 130px;
  margin: 20px 0;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
