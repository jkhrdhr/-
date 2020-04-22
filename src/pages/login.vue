<template>
  <div>
    <login-header></login-header>
    <div class="login-content">
      <div class="content">
        <div class="login-from">
          <div class="from-title">
            <a href="javascrip:;">账号登陆</a>
            <i></i>
            <a href="javascrip:;">扫码登陆</a>
          </div>
          <div class="from-input">
            <div class="input">
              <input type="text" placeholder="请输入账号" v-model="username">
            </div>
            <div class="input">
              <input type="password" placeholder="请输入密码" v-model="password">
            </div>
          </div>
          <button class="from-btn" @click="userLogin">登录</button>
          <div class="from-tips">
            <span>立即注册</span>
            <span>忘记密码？</span>
          </div>
        </div>
      </div>
    </div>
    <login-footer></login-footer>
  </div>
</template>
<script>
import LoginHeader from '../components/login/LoginHeader'
import LoginFooter from '../components/login/LoginFooter'
export default {
  data () {
    return {
      username: 'admin',
      password: 'admin'
    }
  },
  methods: {
    async userLogin () {
      const res = await this.axios.post('/user/login', {
        username: this.username,
        password: this.password
      })
      this.getUserMsg()
      this.getCard()
      this.$cookie.set('userid', res.id, { expires: '1h' })
      this.$router.push('/index')
    }
  },
  inject: ['getUserMsg', 'getCard'],
  components: {
    LoginHeader,
    LoginFooter
  }
}
</script>
<style lang="less" scoped>
.login-content {
  width: 100%;
  height: 572px;
  background-color: aqua;
  background: url(/imgs/login-bg.jpg) no-repeat center;
  .content {
    height: 572px;
    position: relative;
  }
  .login-from {
    position: absolute;
    top: 30px;
    right: 0;
    width: 410px;
    height: 510px;
    overflow: hidden;
    background: white;
    .from-title {
      text-align: center;
      margin: 40px 0;
      a {
        color: #333333;
        font-size: 24px;
      }
      i {
        display: inline-block;
        width: 0;
        height: 20px;
        border-left: 2px solid #333333;
        margin: 0 20px;
      }
    }
    .from-input {
      flex-direction: column;
      display: flex;
      align-items: center;
      .input {
        width: 348px;
        height: 50px;
        border: 1px solid #ccc;
        display: flex;
        input {
          margin-left: 10px;
          border: 0;
        }
        &:last-child {
          margin-top: 20px;
        }
      }
    }
    .from-btn {
      width: 348px;
      height: 50px;
      background-color: #f56600;
      border: 0;
      left: 50%;
      position: absolute;
      margin-left: -174px;
      margin-top: 20px;
      font-size: 16px;
      color: white;
      cursor: pointer;
    }
    .from-tips {
      position: absolute;
      top: 320px;
      right: 20px;
      span {
        color: #333333;
        font-size: 14px;
        margin-left: 5px;
      }
    }
  }
}
</style>
