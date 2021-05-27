import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const key = '?key=21805822-4209b9170b5b5ac952d24594a&';
axios.defaults.baseURL = 'https://pixabay.com/api/'+key;

Vue.use(Vuex)

const state = {

  images: []

}
const mutations = {

  SET_IMAGES(state, images) {
    state.images = images
  }

}

const actions = {

  getImages( {commit} ) {
    axios.get( 'q=user&image_type=photo&pretty=true&per_page=30' )
      .then( response => {
        commit('SET_IMAGES', response.data.hits)
      } )
  }

}


const getters = {

}



export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
