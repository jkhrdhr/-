import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
import Product from '../pages/product.vue'
import Detail from '../pages/detail.vue'
import Order from '../pages/order.vue'
import OrderConfirm from '../components/pages/OrderConfirm.vue'
import OrderPay from '../components/pages/OrderPay.vue'
import OrderList from '../pages/orderList.vue'
import Login from '../pages/login.vue'
import OrderCard from '../pages/orderCard.vue'
import AliPay from '../components/pages/AliPay.vue'
Vue.use(VueRouter)

const routes = [
      {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                  {
                        path: 'index',
                        name: 'index',
                        component: Index
                  },
                  {
                        path: 'product/:id',
                        name: 'product',
                        component: Product,
                        props: true
                  },
                  {
                        path: 'detail/:id',
                        name: 'detail',
                        component: Detail,
                        props: true
                  }
            ]
      },
      {
            path: '/login',
            name: 'login',
            component: Login
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
                        path: 'orderPay/:orderNo',
                        name: 'orderPay',
                        component: OrderPay,
                        props: true
                  },
                  {
                        path: 'orderList',
                        name: 'orderList',
                        component: OrderList
                  },
                  {
                        path: 'orderCard',
                        name: 'card',
                        component: OrderCard
                  },
                  {
                        path: 'aliPay',
                        name: 'aliPay',
                        component: AliPay
                  }
            ]
      }
]

const router = new VueRouter({
      routes
})

export default router
