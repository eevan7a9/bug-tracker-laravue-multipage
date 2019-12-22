import Vue from 'vue'
import router from './router/routes';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
require('./bootstrap');

Vue.use(BootstrapVue);

Vue.component('app-component', require('./components/App.vue').default);

axios.defaults.baseURL = 'http://localhost:8000/';
const app = new Vue({
    el: '#app',
    router
});
