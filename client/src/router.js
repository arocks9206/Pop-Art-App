import Vue from 'vue';
import VueRouter from 'vue-router';
import Warhol from './components/Artists/Warhol.vue';
import Lichtenstein from './components/Artists/Lichtenstein.vue'
import Overview from './components/Overview.vue';
import Quiz from './components/Quiz/Quiz.vue';
import TimeLine from './components/TimeLine/TimeLine.vue';
import KeyArtists from './components/Artists/KeyArtists.vue';



Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Overview },
    { path: '/timeline', component: TimeLine },
    { path: '/artists/warhol', component: Warhol },
    { path: '/artists/lichtenstein', component: Lichtenstein},
    { path: '/quiz/:id', component: Quiz, params: { id: 'id'} },
    { path: '/artists/keyartists', component: KeyArtists }

  ]
})

export default router;
