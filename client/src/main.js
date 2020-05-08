import Vue from 'vue';
import App from './App.vue';
import router from './router'
import ScrollView from 'vue-scrollview'

Vue.config.productionTip = false

export const eventBus = new Vue()

Vue.use(ScrollView)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
