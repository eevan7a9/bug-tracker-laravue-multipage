import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component: () => import("../pages/Home.vue")
        },
        {
            path:'/about',
            name:'about',
            component: () => import("../pages/About.vue")
        },

    ]
});
