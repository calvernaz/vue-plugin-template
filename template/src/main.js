import Vue from 'vue'
import App from './App.vue'
import VueHello from './components'

Vue.use(VueHello)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
