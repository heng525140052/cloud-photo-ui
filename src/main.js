import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer, {
  // debug: true,
  defaultOptions: {
    zIndex: 9999
  }
})


new Vue({
  vuetify,
  render: h => h(App),
  router,
  VueAxios,
  axios,
  ElementUI
}).$mount('#app')
