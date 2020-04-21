import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
      state: {
            cardList: [],
            userMsg: {},
            cardNum: 0
      },
      mutations: {
            modCardListA (state, list) {
                  state.cardList = list
            },
            modCardNumA (state, num) {
                  state.cardNum = num
            },
            // 修改用户数据
            modUserMsgA (state, msg) {
                  state.userMsg = msg
            }
      },
      actions: {
            modCardList (content, list) {
                  content.commit('modCardListA', list)
            },
            modCardNum (content, num) {
                  content.commit('modCardNumA', num)
            },
            modUserMsg (content, msg) {
                  content.commit('modUserMsgA', msg)
            }
      },
      modules: {
      }
})
