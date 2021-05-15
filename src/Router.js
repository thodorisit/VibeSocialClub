import Vue from 'vue'
import VueRouter from 'vue-router'

import RecordComponent from '@/components/RecordComponent.vue'
import PlaybackComponent from '@/components/PlaybackComponent.vue'
import LearnComponent from '@/components/LearnComponent.vue'
import ContactComponent from '@/components/ContactComponent.vue'
import NoSupportComponent from '@/components/NoSupportComponent.vue'
import NotFoundComponent from '@/components/NotFoundComponent.vue'

import VibrateMiddleware from '@/middlewares/Vibrate.js'

const routes = [
    {
        name: 'record',
        path: '/',
        component: RecordComponent,
        beforeEnter: (to, from, next) => {
            if (VibrateMiddleware.availability()) {
                next();
            } else {
                next('/nosupport');
            }
        }
    },
    {
        name: 'playback',
        path: '/playback/:vibe',
        component: PlaybackComponent,
        props: true,
        beforeEnter: (to, from, next) => {
            if (VibrateMiddleware.availability()) {
                next();
            } else {
                next('/nosupport');
            }
        }
    },
    {
        name: 'learn',
        path: '/learn',
        component: LearnComponent,
        props: true
    },
    {
        name: 'contact',
        path: '/contact',
        component: ContactComponent,
        props: true
    },
    {
        name: 'nosupport',
        path: '/nosupport',
        component: NoSupportComponent,
        props: true
    },
    {
        name: 'notfound',
        path: '*',
        component: NotFoundComponent,
        props: true
    },
];

const router = new VueRouter({
    mode: 'hash',
    routes: routes,
    scrollBehavior (to) {
        if (to.hash) {
            return window.scrollTo({ 
            top: (document.querySelector(to.hash).offsetTop)-70, 
            behavior: 'smooth' 
            })
        } else {
            return { x: 0, y: 0 }
        }
    }
});
Vue.use(VueRouter);

export default router;