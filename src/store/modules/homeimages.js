import Api from '../../service/api'

export default {
    namespaced: true,
    state: {
        homeImages: []
    },
    getters: {
        homeImages: state => state.homeImages
    },
    mutations: {
        SET_HOME_IMAGES(state, homeImages) {
            state.homeImages = homeImages
        }
    },
    actions: {
        loadHomeImages( {commit} ) {
            Api().get('q=users&image_type=photo&pretty=true')
                .then( response => {
                    commit('SET_HOME_IMAGES', response.data.hits)
                })
        }
    }
}
