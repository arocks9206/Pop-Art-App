import Vue from 'vue';
import VueRouter from 'vue-router';
import Warhol from './components/Artists/Warhol.vue';
import Lichtenstein from './components/Artists/Lichtenstein.vue'
import Overview from './components/Overview.vue';
import Quiz from './components/Quiz/Quiz.vue'


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Overview },
    { path: '/artists/warhol', component: Warhol },
    { path: '/artists/lichtenstein', component: Lichtenstein},
    { path: '/quiz/:id', component: Quiz, params: { id: 'id'} }


    // { path: '/', component: Overview },
    // { path: '/artists/:id', component: Artists, alias: '/lesson', params: { id: ':id'} },
    //
    //
    //
    // { path: '/', component: Overview },
    // // { path: '/andywarhol', component: Artists, name: 'Artists', props: true },
    // {
    //   path: '/lichtenstein',
    //   component: Artists,
    //   name: 'Artists',
    //   props: true
    // },
    //
    // { path: '/quiz/:id', component: Quiz, params: { id: 'id'} }
    // // { path: '/designers', component: Designers}
  ]
})

export default router;
