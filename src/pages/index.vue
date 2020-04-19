<template>
  <div>
    index
  </div>
</template>
<script>
export default {
  name: 'idnex',
  data () {
    return {
      res: {}
    }
  },
  created () {
    this.getRes()
  },
  methods: {
    getRes () {
      this.axios.get('mock/user/login.json')
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
