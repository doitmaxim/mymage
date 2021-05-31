import Vue from 'vue'
import Vuex from 'vuex'
import homeimages from './modules/homeimages'
import modal from './modules/modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homeimages,
    modal
  }
})