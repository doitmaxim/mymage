import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import VueMasonry from 'vue-masonry-css'

Vue.config.productionTip = false

Vue.use(VueMasonry)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
