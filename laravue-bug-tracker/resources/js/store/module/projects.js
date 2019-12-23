// axios is already imported at app.js
const state = {
    projects: []
}
const getters = {
    projects: state => state.projects
}
const actions = {
    getProjects: async ({ commit }) => {
        const result = await axios.get("api_web_session/v1/projects");
        commit("setProjects", result.data);
    }
}
const mutations = {
    setProjects: (state, projects) => state.projects = projects
}

export default {
    state,
    getters,
    actions,
    mutations
}
