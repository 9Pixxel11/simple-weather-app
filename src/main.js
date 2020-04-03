import Vue from 'vue'
import App from './App.vue'
import './styles/app.css'
import './styles/search.css'
import './styles/weather.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
