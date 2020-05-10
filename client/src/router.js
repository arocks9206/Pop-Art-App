import Vue from 'vue';
import VueRouter from 'vue-router';
import Artists from './components/Artists/Artists.vue';
import AndyWarhol from './components/AndyWarhol/AndyWarhol.vue';
import Overview from './components/Overview.vue';
import RoyLicht from './components/RoyLicht/RoyLicht.vue';
import Quiz from './components/Quiz/Quiz.vue'
// import Designers from './components/Designers.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Overview },
    { path: '/andywarhol', component: AndyWarhol },
    {
      path: '/roylicht',
      component: RoyLicht,
      name: 'RoyLicht',
      props: true
    },
    { path: '/artists', component: Artists },
    { path: '/quiz/:id', component: Quiz, params: { id: 'id'} }
    // { path: '/designers', component: Designers}
  ]
})

export default router;
