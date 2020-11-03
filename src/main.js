import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import axios from 'axios'
import VueAxios from 'vue-axios'


new Vue({
  vuetify,
  render: h => h(App),
  router,
  VueAxios,
  axios
}).$mount('#app')
