import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../assets/app.scss'

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
