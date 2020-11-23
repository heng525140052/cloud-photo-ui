import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import axios from 'axios'
import VueAxios from 'vue-axios'

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
})



new Vue({
  vuetify,
  render: h => h(App),
  router,
  VueAxios,
  axios
}).$mount('#app')
