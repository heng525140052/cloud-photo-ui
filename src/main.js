import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'


new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
