import Vue from 'vue'
import Vuex from 'vuex'
import projects from "./module/projects";
import bugs from "./module/bugs";
import developers from "./module/developers";
import testers from "./module/testers";
import user from "./module/user";
import overlay_loader from "./module/overlay_loader";
// axios already imported at app.js

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        projects,
        bugs,
        developers,
        testers,
        user,
        overlay_loader
    }
})
