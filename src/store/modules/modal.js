export default {
    namespaced: true,
    state: {
        modalVisible: false,
        modalComponent: null,
        title: null
    },
    mutations: {
        showModal(state, data) {
            console.log(data)
            state.modalVisible = true
            state.modalComponent = data.componentName,
            state.title = data.title
        },
        hideModal(state) {
            state.modalVisible = false
            state.modalComponent = null,
            state.title = null
        }
    },
    getters: {
        checkVisible: state => state.modalVisible,
        getModalComponent: state => state.modalComponent,
        getModalTitle: state => state.title
    }
}