import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const key = '?key=21805822-4209b9170b5b5ac952d24594a&';
axios.defaults.baseURL = 'https://pixabay.com/api/'+key;

Vue.use(Vuex)


// export default {
//   namespaced: true,
//   state: {

//   },
//   getters: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// }

const state = {
  aLLimages: []
}

const mutations = {
  SET_IMAGES(state, aLLimages) {
    state.aLLimages = aLLimages
  }
}

const actions = {
  getImages( {commit} ) {
    axios.get( 'q=users&image_type=photo&pretty=true&per_page=30' )
      .then( response => {
        commit('SET_IMAGES', response.data.hits)
      } )
  }
}

const getters = {
  aLLimages: state => state.aLLimages
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
