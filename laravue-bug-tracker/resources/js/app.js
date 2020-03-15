import Vue from 'vue'
import router from './router/routes';
import axios from 'axios';
import store from "./store/index";
require('./bootstrap');
import BootstrapVue from 'bootstrap-vue';
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);

Vue.component('app-component', require('./components/App.vue').default);
Vue.component('profile-component', require('./components/Profile.vue').default);

axios.defaults.baseURL = 'http://localhost:8000/';

const app = new Vue({
    el: '#app',
    router,
    store
});
