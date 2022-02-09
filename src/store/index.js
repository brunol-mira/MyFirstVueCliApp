import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    day: 7,
    month: 4,
    year: 2022
  },
  getters: {
    formattedDate(state) {
      return `${state.day}/${state.month}/${state.year}`;
    }
  },
  mutations: {
      INCREMENT_DAY(state, payload) {
       // state.day += 1
        state.day += Number(payload)
       // state.day++
       //  if (state.day <= 31 && state.month !== 2) {
       //    state.day += 1
       //  }
       //  if (state.day === 32) {
       //    state.day = 1
       //    state.month += 1
       //  }
      },
    INCREMENT_MONTH(state) {
      state.month += 1
    },
    INCREMENT_YEAR(state) {
      state.year += 1
      state.month = 1
    },
  },
  actions: {
    // incrementDay(context) {
    //   context.commit('INCREMENT_DAY')
    // },
    incrementDay(context, payload) {
      // console.log(payload.amount)
      console.log(context.state.day)
      context.commit('INCREMENT_DAY', payload.amount)
      console.log(context.state.day)
    },
    incrementMonth(context) {
      if (context.state.month + 1 > 12) {
        context.commit('INCREMENT_YEAR')
      } else {
        context.commit('INCREMENT_MONTH')
      }
    },
  },
  modules: {

  }
})
