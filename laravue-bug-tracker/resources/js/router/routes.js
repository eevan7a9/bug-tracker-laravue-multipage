import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [{
        path: '/',
        name: 'bugs',
        component: () => import("../pages/Bugs.vue"),
        props: true
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import("../pages/Projects.vue")
    },
    {
        path: '/developers',
        name: 'developers',
        component: () => import("../pages/Developers.vue")
    },
    {
        path: '/testers',
        name: 'testers',
        component: () => import("../pages/Testers.vue")
    },
    {
        path: '/user',
        name: 'user',
        component: () => import("../pages/User.vue")
    },
]


const router = new VueRouter({
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    },
    routes
})

export default router;
