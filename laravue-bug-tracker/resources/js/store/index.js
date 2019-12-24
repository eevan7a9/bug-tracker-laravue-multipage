import Vue from 'vue'
import Vuex from 'vuex'
import projects from "./module/projects";
import bugs from "./module/bugs";
import developers from "./module/developers";
// axios already imported at app.js
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        projects,
        bugs,
        developers
    }
})
