'use strict'

import Hello from './Hello.vue'

const VueHello = {
  install (Vue) {
    Vue.component('vue-hello', Hello)
  }
}

/**
 * When required globally
 */
if (typeof (window) !== 'undefined' && typeof (window.Vue) !== 'undefined') {
  window.Vue.use(VueHello)
}

export default VueHello
