import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

new Vue({
  el: '#pokebase',
  render: h => h(App)
})
