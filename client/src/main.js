import Vue from 'vue'
import App from './App.vue'
import ScrollView from 'vue-scrollview'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

Vue.use(ScrollView)
Vue.config.productionTip = false

export const eventBus = new Vue()



new Vue({
  render: h => h(App),
}).$mount('#app')
