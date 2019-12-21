import Vue from 'vue'
import router from './router/routes';
import BootstrapVue from 'bootstrap-vue'
require('./bootstrap');

Vue.use(BootstrapVue);

Vue.component('app-component', require('./components/App.vue').default);

const app = new Vue({
    el: '#app',
    router
});
