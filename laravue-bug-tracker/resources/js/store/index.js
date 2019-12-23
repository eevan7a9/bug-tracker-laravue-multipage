import Vue from 'vue'
import Vuex from 'vuex'
import Projects from "./module/projects";
// axios already imported at app.js
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Projects,
    }
})
