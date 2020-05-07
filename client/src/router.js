import Vue from 'vue';
import VueRouter from 'vue-router';
import Artists from './components/Artists/Artists.vue';
import Films from './components/Films/Films.vue';
import Overview from './components/Overview.vue';
// import Designers from './components/Designers.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Overview },
    { path: '/artists', component: Artists },
    { path: '/films', component: Films }
    // { path: '/designers', component: Designers}
  ]
})

export default router;
