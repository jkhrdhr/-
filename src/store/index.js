import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
      state: {
            cardList: [],
            userMsg: {}
      },
      mutations: {
            modCardListA (state, list) {
                  state.cardList = list
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
            modUserMsg (content, msg) {
                  content.commit('modUserMsgA', msg)
            }
      },
      modules: {
      }
})
