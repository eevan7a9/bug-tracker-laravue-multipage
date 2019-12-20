import Vue from 'vue'
import router from './router/routes';
require('./bootstrap');




Vue.component('app-component', require('./components/App.vue').default);

const app = new Vue({
    el: '#app',
    router
});
