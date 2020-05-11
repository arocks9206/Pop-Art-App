import Vue from 'vue';
import App from './App.vue';
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'


Vue.config.productionTip = false

export const eventBus = new Vue()

Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
