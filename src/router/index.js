import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
import Product from '../pages/product.vue'
import Detail from '../pages/detail.vue'
import Card from '../pages/cart.vue'
import Order from '../pages/order.vue'
import OrderConfirm from '../pages/orderConfirm.vue'
import OrderPay from '../pages/orderPay.vue'
import OrderList from '../pages/orderList.vue'
Vue.use(VueRouter)

const routes = [
      {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                  {
                        path: '/index',
                        name: 'index',
                        component: Index
                  },
                  {
                        path: 'product/:id',
                        name: 'product',
                        component: Product
                  },
                  {
                        path: 'detail/:id',
                        name: 'detail',
                        component: Detail
                  }
            ]
      },
      {
            path: '/card',
            name: 'card',
            component: Card
      },
      {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                  {
                        path: 'orderConfirm',
                        name: 'orderConfirm',
                        component: OrderConfirm
                  },
                  {
                        path: 'orderPay',
                        name: 'orderPay',
                        component: OrderPay
                  },
                  {
                        path: 'orderList',
                        name: 'orderList',
                        component: OrderList
                  }
            ]
      }
]

const router = new VueRouter({
      routes
})

export default router
