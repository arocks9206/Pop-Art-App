import Vue from 'vue';
import VueRouter from 'vue-router';
import Artists from './components/Artists/Artists.vue';
import AndyWarhol from './components/AndyWarhol/AndyWarhol.vue';
import Overview from './components/Overview.vue';
import RoyLicht from './components/RoyLicht/RoyLicht.vue'
// import Designers from './components/Designers.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Overview },
    { path: '/andywarhol', component: AndyWarhol },
    { path: '/roylicht', component: RoyLicht},
    { path: '/artists', component: Artists }
    // { path: '/designers', component: Designers}
  ]
})

export default router;
