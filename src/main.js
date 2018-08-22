import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios
import './api/index'
// component
import './components/index'

Vue.config.productionTip = false

import 'normalize.css'
import './plugins/element.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
