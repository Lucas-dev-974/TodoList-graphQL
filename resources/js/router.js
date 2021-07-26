import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/home.vue';

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },

        { path: "*", component: Home }
    ],

})


export default router;