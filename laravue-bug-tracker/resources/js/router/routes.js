import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'bugs',
            component: () => import("../pages/Bugs.vue")
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
    ]
});
