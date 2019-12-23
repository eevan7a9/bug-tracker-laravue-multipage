// axios already imported at app.js
const state = {
    bugs: []
};
const getters = {
    bugs: state => state.bugs
};
const actions = {
    getBugs: async ({ commit }) => {
        const result = await axios.get("api_web_session/v1/bugs");
        console.log(result)
        commit("setBugs", result.data);
    }
};
const mutations = {
    setBugs: (state, bugs) => state.bugs = bugs
};

export default {
    state,
    getters,
    actions,
    mutations
}
