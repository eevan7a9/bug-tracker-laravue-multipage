import Vue from 'vue'
import router from './router/routes';
import axios from 'axios';
import store from "./store/index";
require('./bootstrap');
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

Vue.component('app-component', require('./components/App.vue').default);

axios.defaults.baseURL = 'http://localhost:8000/';

const app = new Vue({
    el: '#app',
    router,
    store
});
