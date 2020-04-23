<template>
  <div>
    <padd-ing v-if="loading"></padd-ing>
    <div class="from" v-html="content"></div>
  </div>
</template>
<script>
import PaddIng from '../Padding'
export default {
  data () {
    return {
      content: '',
      loading: true
    }
  },
  created () {
    this.payment()
  },
  components: {
    PaddIng
  },
  methods: {
    //   去支付宝支付
    async payment () {
      const res = await this.axios.post('/pay', {
        orderId: this.$route.query.id,
        orderName: 'jinkun', // 扫码支付时订单名称
        amount: '0.01', // 单位元
        payType: 1 // 1支付宝，2微信
      })
      this.content = res.content
      setTimeout(() => {
        document.forms[0].submit()
        this.loading = false
      }, 100)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
